import { Link } from "react-router";

function ThirdHighlight() {
  return (
    <section className="third-highlight-wrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">iPhone 11</div>
            <div className="description-wrapper">
              Just the right amount of everything.
            </div>
            <div className="price-wrapper">
              From $16.62/mo. or $399 with trade‑in.
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

export default ThirdHighlight;
