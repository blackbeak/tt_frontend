import React from 'react';
import QRCode from 'qrcode.react';

const SupplierHeader = ({ supplierLogo, qrCode, bgColor }) => {
    const imageStyle = {
        maxHeight: '80px',  // Set the maximum height to 100 pixels
      };

  
  return (
    <header className={`w-full bg-${bgColor} shadow-xl sticky top-0 z-50 py-4 flex justify-between items-center`}>
      <div className="flex items-center">
          {/* Display the partner logo */}
          <img src={supplierLogo} alt="Suppliers Logo" className="h-auto max-h-100 pl-6" style={imageStyle} />
      </div>
      <div className="QRcode pr-6">
        <a href={qrCode}>
          {/* Display QR code */}
          <QRCode value={qrCode} fgColor="#00C07F" size="80" />
        </a>
      </div>
    </header>
  );
};

export default SupplierHeader;

