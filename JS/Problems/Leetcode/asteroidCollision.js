var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let index = 0; index < asteroids.length; index++) {
    let current = asteroids[index];
    let isCollide = false;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
      let top = stack[stack.length - 1];

      if (Math.abs(current) > top) {
        stack.pop();
        continue;
      } else if (Math.abs(current) == top) {
        stack.pop();
        isCollide = true;
        break;
      } else {
        isCollide = true;
        break;
      }
    }
    if (!isCollide) {
      stack.push(current);
    }
  }
  return stack;
};

let asteroids = [10, 2, -5];

console.log(asteroidCollision(asteroids));
