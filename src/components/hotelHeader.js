import React from 'react';

const HotelHeader = ({ hotelLogo, QRCode, bgColor, hotelURL }) => {
    const imageStyle = {
        maxHeight: '100px',  // Set the maximum height to 100 pixels
      };
  return (
    <header className={`w-full bg-${bgColor} bg-opacity-80 shadow-xl sticky top-0 z-50 py-4 flex justify-between items-center`}>
      <div className="flex items-center">
        <a href={hotelURL}>
          {/* Display the partner logo */}
          <img src={hotelLogo} alt="hotel Logo" className="h-auto max-h-100" style={imageStyle} />
        </a>
      </div>
      <div className="QRcode pr-6">
        <a href={hotelURL}>
          {/* Display QR code */}
          <img src={QRCode} alt="QR code of the hotel" className="h-auto max-h-100" style={imageStyle} />
        </a>
      </div>
    </header>
  );
};

export default HotelHeader;
