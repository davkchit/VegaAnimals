vegaFoxImage = document.getElementById("VegaFoxImage")
counterVegaFox = document.getElementById("counterVegaFox")
vegaFox = document.querySelector(".VegaFox")
$to = document.querySelector("#container_to_taps")
$tolvl = document.querySelector("#container_to_lvl")
$lvl = document.querySelector("#container_lvl")
$body = document.body
$photo = document.getElementById("user_photo");

function start() {
    setScore(getScore())
    setImage()
}

function setImage() {
    if (getScore() >= 100 && getScore() <= 1000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 3.png")
        document.body.style.backgroundColor = "#3F5562"
        $to.textContent = "1000 Vega"
        $lvl.textContent = "2 lvl"
        $tolvl.textContent = "До 3 уровня"
    } else if (getScore() >= 1000 && getScore() <= 10000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 2.png")
        $body.style.backgroundColor = "#293744"
        $to.textContent = "10.000 Vega"
        $lvl.textContent = "3 lvl"
        $tolvl.textContent = "До 4 уровня"
    } else if (getScore() >= 10000 && getScore() <= 20000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 5.png")
        document.body.style.backgroundColor = "#E9DADF"
        $to.textContent = "20.000 Vega"
        $lvl.textContent = "4 lvl"
        $tolvl.textContent = "До 5 уровня"
    } else if (getScore() >= 20000 && getScore() <= 50000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 7.png")
        document.body.style.backgroundColor = "#154C39"
        $to.textContent = "50.000 Vega"
        $lvl.textContent = "5 lvl"
        $tolvl.textContent = "До 6 уровня"
    } else if (getScore() >= 50000 && getScore() <= 100000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 4.png")
        document.body.style.backgroundColor = "#3A3935"
        $to.textContent = "100.000 Vega"
        $lvl.textContent = "6 lvl"
        $tolvl.textContent = "До 7 уровня"
    } else if (getScore() >= 100000 && getScore() <= 200000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 1.png")
        document.body.style.backgroundColor = "black"
        $to.textContent = "200.000 Vega"
        $lvl.textContent = "7 lvl"
        $tolvl.textContent = "До 8 уровня"
    } else if (getScore() >= 200000 && getScore() <= 500000) {
        vegaFoxImage.setAttribute("src", "imgs/Group 8.png")
        document.body.style.backgroundColor = "#0F1525"
        $to.textContent = "500.000 Vega"
        $lvl.textContent = "8 lvl"
        $tolvl.textContent = "До 9 уровня"
    } 
    }

function setScore(score) {
    localStorage.setItem("score", score)
    counterVegaFox.textContent = score
}

function getScore() {
    return Number(localStorage.getItem("score")) ?? 0
}

function addOne() {
    setScore(getScore() + 1)
    setImage()
}

vegaFoxImage.onclick = function(event) {
    addOne()
    const plusOne = document.createElement("div")
    plusOne.classList.add("plus-one")
    plusOne.textContent = "+1"
    const rect = vegaFoxImage.getBoundingClientRect();
    console.log(`rect: ${rect.left}, ${rect.top}`); // Добавлено
    console.log(`event: ${event.clientX}, ${event.clientY}`);
    plusOne.style.left = `${event.clientX}px`
    plusOne.style.top = `${event.clientY}px`
    vegaFox.parentElement.appendChild(plusOne)
    setTimeout(() => {
        plusOne.remove()
    }, 2000)
}

start()
