const shout = str => str.toUpperCase();

const whisper = str => str.toLowerCase();

const logShout = str => console.log(str.toUpperCase());

const logWhisper = str => console.log(str.toLowerCase());

const sayHiToGrandma = str => {
<<<<<<< HEAD
  if (str === str.toLowerCase()) {
    return `I can't hear you!`
  };
  if (str === str.toUpperCase()) {
=======
  if (str === lowercase) {
    return `I can't hear you!`
  };
  if (str === uppercase) {
>>>>>>> f0dfc8d798c417303a7f41e6690fc27f3fbcb929
    return `YES INDEED!`
  };
  if (str === `I love you, Grandma.`) {
    return `I love you, too.`;
  }
}
