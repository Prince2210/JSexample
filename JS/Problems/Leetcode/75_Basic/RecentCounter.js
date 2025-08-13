var RecentCounter = function () {
  this.requests = [];
};
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);

  while (this.requests[0] < t - 3000) {
    this.requests.shift();
  }
  return this.requests.length;
};

var obj = new RecentCounter();

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // 1
console.log(recentCounter.ping(100)); // 2
console.log(recentCounter.ping(3001)); // 3
console.log(recentCounter.ping(6000));
