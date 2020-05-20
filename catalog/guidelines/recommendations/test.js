import React from 'react';
import { Button } from 'antd';


export default class Test extends React.Component {

    render() {
        return (
            <div className="test-container">


                <Button type="primary" danger>Danger</Button>

                <Button>Secondary</Button>

                <Button type="primary">Primary</Button>

            </div >
        )


    }
}
