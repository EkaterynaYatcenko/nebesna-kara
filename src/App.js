import './App.css';
import Slider from "react-slick";
import React, { useState } from 'react';
import {useEffect} from 'react';
import styles from './assets/scss/base/_base.scss';
// images
import logo from './assets/images/logo.svg';
import logoWhite from './assets/images/logo-white.svg';
import coverImage from './assets/images/cover-image.svg';
import blades from './assets/images/blades.svg';
import arrowRight from './assets/images/arrow-right.svg';
import arrowLeft from './assets/images/arrow-left.svg';
import donateBtn from './assets/images/donate-btn.svg';
// carousel imgages
import carouselImage1 from './assets/images/carousel/carousel-img-1.png';
import carouselImage2 from './assets/images/carousel/carousel-img-2.png';
import carouselImage3 from './assets/images/carousel/carousel-img-3.png';
import carouselImage4 from './assets/images/carousel/carousel-img-4.png';
import carouselImage5 from './assets/images/carousel/carousel-img-5.png';
import carouselImage6 from './assets/images/carousel/carousel-img-6.png';
import carouselImage7 from './assets/images/carousel/carousel-img-7.png';
import carouselImage8 from './assets/images/carousel/carousel-img-8.png';

import carouselImage9 from './assets/images/carousel/carousel-img-9.png';
import carouselImage10 from './assets/images/carousel/carousel-img-10.png';
import carouselImage11 from './assets/images/carousel/carousel-img-11.png';
import carouselImage12 from './assets/images/carousel/carousel-img-12.png';
import carouselImage13 from './assets/images/carousel/carousel-img-13.png';
import carouselImage14 from './assets/images/carousel/carousel-img-14.png';
import carouselImage15 from './assets/images/carousel/carousel-img-15.png';
import carouselImage16 from './assets/images/carousel/carousel-img-16.png';
import carouselImage17 from './assets/images/carousel/carousel-img-17.png';

import carouselImage18 from './assets/images/carousel/carousel-img-18.png';
import carouselImage19 from './assets/images/carousel/carousel-img-19.png';
import carouselImage20 from './assets/images/carousel/carousel-img-20.png';
import carouselImage21 from './assets/images/carousel/carousel-img-21.png';
import carouselImage22 from './assets/images/carousel/carousel-img-22.png';
import carouselImage23 from './assets/images/carousel/carousel-img-23.png';
import carouselImage24 from './assets/images/carousel/carousel-img-24.png';
import carouselImage25 from './assets/images/carousel/carousel-img-25.png';

import carouselImage26 from './assets/images/carousel/carousel-img-26.png';
import carouselImage27 from './assets/images/carousel/carousel-img-27.png';
import carouselImage28 from './assets/images/carousel/carousel-img-28.png';
import carouselImage29 from './assets/images/carousel/carousel-img-29.png';
import carouselImage30 from './assets/images/carousel/carousel-img-30.png';
import carouselImage31 from './assets/images/carousel/carousel-img-31.png';
import carouselImage32 from './assets/images/carousel/carousel-img-32.png';

// donation
import paypal from './assets/images/donation/paypal.png';
import ustd from './assets/images/donation/USTD.png';
import bitcoin from './assets/images/donation/bitcoin.png';
import copy from './assets/images/donation/copy.svg';
// press
import kyivPost from './assets/images/press/kyiv-post.png';
import focus from './assets/images/press/focus.png';
import nytimes from './assets/images/press/nytimes.png';
import france24 from './assets/images/press/france24.png';
import arrow from './assets/images/press/arrow.svg';
// friends
import aim from './assets/images/friends/aim.png';
import zadrone from './assets/images/friends/zadrone.png';
import nationalDefendeLviv from './assets/images/friends/national-defende-lviv.png';
import rotorama from './assets/images/friends/rotorama.png';
import ufads from './assets/images/friends/ufads.png';
import dronesForUkraine from './assets/images/friends/drones-for-ukraine.png';
import rotorRiot from './assets/images/friends/rotor-riot.png';
import uadr from './assets/images/friends/uadr.png';
import ouadroua from './assets/images/friends/ouadroua.png';
// footer
import bg from './assets/images/footer-bg.png';
import telegram from './assets/images/telegram.svg';
import email from './assets/images/email.svg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage: `url(${arrowRight})` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage: `url(${arrowLeft})` }}
      onClick={onClick}
    />
  );
}
function showCopy(el) {
  document.getElementById(el).classList.add("show");
  setTimeout(function(){
    hideCopy(el);
  }, 2000);
}

function hideCopy(el) {
  document.getElementById(el).classList.remove("show");
}

function App() {
  const copyToClipBoardPayPal = async copyMe => {
    navigator.clipboard.writeText(copyMe);
    showCopy("copy-success-paypal");
  };

  const copyToClipBoardUSTD = async copyMe => {
    navigator.clipboard.writeText(copyMe);
    showCopy("copy-success-ustd");
  };

  const copyToClipBoardBitcoin = async copyMe => {
    navigator.clipboard.writeText(copyMe);
    showCopy("copy-success-bitcoin");
  };


  const handleClickHamburger = event => {
    document.getElementById("blackout").classList.add("show-nav");
    document.getElementById("open").classList.add("show-nav");
  };

  const handleClickHamburgerClose = event => {
    document.getElementById("blackout").classList.remove("show-nav");
    document.getElementById("open").classList.remove("show-nav");
  }

  useEffect(() => {
    const handleScroll = event => {
      if(window.scrollY > 180) {
        document.getElementById("header-sticky").classList.add("show-sticky");
      } else {
        document.getElementById("header-sticky").classList.remove("show-sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 2,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const pressSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="main">
      <div id="header-sticky">
	      <div className="nav-wrapper">
          <div className="logo-wrap">
            <a href="https://nebesnakara.com/">
                <img  src={logo} alt="Nebesna Kara"/>
            </a>
          </div>
          <nav id="desktop-menu">
            <ul>
              <li>
                  <a href="#our-team" title="Team">Team</a>
              </li>
              <li>
                  <a href="#results" title="Results">Results</a>
              </li>
              <li>
                  <a href="#press" title="Press">Press</a>
              </li>
              <li>
                  <a href="#how-to-support" title="how-to-support">How to support</a>
              </li>
            </ul>
          </nav>
          <div className="hamburger-menu-button-open" id="open-stick" onClick={handleClickHamburger}>
              <span></span>
          </div>
          </div>
      </div>
      <header className="header" id="our-team">
      <div className="nav-wrapper">
        <div className="logo-wrap">
          <a href="https://nebesnakara.com/">
              <img  src={logo} alt="Nebesna Kara"/>
          </a>
        </div>
        <nav id="desktop-menu">
          <ul>
            <li>
                <a href="#our-team" title="Team">Team</a>
            </li>
            <li>
                <a href="#results" title="Results">Results</a>
            </li>
            <li>
                <a href="#press" title="Press">Press</a>
            </li>
            <li>
                <a href="#how-to-support" title="how-to-support">How to support</a>
            </li>
          </ul>
        </nav>
        <div className="blackout-menu" id="blackout"></div>
        <div className="hamburger-menu-button-open" id="open" onClick={handleClickHamburger}>
            <span></span>
        </div>
        <nav className="hamburger-menu nav">
          <div className="hamburger-menu-button-close" onClick={handleClickHamburgerClose}></div>
          <ul>
            <li className="mob-item-nav" onClick={handleClickHamburgerClose}>
                <a href="#our-team" title="Team">Team</a>
              </li>
              <li className="mob-item-nav" onClick={handleClickHamburgerClose}>
                <a href="#results" title="Results">Results</a>
              </li>
              <li className="mob-item-nav" onClick={handleClickHamburgerClose}>
                <a href="#press" title="Press">Press</a>
              </li>
              <li className="mob-item-nav" onClick={handleClickHamburgerClose}>
                <a href="#how-to-support" title="how-to-support">How to support</a>
              </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="section-intro">
          <div className="section-intro__content">
            <div className="text">
              <h1>Our team</h1>
              <p>Nebesna Kara (punishment from above) is a team of volunteers, fpv drone racers, aerial cinematographers, IT specialists and engineers, who started the initiative to help our army with drones for aerial reconnaissance.</p>
              <p>We are not theorists and are supplying Armed Forces of Ukraine and Territorial Defense Forces since the first day of War. 90% of our work is strictly practical, we are building fpv wings, long range quadcopters, provide training and development of drones upon request of our army.</p>
            </div>
            <div className="header-image">
              <img src={coverImage} alt="Nebesna Kara cover image" />
            </div>
          </div>
        </div>
      </div>
      </header>
      <main>
        <section className="section section-our-works gray" id="results">
          <div className="container">
            <div className="section-our-works__blades">
              <img src={blades} alt="Blades image" />
            </div>
            <div className="section-our-works__text">
              <h2>Our works</h2>
              <p>During one month we were relying on personal funding, but now we decided to come out of the underground and share some information with public.</p>
              <div className="work-in-numbers">
                <div className="win-item">
                  <p className="win-num">46</p>
                  <p className="win-achievement">Lr drones supplied</p>
                </div>
                <div className="win-item">
                  <p className="win-num">23</p>
                  <p className="win-achievement">Wings/planes supplied</p>
                </div>
                <div className="win-item">
                  <p className="win-num">11</p>
                  <p className="win-achievement">Lifter drones</p>
                </div>
              </div>
            </div>
          <Slider {...settings}>
          <div >
            <img className="slide" src={carouselImage1} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage2} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage3} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage4} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage5} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage6} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage7} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage8} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage9} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage10} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage11} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage12} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage13} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage14} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage15} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage16} alt="Nebesna Kara cover image" />
          </div>

          <div >
            <img className="slide" src={carouselImage17} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage18} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage19} alt="Nebesna Kara cover image" />
          </div>
          <div >
          <img className="slide" src={carouselImage20} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage21} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage22} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage23} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage24} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage25} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage26} alt="Nebesna Kara cover image" />
          </div>
          <div className="slide" >
            <img className="slide" src={carouselImage27} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage28} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage29} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage30} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage31} alt="Nebesna Kara cover image" />
          </div>
          <div >
            <img className="slide" src={carouselImage32} alt="Nebesna Kara cover image" />
          </div>
        </Slider>
        </div>
        </section>
        <section className="section section-how-to-help black" id="how-to-support">
         <div className="container">
            <div className="section-intro__content">
                  <div className="section-how-to-help__text">
                    <h2>How to Support</h2>
                    <p>During two months we were relying on personal funding, but now we decided to come out of the underground and share some information with public and ask for your support.</p>
                  </div>
                  <div className="section-how-to-help__donation-optionals">
                    <div className="donation-option-column">
                      <div className="text-donation">
                        <h3>We are open for donations.</h3>
                        <p>All money will be spent on drone parts &amp; equipment.</p>
                      </div>
                      <div className="donetion-option pay-pal">
                        <div className="donetion-name-holder">
                            <p><strong>PayPal</strong></p>
                            <p id="copy-success-paypal" className="copy-success">Copied!</p>
                        </div>
                        <div className="donetion-option-container">
                            <img width="60px" height="60px" src={paypal} alt="PayPal icon" />

                            <div className="donation-text-copy">
                                <a target="_blank" href="https://www.paypal.com/donate?token=cTs6Uzt0i3dUSzmVAG48RWUG1mgkyYVQr6wT3UZA0WKpE_epxbaokdCLi-svhPIJ5wqiLrcJDPMTVsJq">Click to donate</a>
                            </div>
                            <div className="donation-copy pay-pal-copy">
                                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                    <input type="hidden" name="hosted_button_id" value="XP5QP97WE8D88" />
                                    <input type="image" src={donateBtn} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </div>
                     </div>
                    </div>
                    <div className="donation-option-column">
                      <div className="donetion-option ustd">
                        <div className="donetion-name-holder">
                          <p><strong>USDT (TRC20)</strong></p>
                          <p id="copy-success-ustd" className="copy-success">Copied!</p>
                        </div>
                          <div className="donetion-option-container">
                          <img width="60px" height="60px" src={ustd} alt="USTD icon" />
                            <div className="donation-text-copy">TEzKhWq6Skm9X9WwG12ebRS1UbX62zLAXM</div>
                            <div className="donation-copy">
                              <img src={copy} alt="PayPal icon" onClick={() => copyToClipBoardUSTD('TEzKhWq6Skm9X9WwG12ebRS1UbX62zLAXM')} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="donetion-option bitcoin">
                        <div className="donetion-name-holder">
                          <p><strong>Bitcoin (BTC)</strong></p>
                          <p id="copy-success-bitcoin" className="copy-success">Copied!</p>
                        </div>
                          <div className="donetion-option-container">
                          <img width="60px" height="60px" src={bitcoin} alt="bitcoin icon" />
                            <div className="donation-text-copy">bc1qp8ugkrdyfk650wkavqlpcf56m6mlsfwvt05h6t</div>
                            <div className="donation-copy">
                              <img src={copy} alt="PayPal icon" onClick={() => copyToClipBoardBitcoin('bc1qp8ugkrdyfk650wkavqlpcf56m6mlsfwvt05h6t')} />
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
               </div>
              {/* </div> */}
            </div>
          </section>
          <section className="section section-press gray" id="press">
          <div className="container">
            <div className="section-press__text">
              <h2>Press</h2>
            </div>
            <Slider {...pressSettings}>
              <div className="press-container">
                <div className="press-wrapper">
                 <div>
                    <div className="top-content">
                      <img width="139px" height="147px" src={france24} alt="France24 post" />
                      <p>"Punishment from above": Hobby pilots build Ukraine’s drone fleet</p>
                    </div>
                    <div className="see-more">
                      <a target="_blank" href="https://www.france24.com/en/live-news/20220401-punishment-from-above-hobby-pilots-build-ukraine-s-drone-fleet">See more</a>
                      <img src={arrow} alt="arrow icon" />
                    </div>
                  </div>
                </div>
            
              </div>
              <div className="press-container">
                <div className="press-wrapper">
                  <div>
                  <div className="top-content">
                    <img width="140px" height="147px" src={nytimes} alt="Nytimes post" />
                    <p>Ukraine Live Updates: Fears of Expanded War Rise as Russia’s Victory Day Approaches With No Change on Battlefield</p>
                  </div>
                    <div className="see-more">
                      <a target="_blank" href="https://www.nytimes.com/2022/05/10/world/middleeast/ukraine-crowdsourcing-online-donations.html">See more</a>
                      <img src={arrow} alt="arrow icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="press-container">
               <div className="press-wrapper">
                  <div>
                    <div className="top-content">
                      <img width="147px" height="147px"  src={focus} alt="KyivPost post" />
                      <p>Оружие за $1000: как обычные дроны помогают ВСУ уничтожать российские войска</p>
                    </div>
                    <div className="see-more">
                      <a target="_blank" href="https://focus.ua/digital/514399-oruzhie-za-1000-kak-obychnye-drony-pomogayut-vsu-unichtozhat-rossiyskie-voyska">See more</a>
                      <img src={arrow} alt="arrow icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="press-container">
               <div className="press-wrapper">
                  <div>
                  <div className="top-content">
                    <img width="147px" height="40px" src={kyivPost} alt="KyivPost post" />
                    <p>Ukraine Live Updates: Fears of Expanded War Rise as Russia’s Victory Day Approaches With No Change on Battlefield</p>
                  </div>
                  <div className="see-more">
                    <a target="_blank" href="https://www.kyivpost.com/ukraine-politics/punishment-from-above-hobby-pilots-build-ukraines-drone-fleet.html">See more</a>
                    <img src={arrow} alt="arrow icon" />
                  </div>
                  </div>
                </div>
              </div>
           </Slider>
          </div>
          </section>
          <section className="section section-our-friends">
            <div className="container">
              <div className="section-our-friends__text">
                <h2>Our Friends and Philanthropists</h2>
              </div>
              <div className="section-our-friends__logos">
                <div className="logos-container first-row">
                  <div className="logo-item">
                    <img width="287px" height="42px" src={ouadroua} />
                  </div>
                  <div className="logo-item">
                    <img width="167px" height="75px" src={uadr} />
                  </div>
                  <div className="logo-item">
                    <img width="230px" height="79px" src={rotorRiot} />
                  </div>
                  <div className="logo-item">
                  <img width="239px" height="40px" src={dronesForUkraine} />
                  </div>
                </div>
                <div className="logos-container second-row">
                  <div className="logo-item">
                    <img width="125px" height="95px" src={ufads} />
                  </div>
                  <div className="logo-item">
                    <img width="208px" height="95px" src={rotorama} />
                  </div>
                  <div className="logo-item">
                    <img width="108px" height="109px" src={nationalDefendeLviv} />
                  </div>
                  <div className="logo-item">
                    <img width="138px" height="95px" src={zadrone} />
                  </div>
                  <div className="logo-item">
                    <img width="163px" height="113px" src={aim} />
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>

    <footer> 
      {/* <div className="container"> */}
      <div className="image">
            <img src={bg} alt="bg image" />
          </div>
          <div className="text-content">
            <div className="text">
            <h2>Get in touch</h2>
            <ul className="social-media">
              <li>
                <img width="32px" height="26px" src={telegram} alt="Telegram icon"/>
                <a href="https://t.me/nebesna_kara_ukraine" target="_blank">@nebesna_kara_ukraine</a>
                </li>
              <li>
                <img width="32px" height="25px" src={email} alt="Telegram icon"/>
                <a href="mailto:info@nebesnakara.com">info@nebesnakara.com</a>
              </li>
            </ul>
              <div className="logo-footer" >
                <a href="https://nebesnakara.com/">
                  <img width="209px" height="19px" src={logoWhite} alt="Nebesna Kara"/>
                </a>
              </div>
            </div>
          </div>
      {/* </div> */}
    </footer>
    </div>
  );
}

export default App;

