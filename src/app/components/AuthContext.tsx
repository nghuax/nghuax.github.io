import { createContext, useContext, useState, useEffect, useSyncExternalStore, type ReactNode } from "react";

interface User {
  name: string;
  phone: string;
  email: string;
}

// Module-level store so auth persists across route layouts
let currentUser: User | null = null;
const listeners = new Set<() => void>();

function getUser() { return currentUser; }
function subscribe(cb: () => void) { listeners.add(cb); return () => listeners.delete(cb); }
function setUser(u: User | null) {
  currentUser = u;
  if (u) localStorage.setItem("resq_user", JSON.stringify(u));
  else localStorage.removeItem("resq_user");
  listeners.forEach((cb) => cb());
}

// Init from localStorage
try {
  const saved = localStorage.getItem("resq_user");
  if (saved) currentUser = JSON.parse(saved);
} catch {}

export function useAuth() {
  const user = useSyncExternalStore(subscribe, getUser);
  return {
    user,
    isLoggedIn: !!user,
    login: (u: User) => setUser(u),
    logout: () => setUser(null),
  };
}

// No-op provider for tree compatibility
export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
