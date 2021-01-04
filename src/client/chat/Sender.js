import React, {useState} from 'react'
import {sendToFirebase} from "../redux/actions/actions";
import {Button, Form, Input} from "antd";

export default function Sender(props) {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage() {
    sendToFirebase(name, message);
    setMessage('');
  }

  const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  };

  const validateMessages = {
    required: '!${label} הוא שדה חובה',
  };

  return (
      <div>
        <Form {...layout} name="nest-messages"
              validateMessages={validateMessages} onFinish={sendMessage}>
          <Form.Item label="שם"  rules={[{required: true}]}>
            <Input onChange={(e) => setName(e.target.value)} value={name}/>
          </Form.Item>

          <Form.Item label="הודעה" rules={[{required: true}]}>
            <Input.TextArea value={message} onChange={(e) => setMessage(e.target.value)}/>
          </Form.Item>


          <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
            <Button type="primary" htmlType="submit">
              שלח/י הודעה
            </Button>
          </Form.Item>
        </Form>

      </div>
  )

}