import React from 'react';
import { Col, Row, Button, Radio, Card, Avatar } from 'antd';
import './do.css'


const { Meta } = Card;

export default class ButtonTest extends React.Component {

    render() {
        return (
            <div className="test-container">
                <Row>
                    <Col span={24}>
                        <Col span={8}>
                            <Button type="primary">Primary</Button>
                        </Col>
                        <Col span={8}>
                            <Button>Secondary</Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" danger>Danger</Button>
                        </Col>
                    </Col>
                </Row>
            </div >
        )


    }
}
