import React from 'react';

const SupplierHeader = ({ supplierLogo, qrCode, bgColor, qrImage }) => {
    const imageStyle = {
        maxHeight: '100px',  // Set the maximum height to 100 pixels
      };
  return (
    <header className={`w-full bg-${bgColor} bg-opacity-80 shadow-xl sticky top-0 z-50 py-4 flex justify-between items-center`}>
      <div className="flex items-center">
          {/* Display the partner logo */}
          <img src={supplierLogo} alt="Suppliers Logo" className="h-auto max-h-100 pl-6" style={imageStyle} />
      </div>
      <div className="QRcode pr-6">
        <a href={qrCode}>
          {/* Display QR code */}
          <img src={qrImage} alt="QR code of the page" className="h-auto max-h-100" style={imageStyle} />
        </a>
      </div>
    </header>
  );
};

export default SupplierHeader;
