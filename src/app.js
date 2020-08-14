import pg from "pg";
import fs from "fs";
import path from "path";
import arrayUtility from "./modules/array-utility";

let data = new Array();
data = JSON.parse(fs.readFileSync(path.join(__dirname, "../", "data", "data.json")));
console.log(`loaded data.. ${data.length} rows`);

async function main() {
  try {
    let sortData = await arrayUtility.sort(data, "first_name", true);
    let searchData = await arrayUtility.search(data, "Do", { isCaseSensitive: true, property: "last_name" });
    console.log(sortData);
    console.log(searchData);
  } catch (e) {
    throw e;
  }
}

main();
