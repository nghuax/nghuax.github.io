export type PortfolioRailImage = {
  full: string;
  thumb: string;
};

const toThumb = (path: string) => path.replace("./photo-web/", "./photo-thumb/");
const toRailImages = (images: readonly string[]): PortfolioRailImage[] =>
  images.map((full) => ({
    full,
    thumb: toThumb(full),
  }));

const carImages = [
  "./photo-web/Car/IMG_3470.jpg",
  "./photo-web/Car/IMG_3467.jpg",
  "./photo-web/Car/IMG_3478.jpg",
  "./photo-web/Car/IMG_3481.jpg",
  "./photo-web/Car/J7402839.jpg",
  "./photo-web/Car/JZY09142.jpg",
  "./photo-web/Car/JZY09146.jpg",
  "./photo-web/Car/_SDE0703.jpg",
  "./photo-web/Car/_SDE0715.jpg",
  "./photo-web/Car/_SDE0719.jpg",
  "./photo-web/Car/_SDE0721.jpg",
  "./photo-web/Car/_SDE2315.jpg",
] as const;

const productImages = [
  "./photo-web/Product/JZY00568.jpg",
  "./photo-web/Product/JZY00569.jpg",
  "./photo-web/Product/JZY00577.jpg",
  "./photo-web/Product/LRM_20210117_084719.jpg",
  "./photo-web/Product/Pro-Capture One 0217.jpg",
  "./photo-web/Product/Pro-Capture One 0225.jpg",
] as const;

const furnitureImages = [
  "./photo-web/Furniture/SLO09093.jpg",
  "./photo-web/Furniture/SLO09077.jpg",
  "./photo-web/Furniture/SLO09080.jpg",
  "./photo-web/Furniture/SLO09112.jpg",
  "./photo-web/Furniture/SLO09114.jpg",
  "./photo-web/Furniture/SLO09116.jpg",
  "./photo-web/Furniture/SLO09131.jpg",
  "./photo-web/Furniture/SLO09218.jpg",
  "./photo-web/Furniture/SLO09237.jpg",
  "./photo-web/Furniture/SLO09241.jpg",
  "./photo-web/Furniture/SLO09245.jpg",
  "./photo-web/Furniture/SLO09249.jpg",
] as const;

const streetImages = [
  "./photo-web/Street/J7402851.jpg",
  "./photo-web/Street/J7401090.jpg",
  "./photo-web/Street/J7402691.jpg",
  "./photo-web/Street/PKOldT.jpg",
  "./photo-web/Street/Pkbeach-3.jpg",
  "./photo-web/Street/SLO09265.jpg",
  "./photo-web/Street/SLO09266.jpg",
  "./photo-web/Street/SLO09272.jpg",
  "./photo-web/Street/SLO09283.jpg",
  "./photo-web/Street/SLO09308.jpg",
  "./photo-web/Street/SLO09310.jpg",
  "./photo-web/Street/SLO09332.jpg",
] as const;

const wallpaperImages = [
  "./photo-web/Wallpaper/J7400915.jpg",
  "./photo-web/Wallpaper/Bali.00_07_23_06.Still003.jpg",
  "./photo-web/Wallpaper/COFFEE MUSEUM.jpg",
  "./photo-web/Wallpaper/IMG_5791.jpg",
  "./photo-web/Wallpaper/J7400891.jpg",
  "./photo-web/Wallpaper/J7401961.jpg",
  "./photo-web/Wallpaper/J7402238.jpg",
  "./photo-web/Wallpaper/J7403237.jpg",
  "./photo-web/Wallpaper/J7403303.jpg",
  "./photo-web/Wallpaper/J7403316.jpg",
  "./photo-web/Wallpaper/J7403351-2.jpg",
  "./photo-web/Wallpaper/J7406928.jpg",
  "./photo-web/Wallpaper/SLO08930.jpg",
  "./photo-web/Wallpaper/SLO08932.jpg",
  "./photo-web/Wallpaper/SLO08934.jpg",
  "./photo-web/Wallpaper/SLO08950.jpg",
  "./photo-web/Wallpaper/SLO08964.jpg",
  "./photo-web/Wallpaper/_SDE3319.jpg",
  "./photo-web/Wallpaper/_SDE3706.jpg",
  "./photo-web/Wallpaper/_SDE3721.jpg",
] as const;

export const portfolioReelCards = [
  {
    id: "car",
    title: "CAR",
    subtitle: "Photography",
    thumb: toThumb("./photo-web/Car/IMG_3470.jpg"),
  },
  {
    id: "product",
    title: "PRODUCT",
    subtitle: "Photography",
    thumb: toThumb("./photo-web/Product/JZY00568.jpg"),
  },
  {
    id: "furniture",
    title: "FURNITURE",
    subtitle: "Photography",
    thumb: toThumb("./photo-web/Furniture/SLO09093.jpg"),
  },
  {
    id: "street",
    title: "STREET",
    subtitle: "Photography",
    thumb: toThumb("./photo-web/Street/J7402851.jpg"),
  },
  {
    id: "wallpaper",
    title: "WALLPAPER",
    subtitle: "Photography",
    thumb: toThumb("./photo-web/Wallpaper/IMG_5791.jpg"),
  },
] as const;

export const portfolioSections = [
  {
    id: "car",
    title: "CAR",
    subtitle: "Photography",
    heroImage: carImages[0],
    railImages: toRailImages(carImages),
  },
  {
    id: "product",
    title: "PRODUCT",
    subtitle: "Photography",
    heroImage: productImages[0],
    railImages: toRailImages(productImages),
  },
  {
    id: "furniture",
    title: "FURNITURE",
    subtitle: "Photography",
    heroImage: furnitureImages[0],
    railImages: toRailImages(furnitureImages),
  },
  {
    id: "street",
    title: "STREET",
    subtitle: "Photography",
    heroImage: streetImages[0],
    railImages: toRailImages(streetImages),
  },
  {
    id: "wallpaper",
    title: "WALLPAPER",
    subtitle: "Photography",
    heroImage: wallpaperImages[0],
    railImages: toRailImages(wallpaperImages),
  },
] as const;
