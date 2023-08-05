const fs = require('fs')

for (let i = 0; i < 100000; i++) {
    content = `I am Big File, Big! Big! ${i}\n`;
    fs.writeFileSync('./content/bigFile.txt', content, { flag: 'a' })
}