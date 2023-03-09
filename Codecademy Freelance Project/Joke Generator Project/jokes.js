

const randomNumber = Math.floor(Math.random() * 12);

const funnyStuff = (randomNumber) => {
  switch (randomNumber) {
    case 0:
      return "I read that by law you must turn on your headlights when it’s raining in Sweden, but how am I supposed to know when it’s raining in Sweden?";
    case 1:
      return "I don’t trust stairs. They are always up to something.";
    case 2:
      return "Today, my son asked, “Can I have a bookmark?” I burst into tears— 11 years old and he still doesn’t know my name is Byran.";
    case 3:
      return 'The bank keeps calling me to give me compliments. They say I have an “outstanding balance.”';
    case 4:
      return "There’s only one thing I can’t deal with, and that’s a deck of cards glued together.";
    case 5:
      return "Police arrested a bottle of water because it was wanted in three different states: solid, liquid, and gas.";
    case 6:
      return "My doctor told me I’ve really grown as a person. Well, her exact words were that I 'gained excess weight.'";
    case 7:
      return "I spent a lot of time, money, and effort childproofing my house, but the kids still get in.";
    case 8:
      return "You know, people say they pick their nose, but I feel like I was just born with mine.";
    case 9:
      return "I had a date last night. It was perfect. Tomorrow, I’ll try a grape.";
    case 10:
      return "I can guess what people do for a living just by looking at their hands. I mean, I’m usually wrong, but I can guess.";
    case 11:
      return "As I get older, I remember all the people I lost along the way. Maybe a career as a tour guide was not the right choice.";
    default:
      return "No jokes, please. I have no funny bone."
  }
}
console.log(funnyStuff(randomNumber))