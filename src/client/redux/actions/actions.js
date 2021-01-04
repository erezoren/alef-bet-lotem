import {RECEIVED_MESSAGE} from "./actions_types";
const firebase = window.firebase;


export function sendToFirebase(from, text) {
  const msgs = firebase.firestore().collection('messages');
  const creation_date = new Date();
  msgs.add({ from, text, creation_date });
}

export function receivedMessage(message) {
  return { type: RECEIVED_MESSAGE, payload: message };
}