const API = "http://localhost:8000/api/flights";

const form = document.getElementById("flightForm");
const table = document.getElementById("flightTable");

// Add Flight
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    flightNumber: flightNumber.value,
    airline: airline.value,
    source: source.value,
    destination: destination.value,
    departureTime: departureTime.value,
    arrivalTime: arrivalTime.value,
    price: price.value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Flight Added ✈️");
  form.reset();
  loadFlights();
});

// Load Flights
async function loadFlights() {
  const res = await fetch(API);
  const flights = await res.json();

  table.innerHTML = "";

  flights.forEach(f => {
    const row = `
      <tr>
        <td>${f.flightNumber}</td>
        <td>${f.airline}</td>
        <td>${f.source} ➜ ${f.destination}</td>
        <td>${new Date(f.departureTime).toLocaleString()}</td>
        <td>₹${f.price}</td>
        <td>${f.status}</td>
        <td>
          <button onclick="deleteFlight('${f._id}')">❌</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

// Delete Flight
async function deleteFlight(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadFlights();
}

// Auto load
loadFlights();
