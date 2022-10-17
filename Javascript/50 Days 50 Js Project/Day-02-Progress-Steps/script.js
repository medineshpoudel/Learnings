const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const update = () => {
  circles.forEach((circle, idx) => {
    idx < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  currentActive == 1
    ? (prev.disabled = true)
    : currentActive === circles.length
    ? (next.disabled = true)
    : ((prev.disabled = false), (next.disabled = false));
};

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
