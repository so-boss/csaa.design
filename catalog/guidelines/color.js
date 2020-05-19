import React from 'react';

import {Page, ReactSpecimen, ColorPaletteSpecimen, markdown} from 'catalog';

import '../ant/antd.css';
import { Tabs, Card, Col, Row, Avatar, Divider } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;
const { Meta } = Card;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const Overview = () => markdown`
Design System is capable of being themed by any of the CSAA brands. 

${<div className="site-card-wrapper">
  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    Brands
  </Divider>
  <Row gutter={[16, 24]}>
    <Col span={8}>
      <a href="#csaa-brand">
        <Card bordered={true} hoverable={true}>
          <Meta
            avatar={<Avatar src="/icons/csaa.png" />}
            title="CSAA"
            description="CSAA Description"
          />
        </Card>
      </a>
    </Col>
    <Col span={8}>
      <a href="#mobilitas-brand">
        <Card bordered={true} hoverable={true}>
          <Meta
            avatar={<Avatar src="/icons/mobilitas.png" />}
            title="Mobilitas"
            description="Mobilitas Description"
          />
        </Card>
      </a>
    </Col>
  </Row>
</div>}
`

const CSAA = () => markdown`
## CSAA Brand
The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.

Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface.

${<ColorPaletteSpecimen
  span={6}
  colors={[
    {name: "01 / BLUE", value: "#00338D"},
    {name: "02 / BLUE", value: "#0096D6"},
    {name: "03 / BLUE", value: "#88CBDF"},
    {name: "01 / YELLOW", value: "#FFC425"},
    {name: "01 / RED", value: "#D52B1E"},
  ]}
/>}

${<div className="site-card-wrapper">
  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    Products
  </Divider>
  <Row gutter={[16, 24]}>
    <Col span={8}>
      <a href="/mypolicy/style/color">
        <Card bordered={true} hoverable={true}>
          <Meta
            avatar={<Avatar src="/icons/b2c.png" />}
            title="MyPolicy Portal"
            description="Portal Description"
          />
        </Card>
      </a>
    </Col>
    <Col span={8}>
      <Card bordered={true} hoverable={true}>
        <Meta
          avatar={<Avatar src="/icons/b2c.png" />}
          title="Quote"
          description="Quote Description"
        />
      </Card>
    </Col>
  </Row>
  <Row gutter={[16, 24]}>
    <Col span={8}>
    <Card bordered={true} hoverable={true}>
      <Meta
        avatar={<Avatar src="/icons/b2b.png" />}
        title="Insurance Portal"
        description="IP Description"
      />
    </Card>
  </Col>
  </Row>
</div>}
`

const Mobilitas = () => markdown`
## Mobilitas Brand
The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.

Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. 

Mobilitas uses blue as the base color. It's Hex value is **#14356F**. Use-cases include: call to action, key actions, operational status, & highlighting important information.

${<ColorPaletteSpecimen
  span={6}
  colors={[
    {name: "070 / DARK", value: "#14356f"},
    {name: "050 / LIGHT", value: "#047e8e"},
    {name: "000 / LIGHT", value: "#f7f8fa"},
    {name: "070 / DARK", value: "#3b4956"},
    {name: "100 / BLACK", value: "#0c1014"}
  ]}
/>}
`


export default class extends React.Component {
//export default () => {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };
  render(){
    const { expandIconPosition } = this.state;
    return (
      <div layout="tabs">
        <Page>
          <StickyContainer>
            <Tabs
              defaultActiveKey="1"
              renderTabBar={renderTabBar}
              size="large"
            >
              <TabPane tab="Overview" key="1">
                <Overview></Overview>
              </TabPane>
              <TabPane tab="CSAA" key="2">
                <CSAA></CSAA>
              </TabPane>
              <TabPane tab="Mobilitas" key="3">
                <Mobilitas></Mobilitas>
              </TabPane>
            </Tabs>
          </StickyContainer>
        </Page>
      </div>
    )
  }
}
