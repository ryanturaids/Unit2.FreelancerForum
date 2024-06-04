// ----ARRAYS AND VARIABLES
// initial arrays
const freelancers = [
  {name: 'Alice', price: 30, occupation: 'Writer'},
  {name: 'Bob', price: 50, occupation: 'Teacher'},
  {name: 'Carol', price: 70, occupation: 'Programmer'}
];
const avgArray = freelancers.map(em => em.price);
// random options
const nameOptions = [
  'John','Jane','Mike','Sarah','Tom','Emily','David','Anna','Chris','Kate','Jack','Laura','James','Emma','Mark','Liam','Noah','Philip','Oliver','William','Mary','Frederick','Elijah','Jennifer','Lucas','Henry','Susan','Benjamin','Elizabeth','Daniel'
];
const occupationOptions = [
  'Writer','Teacher','Programmer','Web Developer','Photographer','Videographer','Translator','Analyst','Marketer','Illustrator','Proofreader','Accountant','Recruiter','Virtual Assistant','Bookkeeper','Graphic Designer','Copywriter','Social Media Specialist','Video Editor','Project Manager','Community Manager','Marketer','Communications Specialist','Editor','Technical Writer','PR Specialist','HR Advisor','Financial Consultant','Social Media Manager','Secret Shopper'
];
// set maximum number of freelancers to appear on page
const maxFreelancers = 15;
// ----WEBPAGE
// page initalization
render();
// time interval
let counter = 0;
const addFreelancerInterval = setInterval(() => {
  addFreelancer();
  render();
  counter++;
  if (counter >= (maxFreelancers - 3)) {
    clearInterval(addFreelancerInterval);
  }
}, 2500);
// ----FUNCTIONS
// render onto page
function render() {
  const avgCounter = document.querySelector('#average-counter');
  avgCounter.textContent = updateAvg(avgArray);
  addToList('#names', 'name');
  addToList('#occupations', 'occupation');
  addToList('#starting-prices','price');
};
// prepare specific unordered list for render
function addToList(listId, text) {
  const list = document.querySelector(listId);
  const listElements = freelancers.map((freelancer) => {
    const element = document.createElement('li');
    text === 'price' ? element.textContent = `$${freelancer[text]}` : element.textContent = freelancer[text];
    return element;
  });
  list.replaceChildren(...listElements);
};
// add a randomly-generated freelancer to arrays
function addFreelancer() {
  const name = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  const occupation = occupationOptions[Math.floor(Math.random() * occupationOptions.length)];
  const price = Math.floor((Math.random() * 100) + 10);
  freelancers.push({name: name, price: price, occupation: occupation});
  avgArray.push(price);
};
// calculate average
function calcAvg(arr) {
  return (arr.reduce((acc,cur) => acc + cur, 0)) / arr.length;
};
// update the average text
function updateAvg(arr) {
  return `The average starting price is $${Math.round(calcAvg(arr)*100)/100}`;
};