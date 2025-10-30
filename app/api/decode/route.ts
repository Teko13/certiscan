import { NextRequest, NextResponse } from 'next/server';
import { decoderQrCode } from '@teko13/certiscan';

export async function POST(request: NextRequest) {
  try {
    const { qrData } = await request.json();
    
    if (!qrData) {
      return NextResponse.json(
        { error: 'QR data is required' },
        { status: 400 }
      );
    }

    // Log pour débogage
    console.log('QR Data reçu:', qrData);
    console.log('Longueur QR Data:', qrData.length);
    console.log('Premiers caractères:', qrData.substring(0, 50));
    console.log('Derniers caractères:', qrData.substring(qrData.length - 50));
    
    // Convertir les caractères de contrôle textuels en vrais caractères
    let processedQrData = qrData
      .replace(/<GS>/g, '\x1d')  // Group Separator
      .replace(/<US>/g, '\x1f')  // Unit Separator
      .replace(/<RS>/g, '\x1e')  // Record Separator
      .replace(/<FS>/g, '\x1c')  // File Separator
      .replace(/\^_/g, '\x1f');  // Alternative notation for US
    
    console.log('QR Data traité:', processedQrData);
    console.log('Longueur QR Data traité:', processedQrData.length);
    
    // Décoder le QR code côté serveur
    const decodedData = await decoderQrCode(processedQrData);
    
    return NextResponse.json({
      success: true,
      data: decodedData
    });
    
  } catch (error) {
    console.error('Error decoding QR code:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}
