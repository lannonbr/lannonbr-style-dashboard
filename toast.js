// Code credit to Chris Biscardi

const { promises: fs } = require("fs");
const path = require("path");
const CSSStatsSource = require("./fetch-css-stats");

exports.sourceData = async ({ withCache, createPage }) => {
  return Promise.all([withCache("css-stats", CSSStatsSource.sourceData())]);
};

exports.prepData = async ({ cacheDir, publicDir }) => {
  // have to make sure the directory we want to write in exists
  // We can probably avoid this by offering some kind of "non-filesystem"-based
  // API for adding data to paths
  await fs.mkdir(path.resolve(publicDir, "src/pages"), { recursive: true });

  fs.copyFile(
    path.resolve(__dirname, "node_modules", "react-vis", "dist", "style.css"),
    path.join(publicDir, "react-vis.css")
  );

  // prep page data for index and post pages
  const cssStats = require(path.resolve(cacheDir, "css-stats.json"));

  await fs.writeFile(
    path.resolve(publicDir, "src/pages/index.json"),
    JSON.stringify({ cssStats })
  );
};
