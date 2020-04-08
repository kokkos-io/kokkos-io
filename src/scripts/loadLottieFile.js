const fs = require("fs");

//module.js
module.exports = function(
  src = "https://assets9.lottiefiles.com/datafiles/cb81834f3b75c3d2aba9d8a58ad1f408/AE_JSON/loader1.json"
) {
  const json = fetch(src)
    .then(res => {
      fs.writeFile("../data/lottie", res, err => {
        if (err) console.error("could not write lottie from server");
        else
          console.log(
            "successfully wrote lottie to ./dist/lottie.xml from server"
          );
      });
    })
    .catch(err => {
      console.error(
        "could not fetch https://assets9.lottiefiles.com/datafiles/cb81834f3b75c3d2aba9d8a58ad1f408/AE_JSON/loader1.json",
        err
      );
    });
};
