import { RibbonColor, FontOption, FoilColor } from '../types/ribbon';

export const satinRibbonColors: RibbonColor[] = [
  { id: 'white', name: 'White', imageUrl: 'https://drive.google.com/uc?id=white-ribbon-id' },
  // Add all 43 color options
];

export const doubleEdgeRibbonColors: RibbonColor[] = [
  { id: 'navy', name: 'Navy Blue', imageUrl: 'https://drive.google.com/uc?id=navy-ribbon-id' },
  // Add all 15 color options
];

export const blockFonts: FontOption[] = [
  { id: 'arial', name: 'Arial', category: 'block', preview: 'ABC123' },
  // Add all 10 block fonts
];

export const scriptFonts: FontOption[] = [
  { id: 'dancing-script', name: 'Dancing Script', category: 'script', preview: 'ABC123' },
  // Add all 10 script fonts
];

export const foilColors: FoilColor[] = [
  { id: 'gold', name: 'Gold', hex: '#FFD700' },
  // Add all 23 foil colors
];