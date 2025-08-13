var predictPartyVictory = function (senate) {
  let radiant = [];
  let dire = [];
  let ln = senate.length;
  for (let index = 0; index < ln; index++) {
    if (senate[index] == "R") radiant.push(index);
    else dire.push(index);
  }
  while (radiant.length && dire.length) {
    let r = radiant.shift();
    let d = dire.shift();
    if (r < d) radiant.push(r + ln);
    else dire.push(d + ln);
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};
let senate = "RDD";

console.log(predictPartyVictory(senate));
