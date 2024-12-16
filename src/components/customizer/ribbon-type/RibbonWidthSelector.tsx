import React from 'react';
import { Select } from '@radix-ui/react-select';

interface RibbonWidthSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const RibbonWidthSelector: React.FC<RibbonWidthSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Ribbon Width</label>
      <Select value={value} onValueChange={onChange}>
        <Select.Trigger className="w-full">
          <Select.Value placeholder="Select width" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="1">1 inch</Select.Item>
          <Select.Item value="0.75">3/4 inch</Select.Item>
          <Select.Item value="0.5">1/2 inch</Select.Item>
        </Select.Content>
      </Select>
    </div>
  );
};

export default RibbonWidthSelector;