import React from 'react';
import { RadioGroup } from '@radix-ui/react-radio-group';

interface TextLayoutSelectorProps {
  value: 'single' | 'double';
  onChange: (value: 'single' | 'double') => void;
}

const TextLayoutSelector: React.FC<TextLayoutSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Text Layout</label>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <RadioGroup.Item value="single" className="w-4 h-4" />
            <span>Single Line</span>
          </label>
          <label className="flex items-center space-x-2">
            <RadioGroup.Item value="double" className="w-4 h-4" />
            <span>Double Line</span>
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default TextLayoutSelector;