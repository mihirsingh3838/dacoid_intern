// month and year selector
const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
const startYear = 1900; // Change the starting year if needed
for (let year = currentYear; year >= startYear; year--) {
  const option = document.createElement("option");
  option.text = year;
  option.value = year;
  yearSelect.add(option);
}

// Generate hourly slots
const calendar = document.getElementById("calendar");

for (let hour = 0; hour < 24; hour++) {
  const slot = document.createElement("div");
  slot.classList.add(
    "hourly-slot",
    "flex",
    "items-center",
    "px-4",
    "bg-white"
  );

  const time = hour.toString().padStart(2, "0") + ":00";
  slot.innerHTML = `
<div class="flex-1">${time}</div>
<div class="flex-1">
  <input type="text" class="w-full border rounded py-1 px-2 focus:outline-none focus:border-blue-500" placeholder="Task">
</div>
`;

  calendar.appendChild(slot);
}