document.getElementById("bmiform").addEventListener('submit',function(e){
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightfeet = parseInt(document.getElementById("height-feet").value);
    const heightinches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if(gender && age && heightfeet && heightinches && weight){
        const height = ((heightfeet*12) +heightinches)*0.0254;
        const bmi = weight/(height*height);
        const resultEl = document.getElementById("result");

        let category = ''
        if(bmi<18.5){
            category = 'Underweight';
        }
        else if(bmi>=18.5 && bmi<= 24.9){
            category = 'Normal weight';
        }else if(bmi>=25 && bmi<=29.9){
            category = 'Over weight';
        }
        else{
            category = 'Obesity';
        }

        let resultmessage = 'Your BMI: '+bmi.toFixed(2) + '<br>';
        resultmessage += 'Category: '+category;

        resultEl.innerHTML= resultmessage;
    }
})