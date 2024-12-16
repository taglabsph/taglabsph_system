import React from 'react';
import { Select } from '@radix-ui/react-select';
import { blockFonts, scriptFonts } from '../../../data/ribbonOptions';

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Font Style</label>
      <Select value={value} onValueChange={onChange}>
        <Select.Trigger className="w-full">
          <Select.Value placeholder="Select font" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Block Fonts</Select.Label>
            {blockFonts.map(font => (
              <Select.Item key={font.id} value={font.id}>
                {font.name}
              </Select.Item>
            ))}
          </Select.Group>
          <Select.Group>
            <Select.Label>Script Fonts</Select.Label>
            {scriptFonts.map(font => (
              <Select.Item key={font.id} value={font.id}>
                {font.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  );
};

export default FontSelector;