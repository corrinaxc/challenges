console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const language of programmingLanguages) {
  const liItem = document.createElement("li");
  liItem.textContent = language;
  ol.append(liItem); 
}