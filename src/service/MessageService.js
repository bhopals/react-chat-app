
import faker from 'faker'

/*** 
 * messages @Object
 * Random Messages to show in User's Timeline  
 * @returns {Array} of Message - @Message - { text : @String, isReceived: @Boolean }
 * */
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

/**
 * A Helper method to Shuffle messages and return a random list of size @count
 * 
 * @param {*} count {default = 1 } - No. of messages to be returned
 * @returns @Array of Messages
 * 
*/
const getMessages = (count = 1) => messages.sort(function() { return 0.5 - Math.random() }).slice(1, count < messages.length ? count : messages.length -1)

export default getMessages;
