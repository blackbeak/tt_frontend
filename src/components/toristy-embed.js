import React from "react";

const ToristyEmbed = ({ eid, responsiveID }) => {
  const script = `
    <div id="toristyiframe-responsive-${responsiveID}"></div>
    <script async src="https://embed.toristy.com/embed.js?es=%23toristyiframe-responsive-${responsiveID}&eid=${eid}" charset="utf-8"></script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: script }} />
  );
};

export default ToristyEmbed;
