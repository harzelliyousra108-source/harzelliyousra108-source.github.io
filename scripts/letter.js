const lines = document.querySelectorAll('.line');

lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.transition = "opacity 1.2s ease";
    line.style.opacity = 1;
  }, index * 800);
});
