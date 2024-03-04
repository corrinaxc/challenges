console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// Lower Case

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});

console.log(lowerCaseAnswers);

// Questions & Answers Together 

const questionsAndAnswersTogether = cards.map((card) => {
  let question = card.question;
  let answer = card.answer;
  return (question + " " + answer);
}); 

console.log(questionsAndAnswersTogether);

// Question and Answer (Array)

const questionAndAnswer = cards.map((card) => {
  return {
    question: card.question, 
    answer: card.answer}
})

console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };