function changeTodo(button_item) {
  button_item.classList.toggle("btn-success")
  if (button_item.classList[2] == "btn-success") {
    button_item.innerText = "Completed"
  } else {
    button_item.innerText = "Todo"
  }
}

function reset() {
  let buttons = document.getElementsByTagName('button')
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList[2] == 'btn-success') {
      buttons[i].classList.remove('btn-success')
      buttons[i].innerText = "Todo"
    }
  }
}