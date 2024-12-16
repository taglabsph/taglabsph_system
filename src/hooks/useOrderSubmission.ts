import { useState } from 'react';
import { CustomerInfo, RibbonCustomization } from '../types/ribbon';
import { saveOrderToSheet } from '../services/googleSheets';

export const useOrderSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitOrder = async (customerInfo: CustomerInfo, customization: RibbonCustomization) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await saveOrderToSheet(customerInfo, customization);
      return true;
    } catch (err) {
      setError('Failed to submit order. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    submitOrder,
  };
};