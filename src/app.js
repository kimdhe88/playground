import pg from "pg";
import fs from "fs";
import path from "path";
import arrayUtility from "./modules/array-utility";
import SelectionAreaManager from "./modules/selection-area-manager";

let data = new Array();
data = JSON.parse(fs.readFileSync(path.join(__dirname, "../", "data", "data.json")));
console.log(`loaded data.. ${data.length} rows`);

async function arrayUtilityTest() {
  try {
    let sortData = await arrayUtility.sort(data, "first_name", true);
    let searchData = await arrayUtility.search(data, "Do", { isCaseSensitive: true, property: "last_name" });
    console.log(sortData);
    console.log(searchData);
  } catch (e) {
    throw e;
  }
}

async function SelectionAreaManagerTest() {
  try {
    let sam = new SelectionAreaManager();

    sam.start(0, 0);
    sam.tracking(1, 1);
    sam.tracking(1, 2);
    sam.end();

    sam.start(4, 4);
    sam.tracking(4, 6);

    sam.drawAreas();
    console.log(sam.isSelected(4, 5));
    console.log("clear");
    sam.clear();
  } catch (e) {
    throw e;
  }
}

SelectionAreaManagerTest();
