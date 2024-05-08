const { directory, manifest, manifestOut } = require("./modules/config");
const processInlineScript = require("./modules/inlineScript");
const moveFile = require("./modules/moveFiles");
const renameFile = require("./modules/renameFiles");

const main = async () => {
  await moveFile(manifestOut, manifest);
  await renameFile(directory);
  await processInlineScript(directory);
};

main();
