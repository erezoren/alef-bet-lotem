import React, {useEffect, useState} from 'react'
import {Button, Card} from "antd";
import API from "../../API";
const {Meta} = Card;


export const Topics = ({setGameId}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((resp) => setTopics(resp));
    return function cancel() {
      setTopics([]);
    }

  }, []);

  const getTopics = async () => {
    return API.get(
        '/topics/alefbet/',
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

  return (
      <table style={{borderSpacing: "80px"}}>
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
  )
}