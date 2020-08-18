import TransactionQueue from "./transaction-queue";
import fs from "fs";
import path from "path";
import pg from "pg";
let config = {
  host: "192.168.10.243",
  port: "5432",
  user: "postgres",
  password: "sinsiway",
  database: "postgres",
  max: "20",
  connectionTimtoutMillis: "30000",
  idleTimeoutMillis: "1000",
};

async function main() {
  let tm = new TransactionQueue();
  let pool = new pg.Pool(config);
  let data = await pool.query("select * from demo.bulk_data").then((res) => {
    return res.rows;
  });

  console.time("perf : ");
  for (let i = 0; i < 500000; i++) {
    let dummy = await tm.performanceTestFunction(data);
  }
  console.timeEnd("perf : ");
}

main();
