import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const TableData = ({ img, name, category, price, stock, status, details }) => {
  return (
    <>
      <tr>
        <td className="img_with">
          <div className="img_withContainer">
            <img src={img} alt={name} />
            <h5>{name}</h5>
          </div>
        </td>
        <td>{category}</td>
        <td style={{
          fontWeight:"bold"
        }}>${price}</td>
        <td>{stock}</td>
        <td className={status}>
          <span>{status}</span>
        </td>
        <td className="icon">{details}</td>
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

export default TableData;
