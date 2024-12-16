import { useState } from 'react';
import { RibbonCustomization } from '../types/ribbon';

const initialCustomization: RibbonCustomization = {
  ribbonType: 'satin',
  ribbonColor: '',
  ribbonWidth: '1',
  textLayout: 'single',
  foilColor: '',
  font: '',
  fontSize: '3',
  logo: null,
  logoPosition: 'none',
};

export const useCustomization = () => {
  const [customization, setCustomization] = useState<RibbonCustomization>(initialCustomization);

  const updateCustomization = (field: keyof RibbonCustomization, value: any) => {
    setCustomization(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    customization,
    updateCustomization,
  };
};