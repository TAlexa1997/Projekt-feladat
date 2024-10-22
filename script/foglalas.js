const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const availabilityData = {
  2024: {
    10: [
      2, 2, 1, 1, 0, 0, 2, 1, 1, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 0, 1, 0,
      2, 2, 0, 1, 1, 0,
    ],
  },
};

const months = [
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December",
];

function showCalendar(month, year) {
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarBody = document.getElementById("calendarBody");
  calendarBody.innerHTML = "";

  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.innerHTML = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        const availability =
          availabilityData[year] &&
          availabilityData[year][month + 1] &&
          availabilityData[year][month + 1][date - 1] !== undefined
            ? availabilityData[year][month + 1][date - 1]
            : 0;
        cell.innerHTML = date;
        if (availability === 2) {
          cell.className = "available-2";
          cell.innerHTML += "<br>2 szabad";
        } else if (availability === 1) {
          cell.className = "available-1";
          cell.innerHTML += "<br>1 szabad";
        } else {
          cell.className = "unavailable";
          cell.innerHTML += "<br>Foglalt";
        }

        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function populateSelectors() {
  const monthSelector = document.getElementById("monthSelector");
  const yearSelector = document.getElementById("yearSelector");

  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = month;
    if (index === currentMonth) {
      option.selected = true;
    }
    monthSelector.appendChild(option);
  });

  for (let i = 2023; i <= 2040; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    if (i === currentYear) {
      option.selected = true;
    }
    yearSelector.appendChild(option);
  }
}

function changeMonthYear() {
  currentMonth = parseInt(document.getElementById("monthSelector").value);
  currentYear = parseInt(document.getElementById("yearSelector").value);
  showCalendar(currentMonth, currentYear);
}

document.getElementById("prevYear").addEventListener("click", () => {
  currentYear--;
  changeMonthYear();
});

document.getElementById("nextYear").addEventListener("click", () => {
  currentYear++;
  changeMonthYear();
});

document
  .getElementById("monthSelector")
  .addEventListener("change", changeMonthYear);
document
  .getElementById("yearSelector")
  .addEventListener("change", changeMonthYear);

populateSelectors();
showCalendar(currentMonth, currentYear);
