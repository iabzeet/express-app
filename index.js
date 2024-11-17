const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello There World Horizons Testing Checking Rechecking Rechecked!</h1>')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
