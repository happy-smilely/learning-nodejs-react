export const delayTime = (time: number, func: Function) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      func();
      resolve(true);
    }, time);
  });
};
