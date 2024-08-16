/**
 *
 * Homepage
 *
 */
import { FaHeadphones, FaRecycle, FaShoppingBag, FaTruck } from "react-icons/fa";
import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import { Link } from 'react-router-dom'

class Homepage extends React.PureComponent {
  render() {
    return (

      <div>

        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <section className="section__container craft__container" id="craft">
            <div className="craft__content">
              <div className="section__header">Toys For Everyone</div>
              <Link to="/shop">
                <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '10px', color: 'black', textAlign: 'center', cursor: 'pointer', fontSize: '14px' }}>
                  Explore
                </div></Link>
            </div>
            <Link to="/">
              <div className="craft__image">
                <div className="craft__image__content">
                  <img src="./images/assets/craft-1.png" alt="Teddy Bear" />
                  <p style={{ color: 'black' }}>Cute Teddy</p>
                  <h4>$65.00</h4>
                </div>
              </div>
            </Link>
            <Link to="/product/transformer">
              <div className="craft__image">
                <div className="craft__image__content">
                  <img src="./images/assets/craft-2.png" alt="Robot" />
                  <p style={{ color: 'black' }}>Transformer</p>
                  <h4>$99.00</h4>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="craft__image">
                <div className="craft__image__content">
                  <img src="./images/assets/craft-3.png" alt="Cars" />
                  <p style={{ color: 'black' }}>Robo Car</p>
                  <h4>$70.00</h4>
                </div>
              </div>
            </Link>


          </section>
        </div>

        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="section__container choose__container" id="choose">
            <img className="choose__bg" src="./images/assets/dot-bg.png" alt="bg" />
            <div className="choose__content">
              <div className="section__header">Why Choose Us</div>
              <p className="section__subheader text-white">
                At DevToys, we&apos;re passionate about bringing joy and learning to children of all ages.
              </p>
              <div className="choose__grid">
                <div className="choose__card">
                  <span><FaTruck /></span>
                  <div style={{ color: 'gold' }}>Fast & Free Shipping</div>
                  <p className="text-white">
                    Enjoy prompt delivery and hassle-free returns, so your little ones can start playing sooner.
                  </p>
                </div>
                <div className="choose__card">
                  <span><FaShoppingBag /></span>
                  <div style={{ color: 'gold' }}>Curated Selection</div>
                  <p className='text-white'>
                    We offer a diverse range of high-quality, age-appropriate toys that spark creativity and promote development.
                  </p>
                </div>
                <div className="choose__card">
                  <span><FaHeadphones /></span>
                  <div style={{ color: 'gold' }}>24/7 Support</div>
                  <p className="text-white">
                    Experience peace of mind knowing that our dedicated team is
                    available round the clock
                  </p>
                </div>
                <div className="choose__card">
                  <span><FaRecycle /></span>
                  <div style={{ color: 'gold' }}>Safety</div>
                  <p className="text-white">
                    We&apos;re committed to sustainability, offering eco-friendly toys and packaging options.
                  </p>
                </div>
              </div>
            </div>
            <div className="choose__image">
              <img src="./images/assets/choose.jpg" alt="choose" />
            </div>
          </div>

        </div>





      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};






export default connect(mapStateToProps, actions)(Homepage);
