
import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';

const users = []
const USER_COUNT = 7

const getLoggedInUser = () => {
  return {
    email: 'bhopalsinghsis@gmail.com',
    id: uuidv4(),
    lastSeen: faker.date.between(faker.date.past(1), new Date()),
    name: 'Bhopal Singh',
    profilePhoto: 'https://avatars.githubusercontent.com/u/17331876?s=400&u=09765a4e69d46ba6b92c81673b3a4e06be110bc6&v=4',
    username: 'bsingh'
  }
}

const getUsers = (count = USER_COUNT) => {  
  const length = users.length
  while(length === 0 && --count >=0 )
    users.push(generateUser())
  return users
}

const generateUser = () => {
    const createdAt = faker.date.past(2);
    const name = faker.name.findName();
    return {
        coverPhoto: faker.image.image(),
        createdAt,
        description: faker.lorem.sentences(),
        email: faker.internet.email(name),
        id: uuidv4(),
        lastSeen: faker.date.between(createdAt, new Date()),
        messages: [faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.sentences(), faker.lorem.sentences(), faker.lorem.sentences(), faker.lorem.sentence()],
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
