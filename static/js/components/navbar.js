import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_no_bg from "./../media/img/tc_logo_no_bg_cu.png";
import cancel_icon from "./../media/icons/close.png";
import nav_icon from "./../media/icons/menu.png";

const NavBar = () => {
  const windowscrollvalue = window.scrollY;
  const [showmobilenav, setshowmobilenav] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    const handleScroll = () => {
      // console.log(window.scrollY)
      setshowmobilenav(null);
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobilenav = () => {
    if (!showmobilenav) {
      setshowmobilenav(true);
    } else {
      setshowmobilenav(false);
    }
  };

  return (
    <>
      <header>
        <a href="">
          <img src={logo_no_bg} className="logo" alt="" />
        </a>

        {windowWidth > 991 ? (
          <ul>
            <li className="nav-link active">
              <a href="#about">Home</a>
            </li>
            <li className="nav-link">
              <a href="#htb">Tokenomics</a>
            </li>
            <li className="nav-link">
              <a href="#partners">Roadmap</a>
            </li>
            <li className="nav-link">
              <a href="#join">Contact</a>
            </li>
            {/* <li className='join-btn'><Link to='#'>Join Now</Link></li> */}
            <li>
              <Link
                to="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xDFB54aFaE30c65C2a01b61E5598e92107BcD62e9"
                target="_blank"
                className="gs-btn"
              >
                Buy Now
              </Link>
            </li>
          </ul>
        ) : null}

        {windowWidth < 991 ? (
          <div className="nav-icon" onClick={handleMobilenav}>
            <img src={showmobilenav ? cancel_icon : nav_icon} alt="" />
          </div>
        ) : null}
      </header>

      <div className={`mobile-nav ${showmobilenav ? "active" : ""}`}>
        <div className="mobile-nav-item">
          <a href="#about" className="open-sans_f">
            About
          </a>
        </div>
        <div className="mobile-nav-item">
          <a href="#tokenomics" className="open-sans_f">
            Tokenomics
          </a>
        </div>
        <div className="mobile-nav-item">
          <a href="#roadmap" className="open-sans_f">
            Roadmap
          </a>
        </div>
        <div className="mobile-nav-item">
          <a href="#footer" className="open-sans_f">
            Contact Us
          </a>
        </div>
        <div className="mobile-nav-item">
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xDFB54aFaE30c65C2a01b61E5598e92107BcD62e9"
            target="_blank"
            className="open-sans_f"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
