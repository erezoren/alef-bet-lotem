import React from 'react';
import {connect} from 'react-redux';
import {Avatar, List, Typography} from "antd";

const {Title, Paragraph, Text, Link} = Typography;

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
  }
}

export default connect(mapStateToProps)(function Messages(props) {
  const {messages} = props;

  const formatDate = (seconds) => {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(seconds);
    return d.toLocaleString();
  }
  return (
      <>
        <List
            itemLayout="vertical"
            dataSource={messages}
            renderItem={(msg, idx) => (
                <List.Item key={msg.id} style={{backgroundColor: idx%2==0?"#DCF5A0":"#B4CB7A"}}>
                  <List.Item.Meta
                      avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                      }
                      title={formatDate(msg.creation_date.seconds)}
                      description={`מאת: ${msg.from}`}
                  />
                  <div style={{whiteSpace: 'pre-line'}}
                       dangerouslySetInnerHTML={{__html: msg.text}}/>
                </List.Item>
            )}
        >
        </List>

      </>
  );
});
