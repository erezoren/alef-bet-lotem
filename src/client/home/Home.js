import React, {useState} from "react";
import Title from "antd/lib/typography/Title";
import {Breadcrumb, Card, Layout, Menu} from "antd";
import {Score} from "./Score";
import {AlefBetContainer} from "../games/alefbet/AlefBetContainer";
import {HearingContainer} from "../games/hearing/HearingContainer";

const {Header, Content, Footer} = Layout;


export const Home = (props) => {

  const [score, setScore] = useState(0);
  const [page, setPageId] = useState("1");

  const renderGame = () => {
    switch (page) {
      case "1":
        return <AlefBetContainer setScore={setScore}/>;
      case "2":
        return <HearingContainer setScore={setScore}/>
    }

  };

  return (
      <Layout style={{height:"1000px"}} className="layout">
        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"
                       onClick={e => setPageId(e.key)}>אלפבית</Menu.Item>
            <Menu.Item key="2" onClick={e => setPageId(e.key)}>שמיעה</Menu.Item>
          </Menu>
          <Score score={score}/>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>בית</Breadcrumb.Item>
            <Breadcrumb.Item>{page==1?'תמונה':'שמיעה'}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Title>ברוכים הבאים לאלף-בית-לוטם</Title>
            <div style={{display: "inline-block"}}>
              {renderGame()}
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Erez Oren ©2020</Footer>
      </Layout>
  )

};
