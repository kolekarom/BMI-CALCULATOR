function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const resultElement = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid weight and height');
        return;
    }

    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);

    resultElement.innerHTML = `Your BMI: <span class="${category}">${bmi.toFixed(2)}</span> (${category})`;
    resultElement.style.opacity = '1';
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
}