import React from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'

const CustomarTable = ({id,joinDate,name, email,phone}) => {
  return (
    <>
        <tr>
        <td>{id}</td>
        <td>{joinDate}</td>
        <td>{name}</td>
        <td>
        {email}
        </td>
        <td>{phone}</td>
        <td>
          <div className="actions">
            <FaRegEdit size={20} />
            <FaTrashAlt size={20} />
          </div>
        </td>
      </tr>
    </>
  )
}

export default CustomarTable