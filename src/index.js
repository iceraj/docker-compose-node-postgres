import express from "express";
import Sequelize from 'sequelize';
// const Sequelize = require('sequelize');

const app = express();
console.info("DBURL: %s", process.env['DBURL'])
const asyncHandler = require('express-async-handler')

const sequelize = new Sequelize(process.env['DBURL']);

sequelize
  .authenticate()
  .then(() => {
    console.info('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




app.get("/",  asyncHandler(async (req, res,next) =>  {
  const result = await sequelize.query("SELECT now() as now", { type: sequelize.QueryTypes.SELECT})
  res.send(`result=<pre>${JSON.stringify(result)}</pre>`);
}));

const server = app.listen(process.env.PORT, () => {
  console.log("Started at http://localhost:%d\n", server.address().port);
});
