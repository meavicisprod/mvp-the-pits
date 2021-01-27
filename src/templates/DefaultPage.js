import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  video,
  videoPoster,
  videoTitle,
}) => {
  if (title !== null || title !== undefined || title !== "" || backgroundImage !== null || backgroundImage !== undefined || backgroundImage !== "" || subtitle !== null || subtitle !== undefined || subtitle !== "") {
    return (
      <main className="DefaultPage">
        <PageHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={featuredImage}
        />
        <section className="section">
          <div className="container">
            <Content source={body} />
          </div>
        </section>
      </main>
    )
  } else if (video !== null || video !== undefined || video !== "" || videoPoster !== null || videoPoster !== undefined || videoPoster !== "" || videoTitle !== undefined || videoTitle !== null || videoTitle !== "") {
    return (
      <main className="DefaultPage">
        <section className="BackgroundVideo-section section">
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>
        <section className="section">
          <div className="container">
            <Content source={body} />
          </div>
        </section>
      </main>
    )
  }
}

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
      }
    }
  }
`
