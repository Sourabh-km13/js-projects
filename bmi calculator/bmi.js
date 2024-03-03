
const form = document.querySelector('form');

const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi>25){
      results.innerHTML = `<span>${bmi},${"overweight"}</span>`;
    }
    else if(bmi<25 & bmi>18
   ){
      results.innerHTML = `<span>${bmi},${"normal"}</span>`;
    }
    else {
         results.innerHTML = `<span>${bmi},${"underweight"}</span>`;
       
    
  }
}

});

