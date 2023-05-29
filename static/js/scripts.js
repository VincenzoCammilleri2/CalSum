const calculateButton = document.getElementById('btn-calc');
const results = document.getElementById("result");

calculateButton.addEventListener('click', () => {
  calculate();
  displayUsersResults();
});

let result = "";

function calculate() {
  let yourName = document.getElementById("name").value;
  let male = document.getElementById("maleRadButton").checked;
  let female = document.getElementById("femaleRadButton").checked;
  let age = parseInt(document.getElementById("age").value);
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let exerciseOptionBMR = document.getElementById("bmr").value;


  // BMR for males
  let maleBMR = 66.47 + 6.24 * weight + 12.7 * height - 6.75 * age;
  maleBMR = Math.round(maleBMR);

  // BMR for females
  let femaleBMR = 65.51 + 4.35 * weight + 11.9 * height - 4.7 * age;
  femaleBMR = Math.round(femaleBMR);

  if (male && exerciseOptionBMR) {
    result += "Hey " + yourName + ",\n";
    result += "Your MAINTENANCE calories would be... " + maleBMR + "\n";
    result += "If you are trying to GAIN weight, then your total calories would be... " + (maleBMR + 500) + "\n";
    result += "If you are trying to LOSE weight, then your total calories would be... " + (maleBMR - 500) + "-" + (maleBMR - 250);
  } else if (female && exerciseOptionBMR) {
    result += "Hey " + yourName + ",\n";
    result += "Your MAINTENANCE calories would be... " + femaleBMR + "\n";
    result += "If you are trying to GAIN weight, then your total calories would be... " + (femaleBMR + 500) + "\n";
    result += "If you are trying to LOSE weight, then your total calories would be... " + (femaleBMR - 500) + "-" + (femaleBMR - 250);
  }

  results.innerHTML = result;
}

function displayUsersResults() {
  let resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = result;

}