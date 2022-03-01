function changeTodo(button_item) {
  button_item.classList.toggle("btn-success")
  if (button_item.classList[2] == "btn-success") {
    button_item.innerText = "Completed"
  } else {
    button_item.innerText = "Todo"
  }
}
