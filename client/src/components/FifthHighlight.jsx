import { Link } from "react-router";
import AppleTvLogo from "../images/icons/apple-tv-logo.png";
import ServantLogo from "../images/icons/servant-logo.png";
function FifthHighlight() {
  return (
    <section className="fifth-heghlight-wrapper">
      <div className="row">
        <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
          <div className="left-side-inner-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={AppleTvLogo} />
              </div>
            </div>

            <div className="tvshow-logo-wraper">
              <img src={ServantLogo} />
            </div>

            <div className="watch-more-wrapper">
              <Link to="#">Watch the trailer</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
          <div className="right-side-inner-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">AirPods Pro</div>
            </div>

            <div className="description-wraper">
              Magic like you’ve never heard.
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

export default FifthHighlight;
