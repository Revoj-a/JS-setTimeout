// setTimeout(() => {
//   document.body.style.backgroundColor = "lightblue";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "lightgreen";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "lightcoral";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("blue", 1000, () => {
      delayedColorChange("green", 1000, () => {});
    });
  });
});
