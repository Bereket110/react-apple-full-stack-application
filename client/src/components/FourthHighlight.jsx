import WatchLogo from "../images/icons/watch-series5-logo.png";
import AppleCardLogo from "../images/icons/apple-card-logo.png";
import { Link } from "react-router";
function FourthHighlight() {
  return (
    <section className="fourth-heghlight-wrapper">
      <div className="row">
        <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
          <div className="left-side-inner-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={WatchLogo} />
              </div>
            </div>
            <div className="description-wraper">
              With the new Always-On Retina display.
              <br />
              You’ve never seen a watch like this.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <Link to="">Learn more</Link>
                </li>
                <li>
                  <Link to="">Buy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
          <div className="right-side-inner-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={AppleCardLogo} />
              </div>
            </div>
            <div className="description-wraper">
              Get 3% Daily Cash on purchases from Apple using Apple Card.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <Link to="">Learn more</Link>
                </li>
                <li>
                  <Link to="">Buy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthHighlight;
