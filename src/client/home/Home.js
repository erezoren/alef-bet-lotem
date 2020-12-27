import React, {useEffect, useState} from "react";
import {Breadcrumb, Layout, Menu} from "antd";
import {Score} from "./Score";
import {AlefBetContainer} from "../games/alefbet/AlefBetContainer";
import {HearingContainer} from "../games/hearing/HearingContainer";
import {SpellingContainer} from "../games/spelling/SpellingContainer";
import {Welcome} from "./Welcome";

const {Header, Content, Footer} = Layout;

export const Home = (props) => {

  const [score, setScore] = useState(0);
  const [page, setPageId] = useState("0");
  const [bcName, setBcName] = useState("תמונה");
  const [game, setGame] = useState(renderGame)

  const renderGame = () => {
    switch (page) {
      case "1":
        return <AlefBetContainer setScore={setScore}/>;
      case "2":
        return <HearingContainer setScore={setScore}/>
      case "3":
        return <SpellingContainer setScore={setScore}/>
      default:
        return <Welcome/>
    }

  };

  useEffect(() => {
    switch (page) {
      case "1":
        setBcName('תמונה');
        break;
      case "2":
        setBcName('שמיעה');
        break;
      case "3":
        setBcName('איות');
        break
      default:
        setBcName('');
        break
    }
    setGame(renderGame())
  }, [page])

  return (
      <Layout style={{height: "100%"}} className="layout">
        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="0"
                       onClick={e => setPageId(e.key)}>בית</Menu.Item>
            <Menu.Item key="1"
                       onClick={e => setPageId(e.key)}>אלפבית</Menu.Item>
            <Menu.Item key="2" onClick={e => setPageId(e.key)}>שמיעה</Menu.Item>
            <Menu.Item key="3" onClick={e => setPageId(e.key)}>איות</Menu.Item>
          </Menu>
          <Score score={score}/>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>בית</Breadcrumb.Item>
            <Breadcrumb.Item>{bcName}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div style={{display: "inline-block"}}>
              {game}
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Erez Oren ©2020</Footer>
      </Layout>
  )

};
