import React from 'react';
import './do.css'
import { Card } from 'antd';

const { Meta } = Card;


const Do = ({ description, children, doInfo } = props) => {

    return (

        <div>
            <h2>{description}</h2>
            <div className="do-container">
                <div className="like-image" />
                <div className="child-wrapper">
                    {children}
                </div>
                <div className="do-success" />
                <div className="do-info">
                    <span>Do</span>
                    <p>{doInfo}</p>
                </div>
            </div>
        </div>

    )




}
export default Do