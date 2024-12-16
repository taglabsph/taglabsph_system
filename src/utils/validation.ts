// Add to existing validation schemas
export const paymentSchema = z.object({
  gcashReferenceNumber: z.string().min(1, 'Reference number is required'),
  gcashScreenshot: z.any().refine((file) => file instanceof File, 'Screenshot is required'),
});