/** Command-line tool to generate Markov text. */

const {MarkovMachine} = require('./markov')
const fs = require('fs')
const axios = require('axios')

if (process.argv[2] !== 'file' && process.argv[2] !== 'url'){
    console.log(`${process.argv[2]} is not a valid`)
}
 if (process.argv[2] === 'file'){
    fs.readFile(process.argv[3], 'utf8', (err, data) =>{
        if(err){
            console.error(`Cannot read file: ${path}: ${err.message}`);
            process.exit(1);
        } else {
            let result = new MarkovMachine(data)
            console.log(`generating text from file ${process.argv[3]}:`)
            console.log(result.makeText())
        }
    })
} else {
    axios
        .get(process.argv[3])
        .then(res => {
            const result = new MarkovMachine(res.data)
            console.log(`generating text from URL ${process.argv[3]}:`)
            console.log(result.makeText())
        })
        .catch(err => console.log(err.message))
}

