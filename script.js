console.log("bal");

const container = document.getElementById("cont")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#DDDDDD"
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
                square.style.backgroundColor = "#DDDDDD"
            });
        }
    } else {
        alert("Please enter a number below 100")
    }
    // then create a new grid with the new size setting
// 960 x 960 = total area, then 
})

