const fixMenu = () => {
  const menu = document.querySelector(".btn-group-vertical")
  const menuButtons = document.querySelectorAll(".btn-group-vertical .btn")
  menu.classList.remove("btn-group-vertical")
  menu.classList.add("btn-toolbar")
  for(var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.add("m-1")
  }
}

const fixHeader = () => {
  const jumbotron = document.querySelector(".jumbotron")
  jumbotron.classList.add("text-right")
}

const fixCards = () => {
  const cardList = Array.from(document.querySelectorAll(".col-lg-3"))
  const row = document.querySelector('.col-lg-3').parentElement
  const natureCard = cardList[3]
  const technologyCard = cardList[1]
  cardList.splice(3, 1)
  cardList.splice(1, 1)
  cardList.unshift(natureCard)
  cardList.push(technologyCard)
  cardList.forEach((item) => row.appendChild(item))
}

const fixList = () => {
  const list = document.querySelector(".list-group")
  const newItem = document.createElement("li")
  newItem.classList.add("list-group-item")
  newItem.appendChild(document.createTextNode("Quarto item"))
  const newItemClone = newItem.cloneNode(true)
  newItemClone.innerText = "Quinto item"
  list.appendChild(newItem)
  list.appendChild(newItemClone)
}

window.onload = () => {
  const fixButton = document.createElement("button")
  fixButton.classList.add("btn", "btn-primary", "btn-lg", "mb-4")
  fixButton.innerText = "Fix it!"
  fixButton.addEventListener("click", () => {
    fixMenu()
    fixHeader()
    fixCards()
    fixList()
    fixButton.innerText = "Fixed :)"
    fixButton.disabled = true
  })
  document.querySelector('.container').prepend(fixButton)
}