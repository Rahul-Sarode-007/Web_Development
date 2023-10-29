let t = document.body.firstElementChild.firstElementChild

// Will gives all the table rows
console.log(t.rows)

// Will gives us table caption
console.log(t.caption)

// Will gives us table Head
console.log(t.tHead)

console.log(t.tBodies)

// will give the row index
console.log(t.rows[1].rowIndex)


// will give us second row third cell
console.log(t.rows[1].cells[2])

// will give us cell index
console.log(t.rows[1].cells[2].cellIndex)

console.log(t.rows[3].sectionRowIndex)

