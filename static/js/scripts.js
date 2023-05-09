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


                function calculateResults(){
                  console.log("calculate...")
                  let age = document.getElementById("age").value;
                  let height = document.getElementById("height").value;
                  let weight = document.getElementById("weight").value;
              
                  //we need to have a test to ensure that no inputs are invalid
                  // if(age == 0){
                  //     age. = "color:red";
                  //     // height.style = "color:red";
                  //     // weight.stye = "color:red";
                  // }
              
                  //now we need to have our equations for each available option
                      //however in order to calculate the calories needed for the various activity levels, we first need to calculate the BMRs
              
                          //BMR for males
                          let maleBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                          //BMR for females
                          let femaleBMR = 447.593 + (9.247 * weight) + (3.098 *height) - (4.330 * age);
                    
                          
              
                }

// const myButton = document.getElementById('btn');

// myButton.addEventListener('clicked', () => {
//   // Code to execute when the button is clicked
//   //myButton.calculateResults();
//   calculateResults();
// });

