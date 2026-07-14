export interface FEATURES {
  icon: string;
  title: string;
  desc: string;
}
export interface GALLERY {
  src: string;
  alt: string;
  label: string;
}
export interface FAQS {
  q: string;
  a: string;
}
export interface Cocinas {
  label: string;
  slug: string;
  pageTitle: string;
  pageDescription: string;
  pageImage: string;
  pageImageAlt: string;
  textH1: string;
  heroDesc: string;
  introTitle: string;
  introBody: string[];
  features: FEATURES[];
  gallery: GALLERY[];
  faqs: FAQS[];
  waMessage: string;
}
