import pg from "pg";
import fs from "fs";
import path from "path";

let data = new Array();
data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../", "data", "data.json"))
);
console.log(`loaded data.. ${data.length} rows`);

async function main() {
  try {
    let searchString = "Lacy";
    let orderColumn = "first_name";
    await sort(data, orderColumn, false);
    // let str1 = "abc";
    // let str2 = "def";

    // console.log(str1 > str2);
  } catch (e) {
    throw e;
  }
}

async function sort(data = Array, name = String, isAscending = true) {
  let rtn;
  console.log(name);
  if (isAscending) {
    rtn = data.sort((a, b) => {
      console.log("test");
      console.log(a);
      return a[name] < b[name] ? -1 : a[name], b[name] ? 1 : 0;
    });
  } else {
    rtn = data.sort((a, b) => {
      return a[name] < b[name] ? 1 : a[name], b[name] ? -1 : 0;
    });
  }
  //   console.log(rtn);
}

async function search(searchText) {
  let rtn = data.filter((obj) => {
    console.log(Object.values(obj));
  });

  console.log(`rtn : `);
  //   console.log(rtn);
}

main();
