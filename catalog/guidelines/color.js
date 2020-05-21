import React from 'react';
import ReactDOM from 'react-dom';
import { Page, ColorPaletteSpecimen } from 'catalog';
import { Tabs, Card, Col, Row, Avatar, Divider, PageHeader, Menu, Dropdown, Button, Tag, Typography } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
// import { EllipsisOutlined } from '@ant-design/icons';


const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;
const { Meta } = Card;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

// const DropdownMenu = () => {
//   return (
//     <Dropdown key="more" overlay={menu}>
//       <Button
//         style={{
//           border: 'none',
//           padding: 0,
//         }}
//       >
//         <EllipsisOutlined
//           style={{
//             fontSize: 20,
//             verticalAlign: 'top',
//           }}
//         />
//       </Button>
//     </Dropdown>
//   );
// };

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Design Guidelines',
  },
  {
    path: 'first',
    breadcrumbName: 'Color',
  }
];

const BrandCards = () => (
  <Row gutter={[16, 24]}>
    <Col span={12}>
      <a href="#csaa-brand">
        <Card bordered={true} hoverable={true}>
          <Meta
            avatar={<Avatar src="/icons/csaa.png" />}
            title="CSAA"
            description="Core CSAA Brand Color Scheme"
          />
        </Card>
      </a>
    </Col>
    <Col span={12}>
      <a href="#mobilitas-brand">
        <Card bordered={true} hoverable={true}>
          <Meta
            avatar={<Avatar src="/icons/mobilitas.png" />}
            title="Mobilitas"
            description="Unique Colors for Mobilitas Brand"
          />
        </Card>
      </a>
    </Col>
  </Row>
)

const content = (
  <div>
    <Paragraph>Our color system complies with four tier inheritance; starting with brand level, colors overiding those of the brand, must belong to to one of the three remaining tiers (business, product, project).</Paragraph>
    <Paragraph>We prefer to design with the HEX & RGBA color model, as our core deliverables are web based.</Paragraph>
    <div>
      <Title className="footer-title" level={4}>Brands</Title>
    </div>
  </div>
);



const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

const CSAA = () => (
  <div layout="panel">
    <Paragraph>The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color. </Paragraph>
    <Paragraph>Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface.</Paragraph>

    <ColorPaletteSpecimen

      horizontal={false}
      colors={[
        { name: "01 / BLUE", value: "#00338D" },
        { name: "02 / BLUE", value: "#0096D6" },
        { name: "03 / BLUE", value: "#88CBDF" },
        { name: "01 / YELLOW", value: "#FFC425" },
        { name: "01 / RED", value: "#D52B1E" },
      ]}
    />

    <div className="site-card-wrapper">
      <Divider />
      <Title level={4}>Products</Title>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <a href="/mypolicy/style/color">
            <Card hoverable={true}>
              <Meta
                avatar={<Avatar src="/icons/b2c.png" />}
                title="MyPolicy Portal"
                description="Portal Description"
              />
            </Card>
          </a>
        </Col>
        <Col span={12}>
          <a href="/quote/style/color">
            <Card bordered={true} hoverable={true}>
              <Meta
                avatar={<Avatar src="/icons/b2c.png" />}
                title="Quote"
                description="Quote Description"
              />
            </Card>
          </a>
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <a href="/ip/style/color">
            <Card bordered={true} hoverable={true}>
              <Meta
                avatar={<Avatar src="/icons/b2b.png" />}
                title="Insurance Portal"
                description="IP Description"
              />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  </div>
);



const Mobilitas = () => (
  <div layout="panel">
    <Paragraph>The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.</Paragraph>
    <Paragraph>Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface.</Paragraph>
    <Paragraph>Mobilitas uses blue as the base color. It's Hex value is #14356F. Use-cases include: call to action, key actions, operational status, & highlighting important information.</Paragraph>

    <ColorPaletteSpecimen
      horizontal={false}
      colors={[
        { name: "070 / DARK", value: "#14356f" },
        { name: "050 / LIGHT", value: "#047e8e" },
        { name: "000 / LIGHT", value: "#f7f8fa" },
        { name: "070 / DARK", value: "#3b4956" },
        { name: "100 / BLACK", value: "#0c1014" }
      ]}
    />

    <div className="site-card-wrapper">
      <Divider />
      <Title level={4}>Products</Title>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <a href="/mobilitas/style/color">
            <Card hoverable={true}>
              <Meta
                avatar={<Avatar src="/icons/b2c.png" />}
                title="Rideshare"
                description="Rideshare Description"
              />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  </div>
);

export default class extends React.Component {
  /*
    state = {
      expandIconPosition: 'left',
      activeKey:1
    };

    onPositionChange = expandIconPosition => {
      this.setState({ expandIconPosition });
    };
    onChange = (key) => {
      window.location.hash = key;
    }
    onCardClick = (key) => {
      this.setState({ activeKey: key });
    }

    render(){
      const { expandIconPosition } = this.state;
      return (
        <div layout="tabs">
          <Page>
            <StickyContainer>
              <Tabs
                defaultActiveKey="overview"
                renderTabBar={renderTabBar}
                size="large"
                animated={false}
                onChange={this.onChange}
              >
                <TabPane tab="Overview" key="overview">
                  <Overview></Overview>
                </TabPane>
                <TabPane tab="CSAA" key="csaa-brand">
                  <CSAA></CSAA>
                </TabPane>
                <TabPane tab="Mobilitas" key="mobilitas-brand">
                  <Mobilitas></Mobilitas>
                </TabPane>
              </Tabs>
            </StickyContainer>
          </Page>
        </div>
      )
    }
    */

  render() {

    return (
      <div layout="page">
        <Page>
          <PageHeader
            title="Color"
            className="site-page-header"
            tags={<Tag color="blue">Under Development</Tag>}
            avatar={{
              src: '/icons/sprite/color_palette1.svg',
              shape: 'square'
            }}
            breadcrumb={{ routes }}
            footer={
              <StickyContainer>
                <Tabs renderTabBar={renderTabBar} defaultActiveKey="1">
                  <TabPane
                    tab={
                      <Card hoverable={true}>
                        <Meta
                          avatar={<Avatar src="/icons/csaa.png" />}
                          title="CSAA"
                          description="Core CSAA Brand Color Scheme"
                        />
                      </Card>
                    }
                    key="1"
                  >
                    <CSAA />


                  </TabPane>

                  <TabPane
                    tab={
                      <Card hoverable={true}>
                        <Meta
                          avatar={<Avatar src="/icons/mobilitas.png" />}
                          title="Mobilitas"
                          description="Unique Colors for Mobilitas Brand"
                        />
                      </Card>
                    }
                    key="2"
                  >
                    <Mobilitas />
                  </TabPane>
                </Tabs>
              </StickyContainer>
            }
          >
            <Content>
              {content}
            </Content>
          </PageHeader>

        </Page>
      </div>
    )
  }
}
