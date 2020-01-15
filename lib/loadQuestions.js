const axios = require('axios');
const parse = require('./parse');

const loadQuestions = async formId => {
  const body = await axios({
    url: `https://docs.google.com/forms/d/e/${formId}/viewform`,
  });

  const questions = await parse(body.data);
  return questions;
}

module.exports = loadQuestions;
