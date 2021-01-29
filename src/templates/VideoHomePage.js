import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const VideoHomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  video,
  videoPoster,
  videoTitle,
  videoSubTitle,
  mobileResponsive
}) => {

  const featuredImageAbsent = (featuredImage === "" || featuredImage === undefined || featuredImage === null)

  if (!featuredImageAbsent) {
    return (
      <main className="VideoHomePage">
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
    );
  } else {
    return (
      <main className="VideoHomePage">
        <section className="BackgroundVideo-section-fullHeight section">
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle} videoSubTitle={videoSubTitle} mobileResponsive={mobileResponsive}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>

        <section className="section">
          <div className="container">
            <Content source={body} />
          </div>
        </section>
      </main>
    );
  }
};

const VideoHomePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <VideoHomePageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default VideoHomePage

export const pageQuery = graphql`
  query VideoHomePage($id: String!) {
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
        videoSubTitle,
        mobileResponsive
      }
    }
  }
`
