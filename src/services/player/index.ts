import sounds from './commands';

const time = 1300;

const setTimeOutInterval = (interval: number): number => {
  let result = 0;
  if (interval > 1) {
    result = time * (interval - 1);
  }
  return result;
};

const getRandomSound = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getRandomProperty = (categores: number[]): number => {
  const randomProperty = Math.floor(Math.random() * categores.length);
  return categores[randomProperty];
};

const configureElementArray = (isColores: boolean, isFigures: boolean, isNumbers: boolean): number[] => {
  const elements = [];
  if (isFigures) {
    elements.push(1);
  }
  if (isColores) {
    elements.push(2);
  }
  if (isNumbers) {
    elements.push(3);
  }
  return elements;
};

export const configureTimeOut = (amount: number, interval: number): number => {
  let timeOut;
  const pauseInterval = setTimeOutInterval(interval);
  switch (amount) {
    case 1: {
      timeOut = time + pauseInterval;
      break;
    }
    case 2: {
      timeOut = 2 * time + pauseInterval;
      break;
    }
    case 3: {
      timeOut = 3 * time + pauseInterval;
      break;
    }
    case 4: {
      timeOut = 4 * time + pauseInterval;
      break;
    }
    default: {
      timeOut = time + pauseInterval;
    }
  }
  return timeOut;
};

const startPlayCommands = (amount: number, isColores: boolean, isFigures: boolean, isNumbers: boolean): void => {
  const { colors, figures, numbers } = sounds;
  const elements = configureElementArray(isColores, isFigures, isNumbers);
  let i = 0;
  (function loops(): void {
    if (i < amount) {
      const category = getRandomProperty(elements);
      switch (category) {
        case 1: {
          const randomFigure = getRandomSound(1, 3);
          switch (randomFigure) {
            case 1: {
              figures.circle.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 2: {
              figures.square.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 3: {
              figures.triangle.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            default:
              break;
          }
          break;
        }
        case 2: {
          const randomColor = getRandomSound(1, 3);
          switch (randomColor) {
            case 1: {
              colors.blue.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 2: {
              colors.green.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 3: {
              colors.yellow.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            default:
              break;
          }
          break;
        }
        case 3: {
          const randomNumber = getRandomSound(1, 9);
          switch (randomNumber) {
            case 1: {
              numbers.one.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 2: {
              numbers.two.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 3: {
              numbers.three.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 4: {
              numbers.four.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 5: {
              numbers.five.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 6: {
              numbers.six.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 7: {
              numbers.seven.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 8: {
              numbers.eight.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            case 9: {
              numbers.nine.play(() => {
                i += 1;
                loops();
              });
              break;
            }
            default:
              break;
          }
          break;
        }
        default:
          break;
      }
    }
  }());
};

export default startPlayCommands;
