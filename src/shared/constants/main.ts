import env from 'react-dotenv'

export const socketOptions = {
  sendChatMessage: 'chat message',
  giveName: 'give a name',
  giveAllUsers: 'now list users',
  getNewUser: 'add new user',
  getOldUser: 'remove user',
  getNewMessage: 'message for all'
}

export const textForFile = 'Файл не выбран'

export let urlApi: any

if (process.env.REACT_APP_URLAPI === 'prod') {
  urlApi = 'https://chat-node-js-backend.glitch.me/'
} else {
  urlApi = 'http://localhost:3001/'
}
