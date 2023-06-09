const article = require("./1-insert-article");
const dataChart = require("./2-insert-data-chart");
const dataCovid = require("./3-insert-data-covid19");
const dataCuaca = require("./4-insert-data-cuaca");
const dataDashboard = require("./5-insert-data-dashboard");
const dataGempa = require("./6-insert-data-gempa");
const dataOverview = require("./7-insert-data-overview");
const dataTotal = require("./8-insert-data-total");
const dataVaksin = require("./9-insert-data-vaksin");
const dataFaq = require("./10-insert-faq");
const dataJogja = require("./11-insert-data-jogja");
const dataPalu = require("./12-insert-data-palu");

article.store();
dataChart.store();
dataCovid.store();
dataCuaca.store();
dataDashboard.store();
dataGempa.store();
dataOverview.store();
dataTotal.store();
dataVaksin.store();
dataFaq.store();
dataJogja.store();
dataPalu.store();

db.auth("adminkkn", "adminkkn")


db.updateUser(
    "adminkkn",
    {
      $addToSet: {
        roles: [
          { role: "readWrite", db: "peta_gereja_tangguh_bencana" },
          { role: "dbAdmin", db: "peta_gereja_tangguh_bencana" },
          { role: "readWrite", db: "admin" },
          { role: "dbAdmin", db: "admin" }
        ]
      }
    }
  )

  db.grantRolesToUser(
    "adminkkn",
    [
      { role: "readWrite", db: "peta_gereja_tangguh_bencana" },
      { role: "dbAdmin", db: "peta_gereja_tangguh_bencana" },
      { role: "readWrite", db: "admin" },
      { role: "dbAdmin", db: "admin" },
    ]
  )
  
  db.createCollection("peta_gereja_tangguh_bencana")


  db.createUser({
    user: "userkkn",
    pwd: "passkkn",
    roles: [
        { role: "readWrite", db: "admin" },
        { role: "dbAdmin", db: "admin" },
        { role: "readWrite", db: "peta_gereja_tangguh_bencana" },
        { role: "dbAdmin", db: "peta_gereja_tangguh_bencana" }
    ]
  })