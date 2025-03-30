import { Link } from "react-router";
import MackLapTopImg from "../images/home/mac-laptop.jpg";
function MainHighlight() {
  return (
    <section className="main-highlight-wrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="model">16-inch model</div>

            <div className="product-title">MacBook Pro</div>

            <div className="brief-description">The best for the brightest.</div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <Link to="#">Learn more</Link>
                </li>
                <li>
                  <Link to="#">Buy</Link>
                </li>
              </ul>
            </div>

            <div className="main-image-wrapper">
              <img src={MackLapTopImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHighlight;
