import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Content from '../components/Content'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HeroTextGalleryPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  gallery,
  video,
  videoPoster,
  videoTitle,
  videoSubTitle,
  mobileResponsive,
  videoTitleLink
}) => {

  const featuredImageAbsent = (featuredImage === "" || featuredImage === undefined || featuredImage === null)

  if (!featuredImageAbsent) {
    return (
      <main className="HeroTextGalleryPage">
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

        <section className="section">
            <div className="container">
                <Gallery images={gallery} />
            </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className="HeroTextGalleryPage">
        <section className="BackgroundVideo-section section">
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle} videoTitleLink={videoTitleLink} videoSubTitle={videoSubTitle} mobileResponsive={mobileResponsive}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>

        <section className="section">
          <div className="container">
            <Content source={body} />
          </div>
        </section>

        <section className="section">
            <div className="container">
                <Gallery images={gallery} />
            </div>
        </section>
      </main>
    );
  }
};

const HeroTextGalleryPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <HeroTextGalleryPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default HeroTextGalleryPage

export const pageQuery = graphql`
  query HeroTextGalleryPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
        videoSubTitle
        mobileResponsive
        videoTitleLink
      }
    }
  }
`
