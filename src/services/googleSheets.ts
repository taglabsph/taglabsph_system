import { google } from 'googleapis';
import { CustomerInfo, RibbonCustomization } from '../types/ribbon';

const SPREADSHEET_ID = '1egvEkR9JpNn5-vz31C2JOnINRIBgDnIz86xiD1HzWHY';

export const saveOrderToSheet = async (
  customerInfo: CustomerInfo,
  customization: RibbonCustomization
) => {
  const sheets = google.sheets({ version: 'v4', auth });
  
  const values = [
    [
      new Date().toISOString(),
      customerInfo.fullName,
      customerInfo.companyName,
      customerInfo.email,
      customerInfo.mobileNumber,
      customerInfo.shippingPreference,
      customization.ribbonType,
      customization.ribbonColor,
      customization.ribbonWidth,
      customization.textLayout,
      customization.foilColor,
      customization.font,
      customization.fontSize,
      customization.logoPosition,
      customerInfo.payment.gcashReferenceNumber,
      `https://drive.google.com/file/d/${await uploadToGoogleDrive(customerInfo.payment.gcashScreenshot!, 'payment')}/view`,
      customization.logo ? `https://drive.google.com/file/d/${await uploadToGoogleDrive(customization.logo, 'logo')}/view` : '',
    ],
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Orders!A:Q',
      valueInputOption: 'RAW',
      requestBody: { values },
    });
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
};