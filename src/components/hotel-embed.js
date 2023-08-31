// compnent to load toristy embed for hotels.

import React, { useEffect } from "react";

const HotelEmbed = ({ eid, responsiveID }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://embed.toristy.com/embed.js?es=%23toristyiframe-responsive-${responsiveID}&eid=${eid}`;
    script.async = true;
    script.charset = "utf-8";
    document.getElementById(`toristyiframe-responsive-${responsiveID}`).appendChild(script);
  }, [eid, responsiveID]);

  return <div id={`toristyiframe-responsive-${responsiveID}`} />;
};

export default HotelEmbed;
