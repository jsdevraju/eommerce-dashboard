import React from "react";
import "./product.module.min.css";
import { AsideBar, Button, Input, TableData, TopBar } from "../../components";
import { productData } from "../../dummy/product/productData";

const headerData = [
  "PRODUCT NAME",
  "CATEGORY",
  "PRICE",
  "STOCK",
  "STATUS",
  "DETAILS",
  "ACTIONS",
];

const categories = ["Iphone", "Phone", "Table", "Milks", "Electronic", "Tv"];

const Product = () => {
  return (
    <>
      <TopBar />
      <AsideBar />
      <section className="products_area">
        <div className="container">
          <div className="product_container">
            <h2>Products</h2>
            <div className="filter_options">
              {/* Search Box */}
              <div className="search">
                <Input type="text" placeholder="Search by product name" />
              </div>
              {/* Category */}
              <div className="filter_category">
                <select>
                  <option defaultValue={"Category"} selected disabled hidden>
                    Category
                  </option>
                  {categories.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              {/* Price Filter */}
              <div className="price_filter">
                <select name="" id="">
                  <option defaultValue={"Price"} selected disabled hidden>
                    Price
                  </option>
                  <option value="High to Low">High to Low</option>
                  <option value="Low to High">Low to High</option>
                </select>
              </div>
            </div>
            <div className="excel_file">
              <div className="drop_file">
                <label htmlFor="file">Drop CSV file</label>
                <input
                  type="file"
                  id="file"
                  accept="text/csv, .csv, application/vnd.ms-excel"
                  style={{ display: "none" }}
                />
              </div>
              <div className="btn_grp">
                <Button text={"Upload"} type="button" className="app_btn" />
                <Button
                  text={"Download"}
                  type="button"
                  className="app_btn"
                  style={{
                    backgroundColor: "#0e9f6e",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
            {/* Product Item Here */}
            <div className="table_item">
            <table className="table_data">
              <thead>
                <tr>
                  {headerData.map((name, index) => (
                    <td key={index}>{name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productData.map(
                  (
                    { name, img, category, price, status, stock, details },
                    index
                  ) => (
                    <TableData
                      key={index}
                      name={name}
                      img={img}
                      category={category}
                      price={price}
                      status={status}
                      stock={stock}
                      details={details}
                    />
                  )
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
