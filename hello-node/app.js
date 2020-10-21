const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

var HELLO_GO_ADDR = process.env.HELLO_GO_ADDR || "http://localhost:9000";

app.use(express.json());

langs = {
  "assembly": "Assembly language was used in the Electronic Delay Storage Automatic Calculator (EDSAC). Assembly language was a type of low-level programming language that simplified the language of machine code. In other words, the specific instructions necessary to operate a computer.",
  "lisp": "List processor or LISP was invented by John McCarthy at the Massachusetts Institue of Technology (MIT). Originally purposed for artificial intelligence, LISP is one of the oldest programming languages still in use today and can be used in the place of Ruby or Python. Companies such as Acceleration, Boeing, and Genworks are still using LISP in their tech stacks.",
  "python": "Named after the British comedy troupe ‘Monty Python’, Python was developed by Guido Van Rossum. It is a general-purpose, high-level programming language created to support a variety of programming styles and be fun to use (a number of the tutorials, samples, and instructions often contain Monty Python references). Python is, to this day, one of the most popular programming languages in the world is used by companies such as Google, yahoo, and Spotify. ",
  "js": "JavaScript was created by Brendan Eich, this language is primarily used for dynamic web development, PDF documents, web browsers, and desktop widgets. Almost every major website uses JavaScript. Gmail, Adobe Photoshop, and Mozilla Firefox include some well-known examples.",
  "go": "Go was developed by Google to address issues that occur due to large software systems. Due to its simple and modern structure, Go has gained popularity among some of the largest tech companies around the world such as Google, Uber, Twitch, and Dropbox.",
}

app.post('/', (req, res) => {
  axios.post("http://hello-devops_go_1:9000", {"lang": req.body.lang}).then(() => {
    res.send({"history": langs[req.body.lang]})
  }).catch(() => {
    res.sendStatus(502)
  })
})

app.listen(port, '0.0.0.0',() => {
  console.log(`Lang history app listening at 0.0.0.0:${port}`)
})