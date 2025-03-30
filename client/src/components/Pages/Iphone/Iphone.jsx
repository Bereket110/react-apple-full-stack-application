import React, { useEffect, useState } from "react";

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2222/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => console.log("Error fetching products"));
  }, []);

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("/appleDB.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch(() => console.log("Error fetching products"));
  // }, []);
  // console.log(products);
  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphone Page</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
        </div>
        {products?.map((product, index) => {
          console.log(
            `Rendering product: ${product.product_name} with image: ${product.product_img}`
          );
          let productDiv = (
            <div
              key={index}
              className="row justify-content-center text-center product-holder h-100 "
            >
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  index % 2 === 0 ? "1" : "2"
                }`}
              >
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {product.product_brief_description}
                </div>
                <div className="strting-price">{`Starting at ${product.starting_price}`}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div>
                  <ul>
                    <li>
                      {/* <Link to={`/iphone/${product.product_url}`}>
                        Learn more
                      </Link> */}
                      Test
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  index % 2 === 0 ? "2" : "1"
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt={product.product_name} />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </section>
    </>
  );
}

export default Iphone;
