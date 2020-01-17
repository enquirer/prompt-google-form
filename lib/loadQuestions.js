const axios = require('axios');
const parse = require('./parse');

const loadQuestions = async formId => {
  const res = await axios({
    url: `https://docs.google.com/forms/d/e/${formId}/viewform`,
  });

  const questions = await parse(res.data);
  return questions;
};

module.exports = loadQuestions;
