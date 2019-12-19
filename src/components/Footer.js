import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import pageQuery from '../templates/index-page'
import PropTypes from 'prop-types'

const Footer = class extends React.Component {

  render() {

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/sand.jpg')`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: '14em', height: '10em' }}
            />
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}



export default Footer
