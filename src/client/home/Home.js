import React, {useEffect, useState} from "react";
import Title from "antd/lib/typography/Title";
import API from "../API";
import {Button, Card, Divider} from "antd";
import {Game} from "../game/Game";

const {Meta} = Card;

export const Home = (props) => {

  const [topics, setTopics] = useState([]);
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    getTopics().then((resp) => setTopics(resp))
    return function cancel() {
      setTopics([]);
    }

  }, [])

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

  }

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

  return (
      <div style={{display: "inline-block"}}>
        <Title>ברוכים הבאים לאלף-בית-לוטם</Title>
        {
          renderTopics()
        }
        <Divider/>
        {gameId && <Game gameId={gameId}/>}
      </div>
  )

}
