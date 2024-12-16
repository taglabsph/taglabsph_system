import { FontOption } from '../types/ribbon';

export const getFontFamily = (fontId: string): string => {
  const font = [...blockFonts, ...scriptFonts].find(f => f.id === fontId);
  return font ? font.name : 'Arial';
};

export const getFontSizeInRem = (size: string): string => {
  const sizeMap: Record<string, string> = {
    '2.5': '2.5rem',
    '3': '3rem',
    '4': '4rem',
    '5': '5rem'
  };
  return sizeMap[size] || '3rem';
};