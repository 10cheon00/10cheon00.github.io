import React from "react"
import { Link } from "gatsby"

import convertStringToRgb from "../helpers/convert-string-to-rgb"
import { resolveUrl } from "../../gatsby-urls"

const kebabCase = require("lodash.kebabcase")

const Tag = ({
  tagName,
  relatedPostsNumber = undefined,
  enableLink = true,
}) => {
  const relatedPostsNumberString =
    relatedPostsNumber !== undefined ? `(${relatedPostsNumber})` : ``

  let element = `${tagName} ${relatedPostsNumberString}`
  if (enableLink) {
    element = (
      <Link to={resolveUrl("tags", kebabCase(tagName))}>
        {tagName} {relatedPostsNumberString}
      </Link>
    )
  }

  const hoverable = enableLink ? `hoverable` : ``

  const hexCode = convertStringToRgb(tagName)
  const backgroundColor = hexCode //scaleRGB(, 0.75)
  return (
    <span
      className={`tag ${hoverable}`}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {element}
    </span>
  )
}

export default Tag
