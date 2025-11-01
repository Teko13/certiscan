'use client';

import { useState, useRef, useCallback } from 'react';
import NextImage from 'next/image';
import { readBarcodesFromImageFile } from 'zxing-wasm';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Note: Le décodage se fait maintenant côté serveur via l'API route

export default function ScannerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [qrData, setQrData] = useState<string | null>(null);
  const [decodedData, setDecodedData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Vérifier le type de fichier
    if (!file.type.startsWith('image/')) {
      setError('Veuillez sélectionner un fichier image valide.');
      return;
    }

    setSelectedFile(file);
    setError(null);
    setQrData(null);
    setDecodedData(null);
    setSuccess(false);

    // Créer l'URL de prévisualisation
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Scanner automatiquement l'image
    scanQRCode(file);
  }, []);

  const scanQRCode = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      // Créer un canvas pour analyser l'image
      const canvas = canvasRef.current;
      if (!canvas) {
        setError('Erreur: Canvas non disponible');
        setIsLoading(false);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setError('Erreur: Contexte canvas non disponible');
        setIsLoading(false);
        return;
      }

      // Créer une image à partir du fichier
      const img = new Image();
      img.onload = async () => {
        try {
          // Calculer une taille optimale pour le canvas (max 800px)
          const maxSize = 800;
          let { width, height } = img;
          
          if (width > maxSize || height > maxSize) {
            const ratio = Math.min(maxSize / width, maxSize / height);
            width = Math.floor(width * ratio);
            height = Math.floor(height * ratio);
          }
          
          // Redimensionner le canvas à la taille optimisée
          canvas.width = width;
          canvas.height = height;
          
          // Dessiner l'image sur le canvas avec redimensionnement
          ctx.drawImage(img, 0, 0, width, height);
          
          // Scanner le QR code avec zxing-wasm
          let qrData = null;
          
          // Fonction pour scanner une image
          const scanImage = async (imageCanvas: HTMLCanvasElement): Promise<string | null> => {
            try {
              const blob = await new Promise<Blob>((resolve) => {
                imageCanvas.toBlob((blob) => {
                  resolve(blob!);
                }, 'image/png', 1.0);
              });
              
              const results = await readBarcodesFromImageFile(blob);
              
              if (results && results.length > 0) {
                return results[0].text;
              }
              
              return null;
            } catch (error) {
              return null;
            }
          };
          
          // Essayer différentes configurations d'image
          const scanAttempts = [
            // 1. Image originale
            { canvas: canvas, name: 'originale' },
            // 2. Image agrandie 2x
            { 
              canvas: (() => {
                const largeCanvas = document.createElement('canvas');
                const largeCtx = largeCanvas.getContext('2d');
                if (largeCtx) {
                  largeCanvas.width = img.width * 2;
                  largeCanvas.height = img.height * 2;
                  largeCtx.drawImage(img, 0, 0, largeCanvas.width, largeCanvas.height);
                }
                return largeCanvas;
              })(), 
              name: 'agrandie 2x' 
            },
            // 3. Image agrandie 3x
            { 
              canvas: (() => {
                const largeCanvas = document.createElement('canvas');
                const largeCtx = largeCanvas.getContext('2d');
                if (largeCtx) {
                  largeCanvas.width = img.width * 3;
                  largeCanvas.height = img.height * 3;
                  largeCtx.drawImage(img, 0, 0, largeCanvas.width, largeCanvas.height);
                }
                return largeCanvas;
              })(), 
              name: 'agrandie 3x' 
            },
            // 4. Image redimensionnée à 1000px max
            { 
              canvas: (() => {
                const maxSize = 1000;
                let { width, height } = img;
                if (width > maxSize || height > maxSize) {
                  const ratio = Math.min(maxSize / width, maxSize / height);
                  width = Math.floor(width * ratio);
                  height = Math.floor(height * ratio);
                }
                const newCanvas = document.createElement('canvas');
                const newCtx = newCanvas.getContext('2d');
                if (newCtx) {
                  newCanvas.width = width;
                  newCanvas.height = height;
                  newCtx.drawImage(img, 0, 0, width, height);
                }
                return newCanvas;
              })(), 
              name: 'redimensionnée 1000px' 
            },
            // 5. Image redimensionnée à 500px max
            { 
              canvas: (() => {
                const maxSize = 500;
                let { width, height } = img;
                if (width > maxSize || height > maxSize) {
                  const ratio = Math.min(maxSize / width, maxSize / height);
                  width = Math.floor(width * ratio);
                  height = Math.floor(height * ratio);
                }
                const newCanvas = document.createElement('canvas');
                const newCtx = newCanvas.getContext('2d');
                if (newCtx) {
                  newCanvas.width = width;
                  newCanvas.height = height;
                  newCtx.drawImage(img, 0, 0, width, height);
                }
                return newCanvas;
              })(), 
              name: 'redimensionnée 500px' 
            },
            // 6. Image redimensionnée à 2000px max
            { 
              canvas: (() => {
                const maxSize = 2000;
                let { width, height } = img;
                if (width > maxSize || height > maxSize) {
                  const ratio = Math.min(maxSize / width, maxSize / height);
                  width = Math.floor(width * ratio);
                  height = Math.floor(height * ratio);
                }
                const newCanvas = document.createElement('canvas');
                const newCtx = newCanvas.getContext('2d');
                if (newCtx) {
                  newCanvas.width = width;
                  newCanvas.height = height;
                  newCtx.drawImage(img, 0, 0, width, height);
                }
                return newCanvas;
              })(), 
              name: 'redimensionnée 2000px' 
            }
          ];
          
          // Essayer chaque configuration
          for (const attempt of scanAttempts) {
            if (!attempt.canvas) continue;
            
            qrData = await scanImage(attempt.canvas);
            
            if (qrData) {
              break;
            }
          }
          
          if (qrData) {
            setQrData(qrData);
            setSuccess(true);
            
            // Décoder avec votre librairie certiscan via l'API route
            try {
              const response = await fetch('/api/decode', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ qrData: qrData }),
              });

              const result = await response.json();

              if (result.success) {
                setDecodedData(result.data);
              } else {
                setError(result.error || 'Erreur lors du décodage des données du certificat.');
              }
            } catch (decodeError) {
              console.error('Erreur de décodage:', decodeError);
              setError('Erreur lors du décodage des données du certificat. Le QR code ne semble pas être un certificat valide.');
            }
          } else {
            setError('Aucun QR code détecté dans cette image. Veuillez vérifier que l\'image contient un QR code valide.');
          }
        } catch (imgError) {
          console.error('Erreur lors du traitement de l\'image:', imgError);
          setError('Erreur lors du traitement de l\'image: ' + (imgError as Error).message);
        }
        
        setIsLoading(false);
      };
      
      img.onerror = () => {
        setError('Erreur lors du chargement de l\'image');
        setIsLoading(false);
      };
      
      img.src = URL.createObjectURL(file);
    } catch (err) {
      console.error('Erreur générale:', err);
      setError('Erreur lors du traitement de l\'image: ' + (err as Error).message);
      setIsLoading(false);
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const fakeEvent = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileSelect(fakeEvent);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const resetScanner = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setQrData(null);
    setDecodedData(null);
    setError(null);
    setSuccess(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-text-primary font-sans">
      <Header currentPage="scanner" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Scanner de QR Code
          </h1>
          <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
            Téléchargez une image de QR code pour analyser automatiquement votre certificat
          </p>
        </div>

        {/* Upload Area */}
        <div className="mb-12">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
              error 
                ? 'border-red-500 bg-red-500/10' 
                : success 
                ? 'border-green-500 bg-green-500/10' 
                : 'border-[#facc15]/50 hover:border-[#facc15] hover:bg-[#facc15]/5'
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            {isLoading ? (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-[#facc15] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-text-secondary">Analyse en cours...</p>
              </div>
            ) : previewUrl ? (
              <div className="space-y-4">
                <NextImage
                  src={previewUrl}
                  alt="Image sélectionnée"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
                <p className="text-text-secondary">Cliquez pour changer d'image</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#facc15]/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-text-primary mb-2">
                    Glissez-déposez votre image ici
                  </p>
                  <p className="text-text-muted">
                    ou cliquez pour sélectionner un fichier
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-400">{error}</p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && qrData && (
          <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-400">QR code scanné avec succès !</p>
            </div>
          </div>
        )}

        {/* Results */}
        {qrData && decodedData && (
          <div className="space-y-8">
            {/* Raw QR Data */}
            <div className="glass-effect rounded-xl p-6 border border-[#facc15]/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#facc15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Données brutes extraites
              </h3>
              <div className="bg-dark-800 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-text-muted break-all">{qrData}</code>
              </div>
            </div>

            {/* Decoded Certificate Data */}
            <div className="glass-effect rounded-xl p-6 border border-[#facc15]/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#facc15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Certificat décodé
              </h3>
              
              <div className="space-y-6">
                {/* Statut de décodage */}
                {!decodedData.success && decodedData.error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-red-400">Erreur de décodage</h4>
                        <p className="text-red-300 text-sm mt-1">{decodedData.error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Header du document */}
                {decodedData.success && decodedData.header && Object.keys(decodedData.header).length > 0 && (
                  <div className="bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#facc15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      En-tête du document
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {Object.entries(decodedData.header).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium text-text-primary capitalize">
                            {key.replace(/_/g, ' ')}:
                          </span>
                          <span className="text-text-secondary text-right max-w-xs wrap-break-word">
                            {String(value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message et données du certificat */}
                {decodedData.success && decodedData.message && (
                  <div className="bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#facc15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Données du certificat
                    </h4>
                    
                    {decodedData.message.error ? (
                      <p className="text-red-400">{decodedData.message.error}</p>
                    ) : decodedData.message.dataset ? (
                      <div className="space-y-3">
                        <p className="text-text-muted text-sm">
                          {decodedData.message.count} champ(s) trouvé(s)
                        </p>
                        <div className="grid gap-3">
                          {Object.entries(decodedData.message.dataset).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-2 border-b border-dark-700 last:border-b-0">
                              <span className="font-medium text-text-primary">
                                {key}:
                              </span>
                              <span className="text-text-secondary text-right max-w-xs wrap-break-word">
                                {String(value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-text-muted">Aucune donnée disponible</p>
                    )}
                  </div>
                )}

                {/* Validation de la signature */}
                {decodedData.success && decodedData.signature && (
                  <div className="bg-[#facc15]/10 border border-[#facc15]/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-[#facc15] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-semibold text-[#facc15]">
                          Vérification de signature
                        </span>
                        <p className="text-text-secondary text-sm mt-1">
                          Cette fonctionnalité sera bientôt disponible.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <button
                onClick={resetScanner}
                className="btn-primary"
              >
                Scanner un autre QR code
              </button>
            </div>
          </div>
        )}

        {/* Hidden canvas for QR processing */}
        <canvas ref={canvasRef} className="hidden" />
      </main>
      
      <Footer />
    </div>
  );
}
