import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CustomerInfo } from '../../types/ribbon';
import PaymentUploader from './payment/PaymentUploader';

const customerSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  mobileNumber: z.string().regex(/^[0-9+\-\s()]+$/, 'Invalid mobile number'),
  email: z.string().email('Invalid email address'),
  shippingPreference: z.enum(['pickup', 'delivery']),
  payment: z.object({
    gcashReferenceNumber: z.string().min(1, 'Reference number is required'),
    gcashScreenshot: z.any().refine((file) => file instanceof File, 'Screenshot is required'),
  }),
});

interface CustomerFormProps {
  onSubmit: (data: CustomerInfo) => void;
  isSubmitting: boolean;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CustomerInfo>({
    resolver: zodResolver(customerSchema),
  });

  const handlePaymentChange = (field: string, value: any) => {
    setValue(`payment.${field}` as any, value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          {...register('fullName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      {/* Other existing form fields */}

      <PaymentUploader onChange={handlePaymentChange} />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Order'}
      </button>
    </form>
  );
};

export default CustomerForm;