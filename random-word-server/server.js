const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// CORS for react app, assuming ports 3000 - 3009
app.use(cors({
  origin: /localhost:300[0-9]/,
  credentials: true
}))

// read words from json file
const fileContents = fs.readFileSync('./five-letter-words.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
  // select a random word
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
  console.log('new secret word is ', word) 
	
  // return it as the response
  res.send(word)
})

app.listen(3030, () => console.log('Word server listening on port 3030!'))

module.exports = app;