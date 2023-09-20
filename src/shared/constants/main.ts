import env from 'react-dotenv'

export const socketOptions = {
  addOldUser: 'add old user',
  getNewMessage: 'message for all',
  getNewUser: 'add new user',
  getOldUser: 'remove user',
  giveAllUsers: 'now list users',
  giveName: 'give a name',
  sendChatMessage: 'chat message'
}

export const textForFile = 'Файл не выбран'

export let urlApi: string

if (process.env.REACT_APP_URLAPI === 'prod') {
  urlApi = 'https://chat-node-js-backend.glitch.me/'
} else {
  urlApi = 'http://localhost:3001/'
}
