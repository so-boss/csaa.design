import React from 'react';
import './do.css'
import { Card } from 'antd';


const { Meta } = Card;

const Dont = ({ description, children, dontInfo } = props) => {

    return (

        <div>
            <h2>{description}</h2>

            <div className="do-container">
                <div className="dislike-image" />
                <div className="child-wrapper">
                    {children}
                </div>

                <div className="do-error" />
                <div className="dont-info">
                    <span>Don't</span>
                    <p>{dontInfo}</p>
                </div>
            </div>
        </div>


    )




}
export default Dont