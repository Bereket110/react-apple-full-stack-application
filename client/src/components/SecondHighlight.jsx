import { Link } from "react-router";

function SecondHighlight() {
  return (
    <section className="second-hightlight-wrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">iPhone 11 Pro</div>

            <div className="description-wrapper">
              Pro cameras. Pro display. Pro performance.
            </div>

            <div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
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

export default SecondHighlight;
