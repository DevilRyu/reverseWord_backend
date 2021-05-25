const { response } = require('express')

const reverseWord = async (req, res = response) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({
      error: 'no text'
    })
  }
  let newText = ''
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i]
  }
  return res.status(200).json({
    text: newText,
    palindrome: (newText === text)
  })
}

module.exports = {
  reverseWord
}
