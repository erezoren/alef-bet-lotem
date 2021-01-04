import React, {useEffect, useState} from "react";
import {Breadcrumb, Layout, Menu} from "antd";
import {Score} from "./Score";
import {AlefBetContainer} from "../games/alefbet/AlefBetContainer";
import {HearingContainer} from "../games/hearing/HearingContainer";
import {SpellingContainer} from "../games/spelling/SpellingContainer";
import {Welcome} from "./Welcome";
import Chat from "../chat/Chat";

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
      case "4":
        return <Chat/>
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
      case "4":
        setBcName('צ׳ט');
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
            <Menu.Item key="4" onClick={e => setPageId(e.key)}>צ׳ט</Menu.Item>
          </Menu>
          <Score score={score}/>
        </Header>
        <Content style={{padding: '0 50px', overflow: 'initial'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>בית</Breadcrumb.Item>
            <Breadcrumb.Item>{bcName}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div className={'game-wrap'}>
              {game}
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Erez Oren ©2020</Footer>
      </Layout>
  )

};
