let itineraries = [{
  name: "Juan",
  destination: "Paris",
  start: "15-07-2025",
  end: "20-07-2025",
  notes: "Laptop"
},
{
  name: "Renjiro",
  destination: "New york",
  start: "05-09-2025",
  end: "10-08-2025",
  notes: "Manga"
},
{
  name: "Kevin",
  destination: "Bali",
  start: "10-09-2025",
  end: "18-09-2025",
  notes: "Fan"
}];

const listContainer = document.querySelector(".itinerary-list");

const searchBar = document.querySelector(".search");
const createBtn = document.querySelector(".create-btn");
const saveBtn = document.querySelector(".save-btn");

const inputName = document.querySelector(".itinerary-name");
const inputDestination = document.querySelector(".destination");
const inputStart = document.querySelector(".start-date");
const inputEnd = document.querySelector(".end-date");
const inputActivity = document.querySelector(".activity");

createBtn.addEventListener("click", () => {
  clearForm();
});

function clearForm() {
  inputName.value = "";
  inputDestination.value = "";
  inputStart.value = "";
  inputEnd.value = "";
  inputActivity.value = "";
}

saveBtn.addEventListener("click", () => {
  const data = {
    name: inputName.value.trim(),
    destination: inputDestination.value.trim(),
    start: inputStart.value,
    end: inputEnd.value,
    notes: inputActivity.value.trim(),
  };

  if (!data.name || !data.destination || !data.start || !data.end) {
    alert("Please fill all required fields.");
    return;
  }

  itineraries.push(data);
  renderList();
  clearForm();
});

function renderList() {
  listContainer.innerHTML = "";

  itineraries.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      🧳 ${item.name} - ${item.destination}<br>
      <small>${item.start} – ${item.end}</small><br>
      ${item.notes}
    `;

    card.addEventListener("click", () => loadItinerary(index));

    listContainer.appendChild(card);
  });
}

function loadItinerary(i) {
  const item = itineraries[i];

  inputName.value = item.name;
  inputDestination.value = item.destination;
  inputStart.value = item.start;
  inputEnd.value = item.end;
  inputActivity.value = item.notes;
}

searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();

  const results = itineraries.filter((i) =>
    i.name.toLowerCase().includes(term)
  );

  listContainer.innerHTML = "";

  results.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      🧳 ${item.name}<br>
      <small>${item.start} – ${item.end}</small>
    `;
    listContainer.appendChild(card);
  });
});
