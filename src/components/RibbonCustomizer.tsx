import React from 'react';
import { RibbonCustomization } from '../types/ribbon';
import RibbonTypeSelector from './customizer/ribbon-type/RibbonTypeSelector';
import ColorSelector from './customizer/ColorSelector';
import TextCustomizer from './customizer/text/TextCustomizer';
import LogoUploader from './customizer/logo/LogoUploader';
import CustomerForm from './customizer/CustomerForm';
import Preview from './customizer/preview/PreviewContainer';
import { useCustomization } from '../hooks/useCustomization';
import { useOrderSubmission } from '../hooks/useOrderSubmission';

const RibbonCustomizer: React.FC = () => {
  const { customization, updateCustomization } = useCustomization();
  const { isSubmitting, error, submitOrder } = useOrderSubmission();

  const handleSubmit = async (customerInfo: CustomerInfo) => {
    await submitOrder(customerInfo, customization);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <RibbonTypeSelector
            value={customization.ribbonType}
            onChange={(value) => updateCustomization('ribbonType', value)}
          />
          <ColorSelector
            type={customization.ribbonType}
            value={customization.ribbonColor}
            onChange={(value) => updateCustomization('ribbonColor', value)}
          />
          <TextCustomizer
            customization={customization}
            onChange={updateCustomization}
          />
          <LogoUploader
            position={customization.logoPosition}
            onChange={updateCustomization}
          />
          <CustomerForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
        </div>
        <div className="sticky top-4">
          <Preview customization={customization} />
        </div>
      </div>
    </div>
  );
};

export default RibbonCustomizer;