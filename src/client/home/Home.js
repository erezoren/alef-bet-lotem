import React, {useEffect, useState} from "react";
import Title from "antd/lib/typography/Title";
import API from "../API";
import {Breadcrumb, Button, Card, Divider, Layout, Menu} from "antd";
import {Game} from "../games/alefbet/Game";
import {Score} from "./Score";

const {Header, Content, Footer} = Layout;

const {Meta} = Card;

export const Home = (props) => {

  const [topics, setTopics] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [score, setScore] = useState(0);
  const [page, setPageId] = useState("1");

  useEffect(() => {
    getTopics().then((resp) => setTopics(resp));
    return function cancel() {
      setTopics([]);
    }

  }, []);

  const getTopics = async () => {
    return API.get(
        '/topics/',
    )
    .then((response) => {
          if (response.data.topics) {
            return response.data.topics;
          }
          else {
            throw Error("Error fetching topics")
          }
        }
    )
    .catch((e) => {
      throw e;
    })

  };

  const renderTopics = () => {

    return <table style={{borderSpacing: "80px"}}>
      <tr>

        {

          topics.map((topic, idx) => {

            return <td>
              <Card
                  style={{width: 100}}
                  bordered
                  hoverable
                  style={{width: 240}}
                  cover={<img width={"300px"} alt="example"
                              src={`../../../images/subjects/${topic.image}`}/>}
              >
                <Meta title={topic.name} description=""
                      style={{fontSize: "50px"}}/>
                <br/>
                <Button
                    type="primary" shape="round"
                    onClick={() => setGameId(topic.id)}>שחק</Button>
              </Card>

            </td>

          })

        }
      </tr>
    </table>

  }

  const renderGame = () => {
    switch (page) {
      case "1":
        return <AlefBet/>;
      case "2":
        return <h1>Not implemented yet</h1>
    }

  };

  function AlefBet() {
    return <div>
      <div>
        {renderTopics()}
      </div>
      <Divider/>
      {gameId && <Game setWin={(win)=>{
        if(win)
        setScore(s=>s+1);
        else
          setScore(s=>s-1)
      }} gameId={gameId}/>}
    </div>
  }
  return (
      <Layout className="layout">
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
            <Breadcrumb.Item>אלפבית</Breadcrumb.Item>
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
