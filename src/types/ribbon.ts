// Base types
export interface RibbonColor {
  id: string;
  name: string;
  imageUrl: string;
}

export interface FontOption {
  id: string;
  name: string;
  category: 'block' | 'script';
  preview: string;
}

export interface FoilColor {
  id: string;
  name: string;
  hex: string;
}

export interface PaymentInfo {
  gcashScreenshot: File | null;
  gcashReferenceNumber: string;
}

export interface CustomerInfo {
  fullName: string;
  companyName: string;
  mobileNumber: string;
  email: string;
  shippingPreference: 'pickup' | 'delivery';
  payment: PaymentInfo;
}

export interface RibbonCustomization {
  ribbonType: 'satin' | 'doubleEdge';
  ribbonColor: string;
  ribbonWidth: string;
  textLayout: 'single' | 'double';
  foilColor: string;
  font: string;
  fontSize: string;
  logo: File | null;
  logoPosition: 'none' | 'left' | 'right';
}