// ==========================================================
// Nguyen Xuan An — Portfolio interactions
// Editorial motion inspired by Coffee Ground Zero
// ==========================================================

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- 1. Scroll progress bar ----------
const bar = document.getElementById('progressBar');
const updateProgress = () => {
  if (!bar) return;
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  bar.style.width = `${Math.min(1, Math.max(0, scrolled)) * 100}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ---------- 2. Reveal on scroll (staggered) ----------
const revealTargets = document.querySelectorAll('[data-reveal], .hero__title, .project, .note, .wheel__node');
revealTargets.forEach(el => {
  if (!el.hasAttribute('data-reveal') && !el.classList.contains('hero__title')) el.setAttribute('data-reveal', '');
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('is-visible'), delay);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-reveal], .hero__title').forEach(el => io.observe(el));

// Stagger children of data-reveal-stagger containers
document.querySelectorAll('[data-reveal-stagger]').forEach(container => {
  const kids = container.querySelectorAll('[data-reveal]');
  kids.forEach((k, i) => k.style.transitionDelay = `${0.08 * i}s`);
});

// ---------- 3. Count-up for facts ----------
const counters = document.querySelectorAll('[data-count]');
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const end = parseInt(el.dataset.count, 10);
    if (reduced) { el.textContent = end; countIO.unobserve(el); return; }
    const start = performance.now();
    const dur = 1200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => countIO.observe(c));

// ---------- 4. Nav state + dark-section swap ----------
const nav = document.getElementById('nav');
const darkSections = document.querySelectorAll('.section--dark, .footer');
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!nav) return;
    if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
      nav.classList.add('is-dark');
    } else if (entry.intersectionRatio < 0.4) {
      // only remove when no dark section is currently dominant
      const anyDark = Array.from(darkSections).some(s => {
        const r = s.getBoundingClientRect();
        return r.top < 80 && r.bottom > 80;
      });
      if (!anyDark) nav.classList.remove('is-dark');
    }
  });
}, { threshold: [0, 0.4, 1] });
darkSections.forEach(s => navIO.observe(s));

const scrollShadow = () => {
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 40 ? '0 8px 28px rgba(31,34,33,0.08)' : 'none';
};
window.addEventListener('scroll', scrollShadow, { passive: true });
scrollShadow();

// ---------- 5. Mobile nav ----------
if (nav) {
  const navLinks = nav.querySelector('.nav__links');
  const navCta = nav.querySelector('.btn');

  if (navLinks) {
    const toggle = document.createElement('button');
    toggle.className = 'nav__toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.innerHTML = '<span class="nav__toggle-lines" aria-hidden="true"></span>';

    const backdrop = document.createElement('div');
    backdrop.className = 'nav__sheet-backdrop';
    backdrop.hidden = true;

    const sheet = document.createElement('div');
    sheet.className = 'nav__sheet';
    sheet.hidden = true;

    const sheetLinks = document.createElement('div');
    sheetLinks.className = 'nav__sheet-links';

    Array.from(navLinks.querySelectorAll('a')).forEach((link) => {
      const clone = link.cloneNode(true);
      clone.innerHTML = `<span>${link.textContent.trim()}</span><small>Open</small>`;
      sheetLinks.appendChild(clone);
    });

    sheet.appendChild(sheetLinks);

    if (navCta) {
      const ctaClone = navCta.cloneNode(true);
      ctaClone.className = 'nav__sheet-cta';
      sheet.appendChild(ctaClone);
    }

    const copy = document.createElement('p');
    copy.className = 'nav__sheet-copy';
    copy.textContent = 'Editorial design, digital systems, and a full digital-marketing folio in one place.';
    sheet.appendChild(copy);

    nav.appendChild(toggle);
    document.body.append(backdrop, sheet);

    const closeSheet = () => {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      backdrop.classList.remove('is-open');
      sheet.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      window.setTimeout(() => {
        if (!sheet.classList.contains('is-open')) {
          backdrop.hidden = true;
          sheet.hidden = true;
        }
      }, 260);
    };

    const openSheet = () => {
      backdrop.hidden = false;
      sheet.hidden = false;
      requestAnimationFrame(() => {
        toggle.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close navigation menu');
        backdrop.classList.add('is-open');
        sheet.classList.add('is-open');
        document.body.classList.add('menu-open');
      });
    };

    toggle.addEventListener('click', () => {
      if (sheet.classList.contains('is-open')) closeSheet();
      else openSheet();
    });

    backdrop.addEventListener('click', closeSheet);
    sheet.querySelectorAll('a').forEach(link => link.addEventListener('click', closeSheet));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sheet.classList.contains('is-open')) closeSheet();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && sheet.classList.contains('is-open')) closeSheet();
    });
  }
}

// ---------- 6. Custom cursor ----------
const cursor = document.getElementById('cursor');
if (cursor && !matchMedia('(hover: none)').matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  const frame = () => {
    cx += (tx - cx) * 0.2;
    cy += (ty - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  const hoverables = document.querySelectorAll('a, button, .btn, .project, .note, .wheel__node, select');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });

  // Dark sections invert cursor feel
  const darkZones = document.querySelectorAll('.section--dark, .footer, .nav.is-dark');
  const cursorZoneCheck = () => {
    const el = document.elementFromPoint(cx, cy);
    if (!el) return;
    const inDark = el.closest('.section--dark, .footer');
    cursor.classList.toggle('is-dark', !!inDark);
  };
  setInterval(cursorZoneCheck, 120);
}

// ---------- 7. Parallax on hero media ----------
const heroMedia = document.querySelector('.hero__media-inner');
if (heroMedia && !reduced) {
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY, 900);
    heroMedia.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(${1.02 + y * 0.0002})`;
  }, { passive: true });
}

// ---------- 8. Magnetic arrows on project cards ----------
document.querySelectorAll('.project').forEach(card => {
  const arrow = card.querySelector('.project__arrow');
  if (!arrow || reduced) return;
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.06;
    const y = (e.clientY - r.top - r.height / 2) * 0.06;
    arrow.style.transform = `translate(${x}px, ${y}px)`;
  });
  card.addEventListener('mouseleave', () => { arrow.style.transform = ''; });
});

// ---------- 9. Service inquiry composer ----------
const serviceSelect = document.getElementById('svc');
const serviceInquiryButton = document.getElementById('serviceInquiryButton');
if (serviceSelect && serviceInquiryButton) {
  const syncServiceInquiry = () => {
    const service = serviceSelect.value.trim();
    const subject = encodeURIComponent(`Project inquiry — ${service}`);
    const body = encodeURIComponent(
      `Hello An,\n\nI would like to discuss ${service.toLowerCase()}.\n\nTimeline:\nBudget range:\nWhat we are building:\n\nBest,\n`
    );
    serviceInquiryButton.href = `mailto:hello@nguyenxuanan.design?subject=${subject}&body=${body}`;
  };

  serviceSelect.addEventListener('change', syncServiceInquiry);
  syncServiceInquiry();
}

// ---------- 10. Reduced motion guards ----------
if (reduced) {
  document.querySelectorAll('.ticker, .hero__line, .dot, .wheel__dashed, .hero__media-inner').forEach(el => {
    el.style.animation = 'none';
  });
}
