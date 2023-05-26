// This file is intentionally blank
// Use this file to add JavaScript to your project

// const maleRadButton = document.getElementById("maleRadButton");
//             const femaleRadButton = document.getElementById("femaleRadButton");
//             //const nonbinRadButton = document.getElementById("nonbinRadButton");
//                 maleRadButton.addEventListener("change", function() {
//                     if (maleRadButton.checked) {
//                         femaleRadButton.disabled = true;
//                         nonbinRadButton.disabled = true;
//                     } else {
//                         nonbinRadButton.disabled = false;
//                         femaleRadButton.disabled = false;
//                     }
//                 });
//                 femaleRadButton.addEventListener("change", function() {
//                     if (femaleRadButton.checked) {
//                         maleRadButton.disabled = true;
//                         nonbinRadButton.disabled = true;
//                     } else {
//                         nonbinRadButton.disabled = false;
//                         maleRadButton.disabled = false;
//                     }
//                 });


                // function calculateResults(){
                //   console.log("calculate...")
                //   let age = document.getElementById("age").value;
                //   let height = document.getElementById("height").value;
                //   let weight = document.getElementById("weight").value;
              
                //   //we need to have a test to ensure that no inputs are invalid
                //   // if(age == 0){
                //   //     age. = "color:red";
                //   //     // height.style = "color:red";
                //   //     // weight.stye = "color:red";
                //   // }
              
                //   //now we need to have our equations for each available option
                //       //however in order to calculate the calories needed for the various activity levels, we first need to calculate the BMRs
              
                //           //BMR for males
                //           let maleBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                //           //BMR for females
                //           let femaleBMR = 447.593 + (9.247 * weight) + (3.098 *height) - (4.330 * age);
                    
                          
              
                // }


const calculateButton = document.getElementById('btn-calc');

// calculateButton.addEventListener('click',calculate);

calculateButton.addEventListener('click', () => {
  // Code to execute when the button is clicked
  //myButton.calculateResults();
  calculate();
  displayUsersResults();
});

function calculate() {
  //console.log("calculate...");
  let yourName = document.getElementById("name").value;
  let male = document.getElementById("maleRadButton").checked;
  let female = document.getElementById("femaleRadButton").checked;
  let age = parseInt(document.getElementById("age").value);
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let exerciseOptionBMR = document.getElementById("bmr").value;
  let exerciseOptionLight = document.getElementById("lightActivity").value;

  let result = "";

  // BMR for males
  let maleBMR = 66.47 + 6.24 * weight + 12.7 * height - 6.75 * age;
  // BMR for females
  let femaleBMR = 65.51 + 4.35 * weight + 11.9 * height - 4.7 * age;

  //If user selects BMR
  if ( male && exerciseOptionBMR) {
    //console.log("Hey "+yourName+","+"\n"); //works
    result += "Your MAINTENANCE calories would be... " + maleBMR + "\n";
    result += "If you are trying to GAIN weight, then your total calories would be... " + (maleBMR + 500) + "\n";
    result += "If you are trying to LOSE weight, then your total calories would be... " + (maleBMR - 500) + "-" + (maleBMR - 250);
  } else if (female && exerciseOptionBMR) {
    result += "Your MAINTENANCE calories would be... " + femaleBMR + "\n";
    result += "If you are trying to gain weight, then your total calories would be... " + (femaleBMR + 500) + "\n";
    result += "If you are trying to lose weight, then your total calories would be... " + (femaleBMR - 500) + "-" + (femaleBMR - 250);
  }

  //If user selects lightly active
  if(male && exerciseOptionLight && !exerciseOptionBMR){
    result += "Your MAINTENANCE calories would be... " + maleBMR + "\n";
    result += "If you are trying to GAIN weight, then your total calories would be... " + (maleBMR + 6000) + "\n";
    result += "If you are trying to LOSE weight, then your total calories would be... " + (maleBMR - 425) + "-" + (maleBMR - 275);
  }else if(female && exerciseOptionLight && !exerciseOptionBMR){
    result += "Your MAINTENANCE calories would be... " + femaleBMR + "\n";
    result += "If you are trying to gain weight, then your total calories would be... " + (femaleBMR + 400) + "\n";
    result += "If you are trying to lose weight, then your total calories would be... " + (femaleBMR - 375) + "-" + (femaleBMR - 250);
  }


  

  console.log(result); //appears on console but is empty??
  // document;
  }
  


  function displayUsersResults(){
    let resultForm = document.getElementById("resultForm");
    resultForm.style.display="block";

    let resultView = calculate();

    let resultUpdateForm = document.getElementById("result-placement");
    resultUpdateForm.textContent=resultView;
    resultForm.appendChild(resultUpdateForm);
  }
  





              