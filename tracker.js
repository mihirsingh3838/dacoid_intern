const ctx = document.getElementById("workoutChart").getContext("2d");

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const data = {
  labels,
  datasets: [
    {
      label: "Workout Duration",
      data: [30, 45, 20, 60, 15],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const workoutChart = new Chart(ctx, config);


const sampleData = [
    { text: "Full body workout", image: "full.png" },
    { text: "Upper body workout", image: "upper.png" },
  ];

  const cardsContainer = document.getElementById("cardsContainer");

  // Function to create a card
  function createCard(task) {
    const card = document.createElement("div");
    card.className =
      "flex flex-col bg-gray-200 p-4 rounded-lg shadow-md";

    // Image
    const image = document.createElement("img");
    image.src = `assets/${task.image}`;
    image.className = "w-12 h-12 rounded-t-lg";
    card.appendChild(image);

    // Title
    const title = document.createElement("span");
    title.textContent = task.text;
    title.className = "text-lg font-semibold mt-2";
    card.appendChild(title);

    // Toggle switch
    const toggleSwitch = document.createElement("div");
    toggleSwitch.className = "self-end mt-2 relative";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "hidden";
    toggleSwitch.appendChild(input);

    const slider = document.createElement("div");
    slider.className = "toggle-switch h-6 w-12 bg-gray-300 rounded-full shadow-inner";
    toggleSwitch.appendChild(slider);

    // Add event listener to toggle switch
    input.addEventListener("change", function() {
      if (input.checked) {
        slider.classList.remove("bg-gray-300");
        slider.classList.add("bg-blue-500");
      } else {
        slider.classList.remove("bg-blue-500");
        slider.classList.add("bg-gray-300");
      }
    });

    card.appendChild(toggleSwitch);

    cardsContainer.appendChild(card);
  }

  // Loop through sample data and create cards
  sampleData.forEach((task) => {
    createCard(task);
  });