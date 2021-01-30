import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Image from './Image'

import './BackgroundVideo.css'

class BackgroundVideo extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    playing: false,
    mobileWidth: false
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 900 })
  }

  handlePlay() {
    this.setState({ playing: true })
    ReactDOM.findDOMNode(this.ref.current).removeEventListener(
      'playing',
      this.handlePlay
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
    ReactDOM.findDOMNode(this.ref.current).addEventListener('playing', e =>
      this.handlePlay(e)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { poster, videoTitle, videoSubTitle, videoTitleLink, mobileResponsive, children } = this.props

    if (mobileResponsive === "no") {
      return (
        <Fragment>
          <div className={`BackgroundVideo`}>
            <video
              ref={this.ref}
              poster={poster}
              className={`BackgroundVideo--video ${
                this.state.playing ? 'playing' : ''
              } `}
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
            >
              {children}
            </video>
            {videoTitle && (
              <div className="BackgroundVideo--videoTitle">
                <a className="BackgroundVideo--videoTitle__link" href={videoTitleLink}>{videoTitle}</a>
              </div>
            )}
            {videoSubTitle && (
              <div className="BackgroundVideo--videoSubTitle">{videoSubTitle}</div>
            )}
          </div>
      </Fragment>
      )
    } else {
      return (
        <Fragment>
          {!this.state.mobileWidth && (
            <div className={`BackgroundVideo`}>
              <video
                ref={this.ref}
                poster={poster}
                className={`BackgroundVideo--video ${
                  this.state.playing ? 'playing' : ''
                } `}
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
              >
                {children}
              </video>
              {videoTitle && (
                <div className="BackgroundVideo--videoTitle">{videoTitle}</div>
              )}
              {videoSubTitle && (
                <div className="BackgroundVideo--videoSubTitle">{videoSubTitle}</div>
              )}
            </div>
          )}
          {this.state.mobileWidth && (
            <Fragment>
              <Image background src={poster} alt="Background poster" />
              {videoTitle && <h3 className="Poster--videoTitle">{videoTitle}</h3>}
              {videoSubTitle && <h3 className="Poster--videoSubTitle">{videoSubTitle}</h3>}
            </Fragment>
          )}
        </Fragment>
      )
    }
  }
}

export default BackgroundVideo
