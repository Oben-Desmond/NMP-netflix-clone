import React from 'react'

function Item({icon,title}) {
    return (
        <div className="item row">
            <div className="col icon">
              {icon}
            </div>
            <div className=" col-9 label">{title}</div>
        </div>
    )
}

export default Item
