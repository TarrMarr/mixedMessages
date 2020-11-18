function randomNum(num) {
    return Math.floor(Math.random()* num)
}

const randomThings = {
    motivationalMantras: ['A winner is a dreamer who never gives up', 'You didnt come this far to only come this far', 'Act as if what you do makes a difference.  It does', 'Keep moving forward', 'A healthy outside starts with a healthy inside'],
    activities: ['Take a nap', 'Take a long pampering bath', 'Go for a walk in nature', 'Call someone just to say hi', 'Read a book', 'Meditate', 'Make one of your favourite healthy meals'],
    healthyIdeas: ['Drink warm lemon water with honey', 'Take your multivitamins', 'Make some green tea', 'Eat a healthy salad', 'Drink a smoothie']
} 

let personalMessage = []

for (let prop in randomThings) {
    let option = randomNum(randomThings[prop].length)
    switch (prop) {
        case 'motivationalMantras':
            personalMessage.push(`Something healthy for the brain: "${randomThings[prop][option]}".`)
            break
        case 'activities':
            personalMessage.push(`Something healthy for the body: ${randomThings[prop][option]}`)
            break
        case 'healthyIdeas':
            personalMessage.push(`Something healthy to intake: ${randomThings[prop][option]}`)
            break
        default:
            personalMessage.push('Not enough information')
    }
}

function formatMessage() {
    const formatted = personalMessage.join('/n')
    console.log(formatted)
}

formatMessage(personalMessage);
