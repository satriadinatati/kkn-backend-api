module.exports = app => {
    const router = require("express").Router();
    const listEndpoints = require("express-list-endpoints");
    const controller = require("../controllers/controller");
    const homeController = require("../controllers/home");
    const uploadController = require("../controllers/upload");
    
    router.post("/churches", controller.createChurch);
    router.post("/article", controller.createArticle);
    router.post("/faq", controller.createFaq);

    // Retrieve all Churches (filtered fields)
    router.get("/churches", controller.churchFindAll);

    // Retrieve a single Church with id
    router.get("/churches/:id", controller.churchFindOne);
    
    // Retrieve list of questions faq
    router.get("/faq", controller.faqFindAll);

    // Retrieve a single FAQ with id
    router.get("/faq/:id", controller.faqFindOne);

    // Retrieve list of articles
    router.get("/article", controller.articleFindAll);

    // Retrieve a single article with id
    router.get("/article/:id", controller.articleFindOne);

    // Retrieve list of weather
    router.get("/weather", controller.weatherFindAll);

    // Retrieve dashboard data
    router.get("/dashboard", controller.dashboardFindAll);

    // Retrieve overview data
    router.get("/overview", controller.overviewFindAll);

    // Retrieve data gempa
    router.get("/gempa", controller.gempaFindAll);

    // Retrieve data chart
    router.get("/chart", controller.chartFindAll);

    // Retrieve data total
    router.get("/total", controller.totalFindAll);

    // Retrieve data Vaccine
    router.get("/vaccine", controller.vaccineFindAll);

    // Retrieve list of covid-19
    router.get("/covid", controller.covidFindAll);

    // PUT
    router.put("/churches/:id", controller.updateChurch);
    router.put("/article/:id", controller.updateArticle);
    router.put("/faq/:id", controller.updateFaq);

    // DELETE
    router.delete("/churches/:id", controller.deleteChurch);
    router.delete("/article/:id", controller.deleteArticle);
    router.delete("/faq/:id", controller.deleteFaq);

    app.use("/api/", router);
};