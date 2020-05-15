import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import { Tabs, Button } from 'antd';

import 'ant/antd.css';

const { TabPane } = Tabs;
const operations = <Button>Extra Action</Button>;

export default () => {
  return (
    <Page>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </Page>
  );
}
