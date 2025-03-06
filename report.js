const newman = require("newman");
//require("dotenv").config();

newman.run(
  {
    //collection: `https://api.postman.com/collections/38165210-ab0a53c8-d529-4b73-bfdf-077bb1d2f9b4?access_key=${process.env.secretKey}`,
    collection: require('./collection/collection.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to newman/ in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
