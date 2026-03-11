const Flight = require("../models/Flight");

// Create Flight
exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Flights
exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Flight by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Not found" });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Flight
exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Flight
exports.deleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: "Flight deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search Flights
exports.searchFlights = async (req, res) => {
  try {
    const { source, destination } = req.query;
    let query = {};
    if (source) query.source = source;
    if (destination) query.destination = destination;

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};