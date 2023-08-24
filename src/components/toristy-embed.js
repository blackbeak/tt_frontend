import React from "react";

const ToristyEmbed = ({ eid }) => {
  const script = `
    <div id="toristyiframe-responsive-E2Qq3lnJwB"></div>
    <script async src="https://embed.toristy.com/embed.js?es=%23toristyiframe-responsive-E2Qq3lnJwB&eid=${eid}" charset="utf-8"></script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: script }} />
  );
};

export default ToristyEmbed;
