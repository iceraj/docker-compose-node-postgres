import express from "express";
import PgAsync, {SQL} from 'pg-async';

const app = express();
console.info("DBURL: %s", process.env['DBURL'])
const pgAsync = new PgAsync({connectionString: process.env['DBURL']});
const asyncHandler = require('express-async-handler')

app.get("/",  asyncHandler(async (req, res,next) =>  {
  const result = await pgAsync.query(SQL`select now() as time`);
  res.send(`result=<pre>${JSON.stringify(result)}</pre>`);
}));

const server = app.listen(process.env.PORT, () => {
  console.log("Started at http://localhost:%d\n", server.address().port);
});
