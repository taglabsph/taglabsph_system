import React from 'react';
import { RadioGroup } from '@radix-ui/react-radio-group';

interface RibbonTypeSelectorProps {
  value: 'satin' | 'doubleEdge';
  onChange: (value: 'satin' | 'doubleEdge') => void;
}

const RibbonTypeSelector: React.FC<RibbonTypeSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select Ribbon Type</h3>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <RadioGroup.Item value="satin" className="w-4 h-4" />
            <span>Satin Ribbon</span>
          </label>
          <label className="flex items-center space-x-2">
            <RadioGroup.Item value="doubleEdge" className="w-4 h-4" />
            <span>Double Edge Ribbon</span>
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RibbonTypeSelector;