let submitBtn = document.getElementById('submitBtn');
let male = document.getElementById('male');
let female = document.getElementById('female');
let bmiMessage = document.getElementById('Bmi');
let bmiResult = document.getElementById('messsageBMI');
let height = parseFloat(document.getElementById('height').value);
let weight = parseFloat(document.getElementById('weight').value);
 

function calculate(event){

    event.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    let bmi = weight / ((height / 100) * (height / 100));
    bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        bmiMessage.innerHTML = 'Please enter valid positive values for weight and height.';
        bmiResult.innerHTML = '';
        return
    }

    if(bmi < 18.5){
        bmiMessage.innerHTML = 'You are Under weight.';
    } else if(bmi <= 18.5 && bmi >= 24.9){
        bmiMessage.innerHTML = 'You are Normal weight.';
    } else if(bmi > 24.9 && bmi <= 29.5){
        bmiMessage.innerHTML = 'You are Over weight.';
    } else if(bmi >= 30){
        bmiMessage.innerHTML = 'You are Obese.';
    }
}
male.addEventListener('click', calculate);
female.addEventListener('click', calculate);
submitBtn.addEventListener('click', calculate);



