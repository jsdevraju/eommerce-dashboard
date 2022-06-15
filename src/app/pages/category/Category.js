import React from "react";
import { Input, CategoryData, TopBar, AsideBar } from "../../components";
import { categoriesData } from "../../dummy/product/productData";
import "./category.module.min.css";

const headerData = [
  "ID",
  "ICON",
  "PARENT",
  "TAG",
  "TYPE",
  "PUBLISHED",
  "ACTIONS",
];

const categories = ["Iphone", "Phone", "Table", "Milks", "Electronic", "Tv"];

const Category = () => {
  return (
    <>
      <TopBar />
      <AsideBar />
      <section className="products_area">
        <div className="container">
          <div className="product_container">
            <h2>Categories</h2>
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
            </div>
            {/* Product Item Here */}
            <div className="table_item">
            <table className="table_data category">
              <thead>
                <tr>
                  {headerData.map((name, index) => (
                    <td key={index}>{name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categoriesData.map(({ id, img, parent, tag, type }, index) => (
                  <CategoryData
                    key={index}
                    id={id}
                    img={img}
                    parent={parent}
                    tag={tag}
                    type={type}
                  />
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
