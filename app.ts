import { Application } from "https://deno.land/x/oak/mod.ts";
import { readCSV } from "https://deno.land/x/csv/mod.ts";
import router from "./routing.ts";

const app = new Application();

app.use(router.routes());

console.log(`Listening on port 3000`);

// csv data container 
const salesData = [];

// read the csv
const f = await Deno.open("./sales.csv");

for await (const row of readCSV(f)) {
  for await (const cell of row) {
    salesData.push(cell);
  }
}
// set the data in the environment
Deno.env.set("SALESDATA", JSON.stringify(salesData));
f.close();

await app.listen({ port: 3000 });
