import { google } from 'googleapis';

const LOGO_FOLDER_ID = '1LTegXG7LtXK192M9j54TOydSD8wg3Nwa';
const PAYMENT_FOLDER_ID = '19EPk4VczJFPNujzQmXcY-9a74kwpO9vy';

export const uploadToGoogleDrive = async (file: File, type: 'logo' | 'payment'): Promise<string> => {
  const drive = google.drive({ version: 'v3', auth });
  
  const fileMetadata = {
    name: file.name,
    parents: [type === 'logo' ? '1LTegXG7LtXK192M9j54TOydSD8wg3Nwa' : '1nKDdSmcnF8iWfVNsgs5E7tJFIttR9LoR'],
  };

  const media = {
    mimeType: file.type,
    body: file,
  };

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    return response.data.id || '';
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw error;
  }
};