const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 50 + 50; // Random size between 50px and 100px
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Random color
    const hue = Math.random() * 360;
    spanEl.style.filter = `hue-rotate(${hue}deg)`;

    // Append the span to the body
    bodyEl.appendChild(spanEl);

    // Remove the span after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
