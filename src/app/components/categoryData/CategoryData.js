import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Input from "../input/Input";

const CategoryData = ({ id, img, parent, tag, type }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td className="img_with">
          <div className="img_withContainer">
            <img src={img} alt={id} />
          </div>
        </td>
        <td>{parent}</td>
        <td>
          {tag.map((item, index) => (
            <span
              key={index}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50px",
                backgroundColor: "#e5e7eb",
                color: "#333",
                padding: "0.3em",
                fontWeight: "bold",
                fontSize: "0.7em",
                marginRight: "5px",
              }}
            >
              {item}
            </span>
          ))}
        </td>
        <td>
          <Input type="checkbox" />
        </td>
        <td>{type}</td>
        <td>
          <div className="actions">
            <FaRegEdit size={20} />
            <FaTrashAlt size={20} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default CategoryData;
