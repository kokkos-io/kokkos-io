const fs = require("fs");
const jsonxml = require("jsontoxml");
const sitemap = require("./src/data/dummySitemap.json");

// creates xml from json
const xml = jsonxml(sitemap);

// add sitemap.xml to /dist production code
fs.writeFile("./dist/sitemap.xml", xml, err => {
  if (err) console.error("could not write sitemap from generateSitemap.js");
  else
    console.log(
      "successfully wrote sitemap to ./dist/sitemap.xml through generateSitemap.js"
    );
});
