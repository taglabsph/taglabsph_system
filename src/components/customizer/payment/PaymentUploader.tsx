import React from 'react';
import { uploadToGoogleDrive } from '../../../services/googleDrive';

interface PaymentUploaderProps {
  onChange: (field: string, value: any) => void;
}

const PaymentUploader: React.FC<PaymentUploaderProps> = ({ onChange }) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const fileId = await uploadToGoogleDrive(file, 'payment');
        onChange('gcashScreenshot', file);
      } catch (error) {
        console.error('Error uploading payment screenshot:', error);
      }
    }
  };

  return (
    <div className="space-y-4 border-t pt-6 mt-6">
      <h3 className="text-lg font-medium">Payment Information</h3>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm text-blue-800">
          Please send your payment to GCash number: <strong>09123456789</strong>
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          GCash Reference Number
        </label>
        <input
          type="text"
          onChange={(e) => onChange('gcashReferenceNumber', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter GCash reference number"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Upload Payment Screenshot
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
        <p className="text-sm text-gray-500">
          Please upload a screenshot of your GCash payment for verification
        </p>
      </div>
    </div>
  );
};

export default PaymentUploader;