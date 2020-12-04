import React, {useEffect, useState} from "react";
import Title from "antd/lib/typography/Title";
import {Breadcrumb, Layout, Menu} from "antd";
import {Score} from "./Score";
import {AlefBetContainer} from "../games/alefbet/AlefBetContainer";
import {HearingContainer} from "../games/hearing/HearingContainer";
import {SpellingContainer} from "../games/spelling/SpellingContainer";

const {Header, Content, Footer} = Layout;

export const Home = (props) => {

  const [score, setScore] = useState(0);
  const [page, setPageId] = useState("1");
  const [bcName, setBcName] = useState("תמונה");
  const[game,setGame]=useState(renderGame)

  const renderGame = () => {
    switch (page) {
      case "1":
        return <AlefBetContainer setScore={setScore}/>;
      case "2":
        return <HearingContainer setScore={setScore}/>
      case "3":
        return <SpellingContainer setScore={setScore}/>
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
        setBcName('תמונה');
        break
    }
    setGame(renderGame())
  }, [page])

  return (
      <Layout style={{height: "1000px"}} className="layout">
        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
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
            <Title>ברוכים הבאים לאלף-בית-לוטם</Title>
            <div style={{display: "inline-block"}}>
              {game}
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Erez Oren ©2020</Footer>
      </Layout>
  )

};
