// Elementos
const colors = ["blue" , "orange", "rgba(125, 183, 003)", "#a2b7f5"]
const btn = document.querySelector("#btn")
const color = document.querySelector(".color")
// Evento
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
// Função
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}