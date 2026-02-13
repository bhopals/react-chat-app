import faker from "faker";

import { v4 as uuidv4 } from "uuid";
import getMessages from "./MessageService";

const users = [];
const USER_COUNT = 7;

// Local avatar paths to avoid external CDN dependency
const avatarPaths = [
  process.env.PUBLIC_URL + "/assets/icons/avatar1.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar2.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar3.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar4.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar5.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar6.svg",
  process.env.PUBLIC_URL + "/assets/icons/avatar7.svg"
];

/**
 * The Current LoggedIn User Details
 * @returns @User Object
 */
const getLoggedInUser = () => {
  return {
    order: 0,
    email: "bhopalsinghsis@gmail.com",
    id: uuidv4(),
    lastSeen: "Oct 10, 2021 03:24:00",
    messages: getMessages(USER_COUNT),
    name: "Bhopal Singh",
    profilePhoto: avatarPaths[0],
    username: "bsingh",
  };
};

/**
 * Make use of Faker library to generate FAKE USERS
 * @param {*} count - default {USER_COUNT} - Number of fake users to be generated.
 * @returns @Array of @User Object
 */
const getUsers = (count = USER_COUNT) => {
  const length = users.length;
  let i = 0;
  while (length === 0 && --count >= 0) users.push(generateUser(++i));
  return users;
};

/**
 * To Generate User Date - Fake data generator library - [https://github.com/marak/Faker.js/]
 * @returns an @User Object
 */
const generateUser = (order) => {
  const createdAt = "May 17, 2021 03:24:00";
  const name = faker.name.findName();
  return {
    coverPhoto: faker.image.image(),
    createdAt,
    description: faker.lorem.sentences(),
    email: faker.internet.email(name),
    id: uuidv4(),
    lastSeen: "Oct 15, 2021 03:24:00",
    messages: getMessages(USER_COUNT),
    name: faker.name.findName(),
    order,
    profilePhoto: avatarPaths[order % avatarPaths.length],
    username: faker.internet.userName(name),
    website: faker.internet.url(),
  };
};

const ChatService = {
  getUsers,
  getLoggedInUser,
};

export default ChatService;
