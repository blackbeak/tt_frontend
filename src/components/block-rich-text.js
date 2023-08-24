import React from "react"

const BlockRichText = ({ data }) => {
  return (
    <div className="container py-2 pb-6">
      <div className="space-y-6"
        dangerouslySetInnerHTML={{
           __html: data.richTextBody?.data?.childMarkdownRemark?.html,
          //__html: body.data.body,
        }}
      />
    </div>
  )
}

export default BlockRichText
