const redBtn = document.getElementById('red')
const blackBtn = document.getElementById('black')
const greenBtn = document.getElementById('green')
const goldBtn = document.getElementById('gold')


redBtn.onclick = () => {
  document.body.style.backgroundColor = 'red'
}
blackBtn.onclick = () => {
  document.body.style.backgroundColor = 'black'
}
greenBtn.onclick = () => {
  document.body.style.backgroundColor = 'green'
}
goldBtn.onclick = () => {
  document.body.style.backgroundColor = 'gold'
}