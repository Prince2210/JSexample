function fetchNewData(sucess = true) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (sucess) {
        reslove("RESOLVED");
      } else {
        reject("REJECT");
      }
    }, 2000);
  });
}

fetchNewData(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

async function fetchNewData1() {
  try {
    let data = await fetchNewData(false);
    console.log(data); // Output: ✅ RESOLVED
  } catch (err) {
    console.error("Caught with async/await:", err);
  }
}
fetchNewData1();
