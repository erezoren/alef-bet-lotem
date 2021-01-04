import {FIREBASE_INIT, RESET_MESSAGES} from "./actions/actions_types";

const firebase = window.firebase;

export const firebaseMessages = ({dispatch, getState}) => next => action => {

  if (action.type == FIREBASE_INIT) {
    // Read From Firebase
    firebase.firestore().collection('messages').orderBy('creation_date','desc').limit(
        50).onSnapshot(function (qs) {
      const batch = [];
      qs.forEach(function (doc) {
        batch.push({id: doc.id, ...doc.data()});
      });
      ///dispatch new messages
      dispatch({type: RESET_MESSAGES, payload: batch});
    });
    return;
  }

  return next(action);

}