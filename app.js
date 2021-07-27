const form = document.querySelector('.my-form');
const convert = document.querySelector('.convert');
const fehrenheit = document.querySelector('.fehrenheit');
const loader = document.querySelector('#loading');
const dCelsius = document.querySelector('.degrees-celsius')

form.addEventListener('submit', function(e) {
    // hide conversion results
    fehrenheit.style.display = 'none';
    // showing loading gif
    loader.style.display = 'block';
    
    setTimeout(doConversion, 2000);

    e.preventDefault();
});

// Conversion formula
function doConversion() {
    const conversionResult = parseFloat(dCelsius.value) * 1.8 + 32;

    if(isFinite(conversionResult)) {
        fehrenheit.value = conversionResult.toFixed(1);
        // show conversion results
        fehrenheit.style.display = 'block';
        // hide loading gif
        loader.style.display = 'none';

        dCelsius.value = '';
    }else {
        showError('Please enter a number from zero')
    }
}

// show error
function showError(error) {
    // hide conversion results
    fehrenheit.style.display = 'none';
    // hide loading gif
    loader.style.display = 'none';

    // create a div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert';
    // create text node & append to errorDiv
    errorDiv.appendChild(document.createTextNode(error));
    // Get elements
    const container = document.querySelector('.container-2');
    const title = document.querySelector('.title');
    // Insert error before title
    container.insertBefore(errorDiv, title);

    // clear error after 2sec
    setTimeout(clearError, 1500)
}

function clearError() {
    // document.querySelector('.alert').style.display = 'none';
    document.querySelector('.alert').remove();
}

const card = document.querySelector('.container-2');
card.addEventListener('mouseover', () => {
    card.classList.add('card-darken');
})

card.addEventListener('mouseout', () => {
    card.classList.remove('card-darken');
})





