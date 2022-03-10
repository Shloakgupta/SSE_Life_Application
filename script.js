function changeTodo(button_item) {
  button_item.classList.toggle("btn-success")
  if (button_item.classList[2] == "btn-success") {
    button_item.innerText = "Completed"
  } else {
    button_item.innerText = "Todo"
  }
  let buttons = document.getElementsByClassName("btn")

  if (buttons[1].classList[2] == "btn-success" && buttons[2].classList[2] == "btn-success" && buttons[3].classList[2] == "btn-success" && buttons[4].classList[2] == "btn-success" && buttons[5].classList[2] == "btn-success" && buttons[6].classList[2] == "btn-success" && buttons[7].classList[2] == "btn-success") {

    let text = document.createElement("h1")
    let div = document.createElement("div")
    let container = document.getElementById("container")
    text.innerText = "Congratulations! You Finished All Your Tasks"
    div.setAttribute('id', "newDiv")
    div.setAttribute('class', "newDiv")
    div.appendChild(text)
    container.appendChild(div)

  } else {
    let deleteThisItem = document.getElementById("newDiv")
    deleteThisItem.remove()
  }
}

function reset() {
  let newDiv = document.getElementById("newDiv")
  newDiv.remove()
  let buttons = document.getElementsByTagName('button')
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList[2] == 'btn-success') {
      buttons[i].classList.remove('btn-success')
      buttons[i].innerText = "Todo"
    }
  }
}