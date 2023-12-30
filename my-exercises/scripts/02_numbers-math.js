// Lesson 2 Exercises - Numbers and Math

// How to round a number 
//Math.round(2.2)
//((2095 + 799) * 0.10) / 100
//Math.round((2095 + 799) * 0.10) / 100
//console.log(Math.round((2095 + 799) * 0.10))

// 2a
let output2a = 10 + (8 * 3) + 5
console.log("Question 2a: " + output2a.toString())

// 2b
let output2b = output2a / 3
console.log("Question 2b: " + output2b.toString())

// 2c
let output2c = 18.50 + (2 * 7.50)
console.log("Question 2c: " + output2c.toString())

// 2d + 2e
let output2d = output2c * 0.10
console.log("Question 2d: " + output2d.toString())
let output2e = output2c * 0.20
console.log("Question 2e: " + output2e.toString())

// 2f + 2g + 2h + 2i
let output2f = 2095 + 799 + 1899
console.log("Question 2f: " + output2f.toString())
let output2g = output2f + 499
console.log("Question 2g: " + output2g.toString())
let output2h = Math.round(output2g * 0.10)
console.log("Question 2h: " + output2h.toString())
let output2i = (output2g + output2h) / 100
console.log("Question 2i: " + output2i.toString())

// 2j + 2k - floor rounding
let output2j = Math.floor(2.8)
console.log("Question 2j: " + output2j.toString())
let output2k = Math.ceil(2.8)
console.log("Question 2k: " + output2k.toString())

// Challenge Exercises
// 2l + 2m + 2n
function c_to_f(i) {
    // Function to convert Celcius to Fahrenheit
    var fah = (i * (9/5)) + 32
    return fah
}
function f_to_c(i) {
    // Function to convert Fahrenheit to Celcius
    var cel = (i - 32) * (5/9)
    return cel
}
let output2l = c_to_f(i = 25)
console.log("Question 2l: " + output2l.toString())
let output2m = f_to_c(i = 86)
console.log("Question 2m: " + output2m.toString())
let output2n = c_to_f(i = -5)
console.log("Question 2n: " + output2n.toString())