import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import ListItem from '../components/list-item'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-container02"></div>
        </div>
      </div>
      <h1 className="home-text">VALORANT AGENTS</h1>
      <section className="home-features">
        <ul className="list">
          <li className="list-item">
            <span>
              <span className="home-text02">Brimstone</span>
              <span className="home-text03">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Controller</span>
            </span>
          </li>
          <li className="list-item">
            <span className="home-text05">
              <span className="home-text06">Phoenix</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">– Duelist</span>
            </span>
          </li>
          <li className="home-li02 list-item">
            <span>
              <span className="home-text10">Sage</span>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Sentinel</span>
              <br></br>
              <span></span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text16">Sova</span>
              <span> – Initiator</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text19">Viper</span>
              <span> – Controller</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text22">Cypher</span>
              <span> – Sentinel</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text25">Reyna</span>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Duelist</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text29">
                Breach
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Initiator</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text32">Omen</span>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Controller</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text36">
                Jett
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Duelist</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text39">Killjoy</span>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Sentinel</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text43">Raze</span>
              <span> – Duelist</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text46">Skye</span>
              <span> – Initiator</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text49">
                Yoru
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Duelist</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text52">Astra</span>
              <span> – Controller</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text55">
                Kay/O
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>– Initiator</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text58">Chamber</span>
              <span> – Sentinel</span>
            </span>
          </li>
          <li className="list-item">
            <span>
              <span className="home-text61">Neon</span>
              <span> – Duelist</span>
            </span>
          </li>
        </ul>
        <ul className="list"></ul>
        <ul className="list"></ul>
        <ul className="list"></ul>
        <img
          alt="image"
          src="/playground_assets/valorant-agents-700h.webp"
          className="home-image"
        />
      </section>
      <section className="home-container03">
        <div className="home-container04">
          <h1 className="home-text63 headingOne">
            <span className="home-text64">VALORANT GUNS</span>
          </h1>
          <span className="home-text65">
            <span className="home-text66">Valorant Gun Characteristics</span>
            <br></br>
            <span className="home-text67">Guns vary in terms of:</span>
          </span>
        </div>
        <div className="home-container05">
          <div className="home-container06">
            <h3 className="home-text68 headingTwo">
              <span>• Primary and alt fire settings</span>
              <br></br>
              <span>• Damage output (based on head/body/legs)</span>
              <br></br>
              <span>• Magazine capacity</span>
              <br></br>
              <span>• Recoil pattern</span>
              <br></br>
              <span>• Ability to pierce through walls</span>
            </h3>
            <div className="home-container07"></div>
          </div>
          <div className="home-container08">
            <div className="home-container09">
              <p className="home-text74">
                <span>SIDEARM SMGS SHOTGUN RIFLE SNIPER HEAVY</span>
                <br></br>
                <span>Classic Stinger Bucky Bulldog Marshal Ares</span>
                <br></br>
                <span>Shorty Spectre Judge Guardian Operator Odin</span>
                <br></br>
                <span>Frenzy Phantom</span>
                <br></br>
                <span>Ghost Vandal</span>
                <br></br>
                <span>Sheriff</span>
              </p>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/valorant%20guns-800w.webp"
          className="home-image1"
        />
      </section>
      <section className="home-testimonials">
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <h2 className="home-text81 headingOne">
                VALORANT STORY OF THE GAME :
              </h2>
              <p className="home-text82 body">
                <span>
                  The day after IGNITION, the world is in shock. VALORANT
                  PROTOCOL—a covert operation set
                </span>
                <br></br>
                <span>
                  up to prevent just such disasters—scrambles to make sense of
                  the unfolding events. Analysis of
                </span>
                <br></br>
                <span>
                  Venice and the remnants of the package suggests the detonation
                  of a device harnessing the
                </span>
                <br></br>
                <span>
                  power of Radianite, previously thought to be a clean and safe
                  source of energy.
                </span>
                <br></br>
                <span>
                  VALORANT Agents locate another of these devices at a Kingdom
                  site in Morocco. When placed
                </span>
                <br></br>
                <span>
                  into the ground, this “Spike” goes through its activation
                  sequence. With short time, can our
                </span>
                <br></br>
                <span>
                  Agents work together to neutralize the device, and prevent
                  another disaster?
                </span>
                <br></br>
                <span>
                  Can they overcome their biggest foes, which turn out to
                  be...themselves?
                </span>
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/story-500h.jpg"
            className="home-image2"
          />
          <div className="home-logos"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container13">
          <h2 className="home-text91 headingTwo">
            <span className="home-text92">VALORANT MAPS :</span>
          </h2>
        </div>
        <div className="home-container14">
          <img
            alt="image"
            src="/playground_assets/maps-400h.jpg"
            className="home-image4"
          />
          <div className="home-container15">
            <ListItem></ListItem>
            <ListItem
              title="2. Breeze"
              description="Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some\ncover. You'll need them for the wide open spaces and long range engagements. Watch your\nflanks and this will be a Breeze."
            ></ListItem>
            <ListItem
              title="3. Icebox"
              description="Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two\nplant sites protected by snow and metal require some horizontal finesse. Take advantage of the\nziplines and they’ll never see you coming."
            ></ListItem>
            <ListItem
              title="4. Bind"
              description="Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths\nfor attackers and a pair of one-way teleporters make it easier to flank."
            ></ListItem>
            <ListItem
              title="5. Haven"
              description="Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three\nsites. There’s more territory to control, but defenders can use the extra real estate for\naggressive pushes."
            ></ListItem>
            <ListItem
              title="6. Split"
              description="If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for\nrapid movement using two rope ascenders. Each site is built with a looming tower vital for\ncontrol. Remember to watch above before it all blows sky-high."
            ></ListItem>
            <ListItem
              title="7. Ascent"
              description="An open playground for small wars of position and attrition divide two sites on Ascent. Each site\ncan be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or\nfind another way. Yield as little territory as possible."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
    </div>
  )
}

export default Home
