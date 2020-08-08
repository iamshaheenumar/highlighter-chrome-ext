let isHighlighted = true;

const container = document.createElement("div");
const highlightEl = document.createElement("div");

container.setAttribute("class", "overlay-container-for-highlighter");
highlightEl.setAttribute("class", "mouse-path-highlighter");

container.appendChild(highlightEl);
document.body.appendChild(container);

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("keypress", handleKeypress);

function handleMouseMove(event) {
  const { clientX: x, clientY: y } = event;

  highlightEl.style.left = x + "px";
  highlightEl.style.top = y + "px";
}

function handleKeypress(event) {
  if (event.keyCode === 61) {
    highlightEl.style.height = highlightEl.offsetHeight + 20 + "px";
    highlightEl.style.width = highlightEl.offsetWidth + 20 + "px";
  } else if (event.keyCode === 45) {
    highlightEl.style.height = highlightEl.offsetHeight - 20 + "px";
    highlightEl.style.width = highlightEl.offsetWidth - 20 + "px";
  } else if (event.keyCode === 13) {
    if (isHighlighted) container.style.display = "none";
    else container.style.display = "block";

    isHighlighted = !isHighlighted;
  }
}
