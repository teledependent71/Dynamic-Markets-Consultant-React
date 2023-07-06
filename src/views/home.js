import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Markets Consultant</title>
        <meta property="og:title" content="Dynamic Markets Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
