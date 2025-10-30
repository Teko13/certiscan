declare module '@teko13/certiscan' {
  export function decoderQrCode(qrData: string): {
    success: boolean;
    error: string | null;
    header: {
      version: number;
      ca_id: string;
      cert_id: string;
      emit_date: string;
      sign_date: string;
      doc_type_id: string;
      perimeter_id: string;
      country_id: string;
      length: number;
      mode: string;
    };
    message: {
      dataset: Record<string, string>;
      count: number;
    };
    signature: {
      valid: boolean;
      error: string | null;
    };
  };
}
