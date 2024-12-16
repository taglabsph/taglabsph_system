import { FoilColor } from '../types/ribbon';

export const getFoilColor = (foilId: string): string => {
  const foil = foilColors.find(f => f.id === foilId);
  return foil ? foil.hex : '#000000';
};

export const getRibbonImageUrl = (ribbonId: string, type: 'satin' | 'doubleEdge'): string => {
  const colors = type === 'satin' ? satinRibbonColors : doubleEdgeRibbonColors;
  const ribbon = colors.find(r => r.id === ribbonId);
  return ribbon ? ribbon.imageUrl : '';
};