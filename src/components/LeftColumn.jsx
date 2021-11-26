import React from 'react'
import { FaHome, FaBuilding, FaCompass, FaStopwatch, FaUser, FaUsers, FaCircleNotch } from 'react-icons/fa'
import Item from './Item'
import './styles/left-column.css'

function LeftColumn() {
    return (
        <div className={`col left-column`}>
            <div className="container">
                <div className="logo btn-link text-danger">
                    NETFLIX
            </div>
            <br/>
            <br/>
                <div className="text-medium">
                    MENU
                </div>
                <Item icon={<FaHome className="item-icon" />} title={`Home`} ></Item>
                <Item icon={<FaBuilding className="item-icon" />} title={`Community`} ></Item>
                <Item icon={<FaCompass className="item-icon" />} title={`Discover`} ></Item>
                <Item icon={<FaStopwatch className="item-icon" />} title={`Coming Soon`} ></Item>
               <br/>
               <br/>
               <div className="text-medium">
                   SOCIAL
               </div>
               <Item icon={<FaUser className="item-icon" />} title={`Friends`} ></Item>
               <Item icon={<FaUsers className="item-icon" />} title={`Parties`} ></Item>
               <Item icon={<FaCircleNotch className="item-icon" />} title={`Home`} ></Item>

            </div>
        </div>
    )
}

export default LeftColumn
