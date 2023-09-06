import React from "react"
import Footer from "./footer"
import HotelHeader from "./hotelHeader"

const HotelLayout = ({ hotelLogo, qrCode, bgColor, hotelURL, children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white w-full relative text-neutral-900">
      <div>
      <HotelHeader hotelLogo={hotelLogo} qrCode={qrCode} bgColor={bgColor} hotelURL={hotelURL} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default HotelLayout
