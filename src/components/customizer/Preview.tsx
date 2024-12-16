import React from 'react';
import { RibbonCustomization } from '../../types/ribbon';

interface PreviewProps {
  customization: RibbonCustomization;
}

const Preview: React.FC<PreviewProps> = ({ customization }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {/* Ribbon preview implementation */}
        <div className="relative w-full h-full">
          {/* Ribbon background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getRibbonImageUrl(customization)})`
            }}
          />
          
          {/* Text and logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {customization.logoPosition === 'left' && (
              <div className="w-12 h-12 mr-4">
                {/* Logo preview */}
              </div>
            )}
            
            <div
              className="text-center"
              style={{
                fontFamily: getFontFamily(customization.font),
                fontSize: `${customization.fontSize}rem`,
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
                {/* Logo preview */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;