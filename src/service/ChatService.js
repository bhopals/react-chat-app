
import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';
import getMessages from './MessageService'

const users = []
const USER_COUNT = 7

/**
* The Current LoggedIn User Details 
* @returns @User Object
*/
const getLoggedInUser = () => {
  return {
    email: 'bhopalsinghsis@gmail.com',
    id: uuidv4(),
    lastSeen: faker.date.between(faker.date.past(1), new Date()),
    messages: getMessages(USER_COUNT),
    name: 'Bhopal Singh',
    profilePhoto: 'https://avatars.githubusercontent.com/u/17331876?s=400&u=09765a4e69d46ba6b92c81673b3a4e06be110bc6&v=4',
    username: 'bsingh'
  }
}

/**
* Make use of Faker library to generate FAKE USERS
* @param {*} count - default {USER_COUNT} - Number of fake users to be generated.
* @returns @Array of @User Object
*/
const getUsers = (count = USER_COUNT) => {  
  const length = users.length
  while(length === 0 && --count >=0 )
    users.push(generateUser())
  return users
}

/**
* To Generate User Date - Fake data generator library - [https://github.com/marak/Faker.js/]
* @returns an @User Object
*/
const generateUser = () => {
    const createdAt = new Date('May 17, 2021 03:24:00')
    const name = faker.name.findName();
    return {
        coverPhoto: faker.image.image(),
        createdAt,
        description: faker.lorem.sentences(),
        email: faker.internet.email(name),
        id: uuidv4(),
        lastSeen: faker.date.between(createdAt, new Date()),
        messages: getMessages(USER_COUNT),
        name: faker.name.findName(),
        profilePhoto: faker.internet.avatar(),
        username: faker.internet.userName(name),
        website: faker.internet.url()
    };
}

export default {
  getUsers,
  getLoggedInUser
}
