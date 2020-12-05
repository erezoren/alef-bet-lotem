const baseSoundsDir = '../../../../sounds/common/';
const audioSuccess = new Audio(`${baseSoundsDir}success.mp3`);
const audioFailure = new Audio(`${baseSoundsDir}failure.mp3`);

export const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};


export const playSuccess=()=>{
  audioSuccess.play();
}

export const playFailure=()=>{
  audioFailure.play();
}