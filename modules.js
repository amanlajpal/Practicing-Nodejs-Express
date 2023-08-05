const path = require("path")

console.log("__dirname -->",__dirname)
console.log("path.basename(__dirname) -->",path.basename(__dirname))
console.log(`path.resolve("mainFolder","subFolder","file.txt") -->`,path.resolve("mainFolder","subFolder","file.txt"))
console.log(`path.join("\\mainFolder\\","subFolder","file.txt") -->`,path.join("\\mainFolder\\","subFolder","file.txt"))


const { readFileSync, watchFile, writeFileSync } = require('fs')


const dataOfFirstFile = readFileSync('./content/first.txt', 'utf-8')
const dataOfSecondFile = readFileSync('./content/second.txt', 'utf-8')

watchFile('./content/first.txt',{persistent: true, interval: 1000}, ()=>{
    console.log("--->",readFileSync('./content/first.txt', 'utf-8'))
})

setInterval(()=>{
    writeFileSync('./content/first.txt',"This is edited first.txt file")
},2000)

console.log(dataOfFirstFile)
console.log(dataOfSecondFile)