import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './store.css'

const Store = (props) => {
  return (
    <div className="store-container">
      <Helmet>
        <title>Store - Soft UI Pro</title>
        <meta property="og:title" content="Store - Soft UI Pro" />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className="store-gallery">
        <h1 className="store-text">STORE</h1>
        <span className="store-text01">
          <span>
            <span>
              Here is the Valorant store where you can see the variety of skins
              from guns, stickers, banners, and especially gun buddies. This
              serves as a gateway for you to choose what you like here and wait
              for it to some to your store in game. The skins are ranging from
              ultra, exclusive, premium, deluxe and rare.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span>HERE ARE THE TOP 9 BUNDLES YOU CAN CONSIDER BUYING.</span>
          <br></br>
          <span></span>
          <br></br>
          <span>1. REAVER</span>
          <br></br>
          <span>2. PRIME</span>
          <br></br>
          <span>3. RGX 11Z PRO</span>
          <br></br>
          <span>4. SPECTRUM</span>
          <br></br>
          <span>5. SENTINELS OF LIGHT</span>
          <span>&amp;#8203;</span>
          <br></br>
          <span>6. ONI</span>
          <br></br>
          <span>7. ORIGIN</span>
          <br></br>
          <span>8. GLITCHPOP</span>
          <span>&amp;#8203;</span>
          <span>&amp;#8203;</span>
          <br></br>
          <span>9. ION</span>
          <br></br>
          <span></span>
        </span>
        <div className="store-container1">
          <img
            alt="image"
            src="/playground_assets/4-300h.jpg"
            className="store-image"
          />
          <img
            alt="image"
            src="/playground_assets/2-300h.jpg"
            className="store-image1"
          />
          <img
            alt="image"
            src="/playground_assets/1-300h.jpg"
            className="store-image2"
          />
          <img
            alt="image"
            src="/playground_assets/6-300h.jpg"
            className="store-image3"
          />
          <img
            alt="image"
            src="/playground_assets/7-300h.jpg"
            className="store-image4"
          />
          <img
            alt="image"
            src="/playground_assets/3-300h.jpg"
            className="store-image5"
          />
          <img
            alt="image"
            src="/playground_assets/5-300h.jpg"
            className="store-image6"
          />
          <img
            alt="image"
            src="/playground_assets/9-300h.jpg"
            className="store-image7"
          />
          <img
            alt="image"
            src="/playground_assets/8-300h.jpg"
            className="store-image8"
          />
        </div>
      </div>
      <div className="store-profile">
        <ul className="list">
          <li className="store-li list-item">
            <span className="store-text35">
              <span className="store-text36"></span>
              <span>BUNDLES</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span className="store-text39">ULTRA (10700 VP</span>
              <span>)</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span>ELDERFLAME</span>
              <br></br>
              <span>PROTOCOL 781-A</span>
              <br></br>
              <span>SPECTRUM (ZEDD X VALORANT)</span>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span className="store-text50">EXXLUSIVE (6900 VP)</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span>​</span>
              <span>BLASTX</span>
              <br></br>
              <span>GLITCHPOP</span>
              <br></br>
              <span>GLITCHPOP 2.0</span>
              <br></br>
              <span>RGX 11Z PRO</span>
              <br></br>
              <span>RUINATION</span>
              <br></br>
              <span>SENTINELS OF LIGHT</span>
              <br></br>
              <span>SINGULARITY</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span className="store-text62">PREMIUM (6900 VP)</span>
              <br></br>
              <span>​</span>
              <br></br>
              <span>CELESTIAL</span>
              <br></br>
              <span>DOODLE BUDS</span>
              <br></br>
              <span>EGO</span>
              <br></br>
              <span>FORSAKEN</span>
              <br></br>
              <span>GAI&apos;S VENGEANCE</span>
              <br></br>
              <span>G.U.N</span>
              <br></br>
              <span>ION</span>
              <br></br>
              <span>MAGEPUNK</span>
              <br></br>
              <span>MAGEPUNK 2.0</span>
              <br></br>
              <span>NEBULA</span>
              <br></br>
              <span>ONI</span>
              <br></br>
              <span>RADIANT CRISIS</span>
              <br></br>
              <span>REAVER</span>
              <br></br>
              <span>RECON</span>
              <br></br>
              <span>PRIME</span>
              <br></br>
              <span>PRIME 2.0</span>
              <br></br>
              <span>SOVEREIGN</span>
              <br></br>
              <span>SPLINE</span>
              <br></br>
              <span>TETHERED REALMS</span>
              <br></br>
              <span>UNDERCITY</span>
              <br></br>
              <span>VALORANT GO! VOL 1</span>
              <br></br>
              <span>VALORANT GO! VOL 2</span>
            </span>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Store
