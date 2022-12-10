var colors = [
  '#56abfb', '#5dcfff', '#5be2ee', '#40e0c3', '#3dd1ae', '#a9e072', '#84e17e', '#73d897', '#f4d66d', '#f6c659', '#ff9f73', '#fa8888',
  '#fb7894', '#fb7fb7', '#f693e7', '#d287f8', '#9a7ef4', '#868af6'
]

export function getRandomColor() {
  let rd = parseInt(Math.random() * colors.length)
  return colors[rd]
}
