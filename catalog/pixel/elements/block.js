import React from 'react';

import {Page, ReactSpecimen} from 'catalog';

import '../../ant/antd.css';
import { Tabs, Collapse, Select } from 'antd';
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


//COLLAPSE
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const genExtra = () => (
//   <SettingOutlined
//     onClick={event => {
//       // If you don't want click extra trigger collapse, you can prevent this:
//       event.stopPropagation();
//     }}
//   />
// );

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
      <Page>
        <div layout="tabs">
          <StickyContainer>
            <Tabs
              defaultActiveKey="1"
              renderTabBar={renderTabBar}
              size="large"
            >
              <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </StickyContainer>
        </div>
        <div layout="tabs">
          <Tabs
            defaultActiveKey="1"
            size="large"
            type="card"
          >
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>

        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="This is panel header 1" key="1">
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <div>{text}</div>
          </Panel>
        </Collapse>
      </Page>
    );
  }
}
