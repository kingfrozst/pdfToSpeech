const express = require('express');
const googleTextToSpeech = require('gtts');
const fs = require('fs');
const pdf = require('pdf-parse');


//Book path, easy
book = "Here you shall put the PDF path"
//Here you shall put your language abbreviation like "en" in case of english or "es" if spanish
language = "en"


let pdfFile = fs.readFileSync(book)

pdf(pdfFile).then((data)=>{
    var text = data.text;
    console.log(text)
    var gttsSpeech = new googleTextToSpeech(text, language);

gttsSpeech.save('textToSpeech.mp3',  (err, result) => {
  if(err) throw err;
});
})


