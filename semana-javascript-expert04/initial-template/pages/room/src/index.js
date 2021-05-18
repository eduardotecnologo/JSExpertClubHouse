import { constants } from "../../../../app/pages/_shared/constants.js";
import SocketBuilder from "../../_shared/socketBuilder.js"

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespace.room
});

const socket = socketBuilder
  .setOnUserConnect((user) => console.log('user connected!', user))
  .setOnUserDisconnect((user) => console.log('user desconnected!', user))
  .build();
const room = {
  id: Date.now(),
  topic: 'Chat Developer'
}

const user = {
  img: 'https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/boy_people._avatar_man_male_teenager_user__1-512.png',
  username: 'Eduardo developer'
}

socket.emit(constants.events.JOIN_ROOM, {
  user, room
});