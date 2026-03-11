const express = require("express");
const router = express.Router();
const c = require("../controllers/flightController");

router.post("/flights", c.createFlight);
router.get("/flights", c.getFlights);
router.get("/flights/search", c.searchFlights);
router.get("/flights/:id", c.getFlightById);
router.put("/flights/:id", c.updateFlight);
router.delete("/flights/:id", c.deleteFlight);

module.exports = router;