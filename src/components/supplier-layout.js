import React from "react"
import Footer from "./footer"
import SupplierHeader from "./supplierHeader"

const SupplierLayout = ({ supplierLogo, qrCode, bgColor, qrImage, children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white w-full relative text-neutral-900">
      <div>
      <SupplierHeader supplierLogo={supplierLogo} qrCode={qrCode} bgColor={bgColor} qrImage={qrImage}/>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default SupplierLayout