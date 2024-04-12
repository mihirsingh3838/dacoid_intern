const sampleData = [
  { text: "Weight Loss" },
  { text: "Muscle Gain" },
  { text: "Flexibility and Mobility" },
  { text: "General Fitness" },
  { text: "Event - specific training" },
  { text: "Mindfulness and Mental Health" },
];

const cardsContainer = document.getElementById("cardsContainer");

// Function to create a card
function createCard(task) {
  const card = document.createElement("div");
  card.className =
    "flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md m-3";

  const text = document.createElement("span");
  text.textContent = task.text;
  text.className = "text-lg";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "w-5 h-5";

  card.appendChild(text);
  card.appendChild(checkbox);

  cardsContainer.appendChild(card);
}

// Loop through sample data and create cards
sampleData.forEach((task) => {
  createCard(task);
});


document.getElementById("redirect").addEventListener("click", function() {
  // Redirect to the new page
  window.location.href = "tracker.html";
});