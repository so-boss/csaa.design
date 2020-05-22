import React from 'react';
import './do.css'
import { Col, Row } from 'antd';
import Do from './do';
import Dont from './dont';
// import Test from './test';
// import ButtonTest from './ButtonTest';





const Both = ({ title } = props) => {

    return (

        <div className="both-container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={10}>

                    <Do
                        // description={'Destructuring works similarly'}
                        doInfo={'Always check for the contrast'}
                    >
                        {/* <ButtonTest></ButtonTest> */}
                    </Do>
                </Col>
                <Col span={10}>

                    <Dont
                        // description={'Destructuring works similarly i'}
                        dontInfo={'Never align Buttons in this order'}>
                        {/* <Test /> */}
                    </Dont >
                </Col>
            </Row>
        </div>


    )




}
export default Both