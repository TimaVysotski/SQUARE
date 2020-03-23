import Sound from 'react-native-sound';

export const one = new Sound('one.mp3', Sound.MAIN_BUNDLE);
export const two = new Sound('two.mp3', Sound.MAIN_BUNDLE);
export const three = new Sound('three.mp3', Sound.MAIN_BUNDLE);
export const four = new Sound('four.mp3', Sound.MAIN_BUNDLE);
export const five = new Sound('five.mp3', Sound.MAIN_BUNDLE);
export const six = new Sound('six.mp3', Sound.MAIN_BUNDLE);
export const seven = new Sound('seven.mp3', Sound.MAIN_BUNDLE);
export const eight = new Sound('eight.mp3', Sound.MAIN_BUNDLE);
export const nine = new Sound('nine.mp3', Sound.MAIN_BUNDLE);
export const blue = new Sound('blue.mp3', Sound.MAIN_BUNDLE);
export const green = new Sound('green.mp3', Sound.MAIN_BUNDLE);
export const yellow = new Sound('yellow.mp3', Sound.MAIN_BUNDLE);
export const circle = new Sound('circle.mp3', Sound.MAIN_BUNDLE);
export const square = new Sound('square.mp3', Sound.MAIN_BUNDLE);
export const triangle = new Sound('triangle.mp3', Sound.MAIN_BUNDLE);

const numbers = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
};

const colors = {
  blue,
  green,
  yellow,
};

const figures = {
  circle,
  square,
  triangle,
};

const sounds = {
  colors,
  figures,
  numbers,
};

export default sounds;
