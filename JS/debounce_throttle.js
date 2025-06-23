// debounce :- Programming techinque used to limit the excuation of the function
// delay the exceution of the function to specfic time period since the last time invoke
//  ui/ux to trigger the input before calling the api

function debounce(func, delay) {
  let timeout;
  return function (args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, args);
    }, delay);
  };
}
function callMe(msg) {
  console.log(`hello ${msg}`);
}

// let msg = debounce(callMe, 4000);
// msg("Prince");
// msg("Chauhan");

// throttle :- progamming techinque used to limit the excuation run over the time
//  to re run function over the time

function throttle(func, delay) {
  let shouldWait = false;
  return function (args) {
    if (!shouldWait) {
      func.call(args);
      shouldWait = true;
      setInterval(() => {
        shouldWait = false;
      }, delay);
    }
  };
}

function printTime() {
  console.log(Date.now());
}
let th = throttle(printTime, 2000);
setInterval(() => th(), 500);
