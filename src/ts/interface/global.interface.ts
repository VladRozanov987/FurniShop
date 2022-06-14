// Header interface
// __________________________________________________
export interface IHeaderNavbarItems {
  label: string;
  href: string;
}

// Main interface
// __________________________________________________
// Couter conponent
export interface ICouterItems {
  label: string;
  value: string;
}

// Slider conponent
export interface ISliderItems {
  title: string,
  img: string,
  price: string,
  oldPrice?: string,
}

// Footer interface
// __________________________________________________
export interface IFooterSocItems {
  img: string;
}