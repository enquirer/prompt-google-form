"use strict";

const { Form } = require("enquirer");
const loadQuestions = require("./lib/loadQuestions");

const generateQuestion = async formId => {
  const questions = await loadQuestions(formId);
  const enqQuestions = [];
  questions.forEach(question => {
    let choices = {};
    choices.name = question.trim();
    choices.message = `${question}:`;
    enqQuestions.push(choices);
  });

  return enqQuestions;
};

class GoogleForm extends Form {
  constructor(options = {}) {
    if (!options.formId) throw new Error("Form ID is required!");
    options.choices = async () => {
      const formId = await this.resolve(options.formId, this.state);
      return generateQuestion(formId);
    };
    super(options);
  }
}

module.exports = GoogleForm;
