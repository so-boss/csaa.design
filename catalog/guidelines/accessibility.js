import React from 'react';

import {Page, ReactSpecimen, ColorPaletteSpecimen, markdown} from 'catalog';

import '../ant/antd.css';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

// import { SettingOutlined } from '../../icons/components/Icons/';


//TABS
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const Overview = () => markdown`
### Colors inherit from two tiers: **brand** & **product**. 

The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.

## Primaries / Brand Color
Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. 

Mobilitas uses blue as the base color. It's Hex value is **#14356F**. Use-cases include: call to action, key actions, operational status, & highlighting important information.


${<ColorPaletteSpecimen
  span={3}
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
              <TabPane tab="Accessibility" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Usage" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </StickyContainer>
        </Page>
      </div>
    )
  }
}
