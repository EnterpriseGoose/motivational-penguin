const allPenguins = [0, 1, 2, 3, 4]
const colors = ["#EF4444", "#F97316", "#F59E0B", "#EAB308", "#84CC16", "#22C55E", "#10B981", "#14B8A6", "#06B6D4", "#0EA5E9", "#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#D946EF", "#EC4899", "#F43F5E"]
let penguins = [... allPenguins]
let ci = Math.floor(Math.random() * colors.length)

window.onload = () => {
  let pi = Math.floor(Math.random() * penguins.length)
  let penguinImg = document.createElement("img")
  penguinImg.setAttribute("src", "./" + penguins[pi] + ".svg")
  penguinImg.addEventListener("click", regenPenguin)
  penguinImg.width = Math.min(window.innerWidth, window.innerHeight) * .7
  document.getElementById("penguinBox").appendChild(penguinImg)
  penguins.splice(pi, 1)

  document.body.style.backgroundColor = colors[ci]
  ci += 1
  if (ci >= colors.length) ci = 0
}

function regenPenguin() {
  let pi = Math.floor(Math.random() * penguins.length)
  let penguinImg = document.getElementsByTagName("img")[0]
  penguinImg.setAttribute("src", "./" + penguins[pi] + ".svg")
  penguinImg.animate([
    {height: "95%"},
    {height: "90%"},
    {height: "95%"},
  ], {
    easing: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
    duration: 300
  })
  penguins.splice(pi, 1)
  if (penguins.length == 0) penguins = [...allPenguins]

  document.body.style.backgroundColor = colors[ci]
  ci += 1
  if (ci >= colors.length) ci = 0
  document.getElementById("nameLink").style.color = colors[Math.round((ci + colors.length / 3) % colors.length)]
  
  //let log = document.createElement("p")
  //log.textContent = (ci + colors.length / 2) + " " + (ci + colors.length / 2) % colors.length + " " + colors[(ci + colors.length / 2) % colors.length]
  //document.body.append(log)
}