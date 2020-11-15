const fetch = require("node-fetch");
const { promisify } = require("util");
const fs = require("fs").promises;
const rimraf = promisify(require("rimraf"));
const { generateSource } = require("oazapfts/lib/codegen");
const prettier = require("prettier");

const OPEN_API_URL =
  "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json";
const DEST_PATH = "src";
const DEST_FILE = "stripe.api.ts";

(async () => {
  try {
    await rimraf(DEST_PATH);
    const openApiDocSource = await fetch(OPEN_API_URL).then((response) =>
      response.json()
    );
    const generatedSource = await generateSource(openApiDocSource);
    const prettySource = prettier.format(generatedSource, { parser: "babel-ts" });
    await fs.mkdir(DEST_PATH)
    await fs.writeFile(`${DEST_PATH}/${DEST_FILE}`, prettySource);
  } catch (e) {
    console.log(e);
  }
})();
