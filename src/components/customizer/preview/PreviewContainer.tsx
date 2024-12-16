import React from 'react';
import { RibbonCustomization } from '../../../types/ribbon';
import RibbonPreview from './RibbonPreview';

interface PreviewContainerProps {
  customization: RibbonCustomization;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ customization }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <RibbonPreview customization={customization} />
      </div>
    </div>
  );
};

export default PreviewContainer;