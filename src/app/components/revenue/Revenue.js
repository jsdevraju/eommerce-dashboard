import React from 'react'

const Revenue = ({icon, title, color, price}) => {
  return (
    <>
    <div className="revenue_card" style={{
        backgroundColor:color,
        color:"#fff"
    }}>
        <p>{icon}</p>
        <span>{title}</span>
        <h2>${price}</h2>

    </div>
    </>
  )
}

export default Revenue