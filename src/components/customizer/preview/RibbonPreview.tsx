import React from 'react';
import { RibbonCustomization } from '../../../types/ribbon';
import { getFontFamily, getFontSizeInRem } from '../../../utils/fonts';
import { getFoilColor, getRibbonImageUrl } from '../../../utils/colors';

interface RibbonPreviewProps {
  customization: RibbonCustomization;
}

const RibbonPreview: React.FC<RibbonPreviewProps> = ({ customization }) => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getRibbonImageUrl(customization.ribbonColor, customization.ribbonType)})`
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        {customization.logoPosition === 'left' && (
          <div className="w-12 h-12 mr-4">
            {customization.logo && (
              <img
                src={URL.createObjectURL(customization.logo)}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        )}
        
        <div
          className="text-center"
          style={{
            fontFamily: getFontFamily(customization.font),
            fontSize: getFontSizeInRem(customization.fontSize),
            color: getFoilColor(customization.foilColor),
          }}
        >
          <div>Sample Text</div>
          {customization.textLayout === 'double' && (
            <div>Second Line</div>
          )}
        </div>
        
        {customization.logoPosition === 'right' && (
          <div className="w-12 h-12 ml-4">
            {customization.logo && (
              <img
                src={URL.createObjectURL(customization.logo)}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RibbonPreview;