const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "appleDB",
  password: "appleDB",
  database: "appledb",
});
connection.connect((err) => {
  if (err) console.log("Error happen when connect to database: " + err);
  else {
    console.log("Your database is connected succus fully");
  }
});
app.get("/", (req, res) => res.send("Up and running..."));
app.get("/install", (req, res) => {
  // Putting Query on a variable
  let createProducts = `CREATE TABLE if not exists Products(
  product_id int auto_increment,
  product_url VARCHAR(255) not null,
  product_name VARCHAR(255) not null,
  PRIMARY KEY (product_id))`;

  let createProductDescription = `CREATE TABLE if not exists productDescription(
 description_id int auto_increment,
 product_id int(11) not null,
 product_brief_description TEXT not null,
 product_description TEXT not null,
 product_img varchar(255) not null,
 product_link varchar(255) not null,
 PRIMARY KEY (description_id),
 FOREIGN KEY (product_id) REFERENCES Products (product_id))`;

  let createProductPrice = `CREATE TABLE if not exists productPrice(price_id int auto_increment,
 product_id int(11) not null,
 starting_price VARCHAR(255) not null, 
 price_range VARCHAR(255) not null,
 PRIMARY KEY (price_id), 
 FOREIGN KEY (product_id) REFERENCES Products (product_id))`;

  // Executing the query's we wrote above
  connection.query(createProducts, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  res.end("Tables Created");
  console.log("Tables Created");
});

//insert a new iphones
app.post("/addiphones", (req, res) => {
  const { img, url, title, brief, startingprice, priceRange, Description } =
    req.body; // Extracting the values sent from the frontend

  let sqlAddToProducts = `INSERT INTO Products (product_url,product_name) VALUES (?,?)`;
  let sqlAddToProductDescription = `INSERT INTO productDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?,?,?,?, ?)`;
  let sqlAddToProductPrice = `INSERT INTO productPrice (product_id, starting_price,price_range) VALUES (?, ?,?)`;

  // Executing the query we wrote above
  connection.query(sqlAddToProducts, [url, title], (err, results, fields) => {
    if (err) {
      console.log(`Error Found: ${err}`);
      // console.log(results);
      return res.status(500).send("Error  inserting data into products table");
    }
    const id = results.insertId;

    // const id = results.insertId;
    // console.log("id from customers table to be used as a foreign key on the other tables>>> ", id)

    connection.query(
      sqlAddToProductDescription,
      [id, brief, Description, img, url],
      (err, results, fields) => {
        if (err) {
          console.log(`Error Found: ${err}`);

          return res
            .status(500)
            .send("Error  inserting data into productDescription table");
        }
      }
    );

    connection.query(
      sqlAddToProductPrice,
      [id, startingprice, priceRange],
      (err, results, fields) => {
        if (err) {
          console.log(`Error Found: ${err}`);
          return res
            .status(500)
            .send("Error  inserting data into productPrice table");
        }
      }
    );
    res.end("Data inserted successfully!");
    console.log("Data inserted successfully!");
  });
});

app.get("/iphones", (req, res) => {
  connection.query(
    `SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice 
    ON 
    Products.product_id=productDescription.product_id
    AND
    Products.product_id=productPrice.product_id`,
    (err, results, fields) => {
      if (err) console.log(err);
      res.send(results);
    }
  );
});
app.listen(2222, (err) => {
  if (err) console.log(err);
  console.log("The server is running...");
});
app.get("/", (req, res) => {
  res.send("The server is requsting");
});
