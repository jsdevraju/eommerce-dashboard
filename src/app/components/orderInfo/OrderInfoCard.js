import React from 'react'

const OrderInfoCard = ({icon, title, color, number}) => {
  return (
    <>
        <div className="orderInfo_card">
            <div className="icon" style={{
                background:color
            }}>
                {icon}
            </div>
            <div className="order_info">
                <h5>{title}</h5>
                <h3>{number}</h3>
            </div>
        </div>
    </>
  )
}

export default OrderInfoCard