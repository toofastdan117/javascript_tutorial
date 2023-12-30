// Lesson 3 Exercises - Strings

// 3a
let out3a = 'My name is: '

// 3b
let out3b = 'Daniel'

// 3c
let out3c = out3a + out3b

// 3d
let out3d = "Total cost: $" + (5 + 1)

// 3e
let out3e = `Total cost: $${(5 + 1)}`

// 3f
//alert(out3e);

// 3g
let out3g = "Total cost: $" + ((599 + 295) / 100)

// 3h
let out3h = `Total cost: $${(599 + 295) / 100}`

// 3i
//alert(out3h);

// 3j
let out3j = `Total cost: $${(599 + 295) / 100}\nThank you, come again!`

// 3k
let out3k1 = `Items (${2 + 2}): $${(799 * 2 + 2095 * 2) / 100}`
let out3k2 = `Shipping & handling: $${(499 * 2) / 100}`
var total = ((799 * 2 + 2095 * 2) / 100) + ((499 * 2) / 100)
let out3k3 = `Total before tax: $${total}`
let out3k4 = `Estimated tax (10%): $${(Math.round((total * 100) * 0.10)) / 100}`

// Outputs
console.log(`3a: ${out3a}
3b: ${out3b}
3c: ${out3c}
3d: ${out3d}
3e: ${out3e}
3g: ${out3g}
3h: ${out3h}
3j: ${out3j}
3k:\n${out3k1}\n${out3k2}\n${out3k3}\n${out3k4}
`)