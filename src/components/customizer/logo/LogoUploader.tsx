import React from 'react';
import { uploadToGoogleDrive } from '../../../services/googleDrive';

interface LogoUploaderProps {
  position: 'none' | 'left' | 'right';
  onChange: (field: string, value: any) => void;
}

const LogoUploader: React.FC<LogoUploaderProps> = ({ position, onChange }) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const fileId = await uploadToGoogleDrive(file);
        onChange('logo', file);
      } catch (error) {
        console.error('Error uploading logo:', error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Logo Options</h3>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Logo Position</label>
        <select
          value={position}
          onChange={(e) => onChange('logoPosition', e.target.value)}
          className="w-full rounded-md border-gray-300"
        >
          <option value="none">No Logo</option>
          <option value="left">Left of Text</option>
          <option value="right">Right of Text</option>
        </select>
      </div>
      {position !== 'none' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium">Upload Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default LogoUploader;