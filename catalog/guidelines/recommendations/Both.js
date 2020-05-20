import React from 'react';
import ReactDOM from 'react-dom';
import './do.css'
import { Col, Row } from 'antd';
import ButtonTest from './ButtonTest';
import Do from './do';
import Dont from './dont';
import Test from './test';




const Both = ({ title } = props) => {

    return (

        <div className="both-container">
            <Row>
                <Col span={12}>
                    <Do
                        description={'Destructuring works similarly'}
                        doInfo={'Destructuring props made this code much DRYer'}
                    >
                        {/* <ButtonTest></ButtonTest> */}
                    </Do>
                </Col>
                <Col span={12}>

                    <Dont
                        description={'Destructuring works similarly i'}
                        dontInfo={'This id Dont component'}>
                        {/* <Test /> */}
                    </Dont >
                </Col>
            </Row>
        </div>


    )




}
export default Both