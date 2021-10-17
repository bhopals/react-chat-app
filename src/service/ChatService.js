
import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';

const users = []
const USER_COUNT = 7

const messages = [
  { text: 'Yo!', isReceived: true },
  { text: 'It is really hard to run for 10KM in an hour!!', isReceived: false},
  { text: 'I got two tickets to go see this awesome band called, Lorem lpsum Dollars!! Do you want to come?', isReceived: false },
  { text: 'Hey, How are you doing?', isReceived: false },
  { text: 'It is gonna rain this weekend, so we probably need to rethink our lunch plan', isReceived: false},
  { text: faker.lorem.sentence(), isReceived: true},
  { text: 'I don\'t think I will be able to make it, but I Heard they\'re great! Have fun and let\'s try and catch up at some point this week!', isReceived: false },
  { text: 'Yo! Lex is being a lill bi*ch!', isReceived: false },
  { text: 'My phone battery is dead. I will call you back once it is charged.', isReceived: true},
  { text: 'The network ain\'t got shit on me!', isReceived: true },
  { text: 'Last night game was pretty Awesome! Raptors nailed it', isReceived: false},
  { text: 'Are you joining us for a lunch this week?', isReceived: true },
  { text: 'The weather is good. I hope it will not spoil the weekend plan!!', isReceived: true},
  { text: 'Have you seen Merton?', isReceived: false },
  { text: 'What\'s your thoughts on picking up a delivery from the Apple Store', isReceived: false},
  { text: 'I really hope the new show is going to be a blockbuster!', isReceived: true },
  { text: 'I love listening to Simple Plan!!', isReceived: false },
  { text: 'How is your day going?', isReceived: true },
  { text: 'Are you okay sending over the list of the books that I need to buy?', isReceived: false},
]

const getMessages = () => messages.sort(function() { return 0.5 - Math.random() }).slice(1,7)

const getLoggedInUser = () => {
  return {
    email: 'bhopalsinghsis@gmail.com',
    id: uuidv4(),
    lastSeen: faker.date.between(faker.date.past(1), new Date()),
    messages: getMessages(),
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
    const createdAt = new Date('May 17, 2021 03:24:00')
    const name = faker.name.findName();
    return {
        coverPhoto: faker.image.image(),
        createdAt,
        description: faker.lorem.sentences(),
        email: faker.internet.email(name),
        id: uuidv4(),
        lastSeen: faker.date.between(createdAt, new Date()),
        messages: getMessages(),
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
