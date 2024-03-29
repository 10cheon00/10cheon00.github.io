import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Utterances from "../components/utterances"
import Tag from "../components/tag"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  return (
    <Layout
      location={location}
      title={siteTitle}
      tableOfContents={post.tableOfContents}
    >
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="blog-post-header">
          <h1 className="title" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <div className="info">
            <span className="date">{post.frontmatter.date}</span>
          </div>
          <div className="tags">
            {post.frontmatter.tags
              ? post.frontmatter.tags.map(tag => (
                  <Tag key={tag} tagName={tag}></Tag>
                ))
              : null}
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <Utterances />
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                <p>
                  <FaArrowLeftLong />
                  다음 글
                </p>
                <div>
                  <p className="date">{next.frontmatter.date}</p>
                  <p className="title">{next.frontmatter.title}</p>
                </div>
              </Link>
            </li>
          )}
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                <p>
                  <FaArrowRightLong />
                  이전 글
                </p>
                <div>
                  <p className="date">{previous.frontmatter.date}</p>
                  <p className="title">{previous.frontmatter.title}</p>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
