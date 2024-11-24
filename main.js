const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayErr = document.getElementById("dayErr");
const monthErr = document.getElementById("monthErr");
const yearErr = document.getElementById("yearErr");

const calculateBtn = document.querySelector(".calculate");

calculateBtn.addEventListener("click", () => {
  //   calculate age
});

// Validate fields

dayInput.addEventListener("input", () => {
  if (!dayInput.value) {
    dayErr.textContent = "This field is required";
    dayInput.classList.remove("valid");
    dayInput.classList.add("invalid");
  } else if (
    Number(dayInput.value) < Number(dayInput.min) ||
    Number(dayInput.value) > Number(dayInput.max)
  ) {
    dayErr.textContent = "Must be a valid day";
    dayInput.classList.remove("valid");
    dayInput.classList.add("invalid");
  } else {
    dayErr.textContent = "";
    dayInput.classList.remove("invalid");
    dayInput.classList.add("valid");
  }
});

monthInput.addEventListener("input", () => {
  if (!monthInput.value) {
    monthErr.textContent = "This field is required";
    monthInput.classList.remove("valid");
    monthInput.classList.add("invalid");
  } else if (
    Number(monthInput.value) < Number(monthInput.min) ||
    Number(monthInput.value) > Number(monthInput.max)
  ) {
    monthErr.textContent = "Must be a valid month";
    monthInput.classList.remove("valid");
    monthInput.classList.add("invalid");
  } else {
    monthErr.textContent = "";
    monthInput.classList.remove("invalid");
    monthInput.classList.add("valid");
  }
});

yearInput.addEventListener("input", () => {
  if (!yearInput.value) {
    yearErr.textContent = "This field is required";
    yearInput.classList.remove("valid");
    yearInput.classList.add("invalid");
  } else if (Number(yearInput.value) > new Date().getFullYear()) {
    yearErr.textContent = "Must be a valid year";
    yearInput.classList.remove("valid");
    yearInput.classList.add("invalid");
  } else {
    yearErr.textContent = "";
    yearInput.classList.remove("invalid");
    yearInput.classList.add("valid");
  }
});
