import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { PiHandshakeDuotone } from "react-icons/pi";

import tc_logo_nb_cu from "./../media/img/tc_logo_no_bg_cu.png";
import tc_logo_nb from "./../media/img/tc_logo_no_bg.png";
import tc_comp_vid from "./../media/img/tc_comp.webm";
import tc_rap_3 from "./../media/audio/trump-cat-rap-3.mp3";

import tc_scan_single from "./../media/img/tc-scan-single.jpg";
import tc_scan from "./../media/img/tc-scan.jpg";
import tc_low_vid from "./../media/img/tc-low.mp4";
import tc_print_vid from "./../media/img/tc-print.mp4";
import tc_shirt from "./../media/img/tc-shirt.jpg";

import { ReactComponent as BscLogo } from "./../media/img/bscscan-logo.svg";

import us_em from "./../media/img/us-em.png";

import check_icon from "./../media/icons/check.png";
import tg_icon_d from "./../media/icons/tg_icon_d.png";
import x_icon_d from "./../media/icons/x_icon_d.png";
import bsc_icon from "./../media/icons/bsc_icon.png";
import meta_icon from "./../media/icons/meta-icon.png";
import set_icon from "./../media/icons/set-icon.png";
import tg_icon from "./../media/icons/tg.png";
import twitter from "./../media/icons/twitter.png";
import mail_icon from "./../media/icons/mail-icon.png";
import dex_icon from "./../media/icons/dex-icon.png";

import { htws } from "./../utilities/about-htw";

const Home = () => {
  const [htwCount, setHtwcount] = useState(0);

  return (
    <div className="">
      <section id="home" className="home">
        <div className="home-cont">
          <div className="flex row align-center justify-center wrap">
            <div className="home-img">
              <div className="home-img-flex-column flex column overflow-y-hidden">
                {/* <p className="home-img-by-text">Buy Now</p> */}
                <img
                  src={tc_logo_nb_cu}
                  className="home-text-logo-ant"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
                {/* <div className="flex row align-center justify-center home-img-line-box">
                                    <div></div>
                                    <p>$BBPEKIINU</p>
                                    <div></div>
                                </div> */}
              </div>
            </div>

            <div className="home-text">
              <div className="home-text-inner">
                <div
                  className="home-head-subhead"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h2>
                    <span>trump cat</span>
                  </h2>
                  <h3>cats are great again</h3>
                </div>

                <div className="home-ca-cont">
                  <h3>Contract Address</h3>
                  <div className="home-ca-box">
                    <p>0xDFB54aFaE30c65C2a01b61E5598e92107BcD62e9</p>
                  </div>
                </div>

                <a
                  href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xDFB54aFaE30c65C2a01b61E5598e92107BcD62e9"
                  target="_blank"
                  className="btn-1"
                >
                  Buy Token Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="main-frame">
          <div className="flex row wrap align-center">
            <div
              className="about-text"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {/* <h2>About Popeye</h2> */}
              <h3>
                Meet Trump Cat!{" "}
                <div className="flex row gap">
                  <img src={us_em} alt="" /> 🐱
                </div>
                : The Trump Cat
              </h3>
              <p>
                This cryptocurrency token combines the brash confidence and
                business acumen of Donald Trump, with the agility and cunning of
                a cat. With its its savvy style and limited supply, the Trump
                Cat token is sure to be a red hot commodity among crypto
                enthusiasts. <br />
                <br />
                Every week, Trump Cat is donating 0% of all buy/sell taxes
                towards animal rescue and care, for all our furry friends.🐱
                🐶❤️
                <br />
                <br />
                Cats Are Great Again <img src={us_em} alt="" /> $TRUMPCAT!!!{" "}
                <img src={us_em} alt="" />
                <br />
                <br />
                Listen To the Trump Cat Rap
              </p>

              <audio controls src={tc_rap_3} autoPlay loop>
                {/* <source src={tc_rap_3} type="audio/mpeg" /> */}
                Your browser does not support the audio element.
                {/* <source src="audio-file.ogg" type="audio/ogg" /> */}
              </audio>

              <a
                href="https://t.me/TrumpCAGA"
                className="about-btn flex row gap-15 justify-center align-center"
              >
                <span>Join The Community</span>
                <img src={tg_icon} alt="" />
              </a>
            </div>
            <div
              className="about-img"
              data-aos="fade-left1"
              data-aos-duration="2000"
            >
              <div className="abt-media-frame">
                <video src={tc_comp_vid} muted autoPlay loop />
              </div>
              {/* <img src={tc_logo_nb} alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="htb" id="htb">
        <div className="main-frame">
          <div
            className="htb-header"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Be a Part of the $TRUMPCAT Movement</h2>
            <h3>How to buy TRUMPCAT</h3>
          </div>
          <div className="grid grid-column-2 row grid-column-gap-40 grid-row-gap-20 overflow-y-hidden">
            <div
              className="htb-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={meta_icon} alt="" />
                </div>
                <h4>Create MetaMask Wallet and Connect</h4>
                <p>
                  Download Metamask or a wallet of your choice from the
                  following list and create a wallet: <br />
                  <a
                    href="hhttps://www.coinbase.com/"
                    target="_blank"
                    className="display-inline"
                  >
                    Coinbase Wallet
                  </a>{" "}
                  – Best for Beginners <br />
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    className="display-inline"
                  >
                    MetaMask
                  </a>{" "}
                  – Best for Desktop <br />
                  <a
                    href="https://trustwallet.com/"
                    target="_blank"
                    className="display-inline"
                  >
                    TrustWallet
                  </a>{" "}
                  – Best for Mobile <br />
                  That will allow you to buy, sell, send, and receive token
                </p>
              </div>
            </div>

            <div
              className="htb-item"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={bsc_icon} alt="" />
                </div>
                <h4>Buy BNB</h4>
                <p>
                  In order to purchase $TRUMPCAT, you must have BNB. To acquire
                  BNB, you can purchase it from several centralized exchanges
                  such as <a href="https://coinbase.com/">Coinbase</a>,{" "}
                  <a href="https://binance.com/">Binance</a> and{" "}
                  <a href="https://kucoin.com/">KuCoin</a>. You must then send
                  the BNB from the exchange to your wallet.
                </p>
              </div>
            </div>

            <div
              className="htb-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={set_icon} alt="" />
                </div>
                <h4>Connect your wallet</h4>
                <p>
                  Go to Pancakeswap and connect your wallet of choice to the
                  dApp. Paste the $TRUMPCAT token address into the output
                  currency if it is not already loaded.
                  <br />
                  <br />
                  The contract address for $TRUMPCAT is Adddresss. Any contract
                  addresses other than this are fake and may be a scam/honeypot.
                  Be careful.
                </p>
              </div>
            </div>

            <div
              className="htb-item"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={tc_logo_nb_cu} alt="" />
                </div>
                <h4>Swap ETH to TRUMPCAT</h4>
                <p>
                  You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tokenomics" id="tokenomics">
        <div className="main-frame">
          <div
            className="tk-header overflow-y-hidden"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2>Tokenomics</h2>
            <p data-aos="fade-up" data-aos-duration="2000">
              $TRUMPCAT is a governance token of the Trump Cat that will
              empower the community members with voting, governance, and
              management rights.
            </p>
          </div>
          <div className="row token-table overflow-y-hidden">
            <div className="flex-100">
              <center>
                <table>
                  <tr>
                    <th>Specification</th>
                    <th>Detail</th>
                  </tr>
                  <tr>
                    <td>Token Name:</td>
                    <td>TRUMP CAT</td>
                  </tr>
                  <tr>
                    <td>Ticker Symbol:</td>
                    <td>$TRUMPCAT</td>
                  </tr>
                  <tr>
                    <td>Blockchain:</td>
                    <td>Ethereum</td>
                  </tr>
                  {/* <tr>
                                        <td>Decimals:</td>
                                        <td>9</td>
                                    </tr> */}
                  <tr>
                    <td>Total Supply:</td>
                    <td>1,000,000,000</td>
                  </tr>
                </table>
              </center>
            </div>
          </div>
          <div className="row tax-box">
            <div className="tax-heading">
              <h2>TRUMPCAT Token Tax</h2>
              <p>
                0% donation is not set in stone right now but we shall add it
              </p>
            </div>
          </div>

          <div className="row token-table overflow-y-hidden">
            <div className="flex-100">
              <center>
                <table>
                  <tr>
                    <th colSpan="3">Trump Token token tax structure</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td>BUY</td>
                    <td>SELL</td>
                  </tr>
                  {/* <tr>
                                        <td>Liquidity</td>
                                        <td>1%</td>
                                        <td>1%</td>
                                    </tr> */}
                  {/* <tr>
                                        <td>Auto Burn</td>
                                        <td>1%</td>
                                        <td>1%</td>
                                    </tr> */}
                  {/* <tr>
                                        <td>Marketing</td>
                                        <td>4%</td>
                                        <td>4%</td>
                                    </tr> */}
                  <tr>
                    <td>TOTAL TAX</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                </table>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="main-frame">
          <div
            className="roadmap-header overflow-y-hidden"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Learn about our path</h2>
            <h3>The Roadmap of TRUMPCAT</h3>
          </div>

          <div className="roadmap-item-cont grid grid-column-3 grid-column-gap-25 grid-row-gap-10 overflow-y-hidden">
            <div
              className="rd-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <h2>Phase 1</h2>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center">
                  <img src={check_icon} alt="" />
                </div>{" "}
                <p>Token launch</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center">
                  <img src={check_icon} alt="" />
                </div>{" "}
                <p>Website launch</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>First animal donation</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>Dextools update</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center">
                  <img src={check_icon} alt="" />
                </div>{" "}
                <p>Dexscreener update</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>250 Holders</p>
              </div>
            </div>

            <div
              className="rd-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <h2>Phase 2</h2>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>1000 holders</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>Partnerships</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>First CEX listing</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center">
                  <img src={check_icon} alt="" />
                </div>{" "}
                <p>Contract Renounce</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>Dextools and Dexscreener ads</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center">
                  <img src={check_icon} alt="" />
                </div>{" "}
                <p>Lower tax to 0%</p>
              </div>
            </div>

            <div
              className="rd-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <h2>Phase 3</h2>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>CMC & GC</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>10,000 Holders</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>More DEX listings</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>More CEX listings</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>Empowering our community</p>
              </div>
              <div className="flex row gap-10 rd-list-box">
                <div className="flex justify-center align-center"></div>{" "}
                <p>Aim for top 100 biggest BSC meme coin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase" id="showcase">
        <div className="main-frame">
          <div className="sch-abs-frame"></div>

          <div
            className="roadmap-header overflow-y-hidden"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Showcase</h2>
            <h3>A Selection of Signature Projects</h3>
          </div>

          <div className="grid grid-column-4 grid-column-gap-20 sch-item-cont">
            <div className="shc-item">
              <div
                className="sch-abs-box"
                data-aos="flip-right"
                data-aos-duration="2000"
              ></div>
              <div
                className="sch-item-image flex justify-center"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <img src={tc_scan} alt="" />
              </div>

              <div className="sch-text">
                <h3>Scan and Meet TrumpCat</h3>
              </div>
            </div>

            <div className="shc-item">
              <div
                className="sch-abs-box"
                data-aos="flip-right"
                data-aos-duration="2000"
              ></div>
              <div
                className="sch-item-image flex justify-center"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <img src={tc_shirt} alt="" />
              </div>

              <div className="sch-text">
                <h3>TrumpCat Merchandise</h3>
              </div>
            </div>

            <div className="shc-item">
              <div
                className="sch-abs-box"
                data-aos="flip-right"
                data-aos-duration="2000"
              ></div>
              <div
                className="sch-item-image flex justify-center"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <video src={tc_print_vid} autoPlay muted loop></video>
              </div>

              <div className="sch-text">
                <h3>TrumpCat Merchandise</h3>
              </div>
            </div>

            <div className="shc-item">
              <div
                className="sch-abs-box"
                data-aos="flip-right"
                data-aos-duration="2000"
              ></div>
              <div
                className="sch-item-image flex justify-center"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <video src={tc_low_vid} autoPlay muted loop></video>
              </div>

              <div className="sch-text">
                <h3>TrumpCat Production</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join" id="join">
        <div className="main-frame">
          <div className="flex">
            <div className="flex-100 join-bg-1">
              <div className="join-bg-2">
                <div className="">
                  <div
                    className="flex row gap-10 j-icons"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <a href="https://t.me/TrumpCAGA" target="_blank">
                      <img src={tg_icon} alt="" />
                    </a>
                    <a href="https://x.com/TrumpCAGA" target="_blank">
                      <img src={twitter} alt="" />
                    </a>
                    <a href="" target="_blank">
                      <img src={mail_icon} alt="" />
                    </a>
                  </div>
                  <div className="join-text ">
                    <h3 data-aos="fade-right" data-aos-duration="2000">
                      Join our Community
                    </h3>
                    <p data-aos="fade-left" data-aos-duration="2000">
                      Stay connected to Trump Cat
                    </p>
                    <a
                      target="_blank"
                      href="https://t.me/TrumpCAGA"
                      className="btn-1"
                    >
                      Join Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="main-container">
          <div className="flex row justify-space-between align-center footer-row-box">
            <div
              className="flex row gap-45"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <a
                href=""
                target="_blank"
                className="flex align-center justify-center ft-row-icon-box"
              >
                <img src={x_icon_d} alt="" />
              </a>
              <a
                href="https://t.me/TrumpCAGA"
                target="_blank"
                className="flex align-center justify-center ft-row-icon-box"
              >
                <img src={tg_icon_d} alt="" />
              </a>
              {/* <a href="" target="_blank" className="flex align-center justify-center ft-row-icon-box">
                                <img src={ig_icon_d} alt="" />
                            </a> */}
            </div>

            <a
              data-aos="fade-left"
              data-aos-duration="2000"
              href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xDFB54aFaE30c65C2a01b61E5598e92107BcD62e9"
              target="_blank"
              className="btn-1"
            >
              Buy Now
            </a>
          </div>
          <hr />
          <p className="copyright">
            TRUMPCAT copyright 2025 - All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
