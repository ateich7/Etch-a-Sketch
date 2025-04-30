console.log("bal");

const container = document.getElementById("cont")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
    });
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let size = prompt("Enter size:")

    if (size && size < 100 && size > 0) {
        container.innerHTML = "";
        let measurment = (960 / size);
        for (let i = 0; i < (size*size); i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = measurment + "px";
            square.style.width = measurment + "px";
            container.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomColor();
            });
        }
    } else {
        alert("Please enter a number below 100")
    }
})

function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0 ; i  < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
