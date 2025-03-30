import appleLogo from "../images/icons/logo.png";
import searchIcon from "../images/icons/search-icon.png";
import cartIcon from "../images/icons/cart.png";
import { Link } from "react-router";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
      <div className="container">
        <Link className="logo-link navbar-brand js-scroll-trigger" to="/">
          <img src={appleLogo} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/mac/">
                Mac
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/iphone/">
                iphone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/ipad/">
                ipad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#">
                watch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#">
                tv
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#">
                Support
              </Link>
            </li>
            <li>
              <Link className="search-link nav-link js-scroll-trigger" to="#">
                <img src={searchIcon} />
              </Link>
            </li>
            <li>
              <Link
                className="cart-link nav-link js-scroll-trigger"
                to="/cart/"
              >
                <img src={cartIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
