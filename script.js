const currencies = [
    'EUR',
    'CAD',
    'HKD',
    'ISK',
    'PHP',
    'DKK',
    'HUF',
    'CZK',
    'AUD',
    'RON',
    'SEK',
    'IDR',
    'INR',
    'BRL',
    'RUB',
    'HRK',
    'JPY',
    'THB',
    'CHF',
    'SGD',
    'PLN',
    'BGN',
    'TRY',
    'CNY',
    'NOK',
    'NZD',
    'ZAR',
    'USD',
    'MXN',
    'ILS',
    'GBP',
    'KRW',
    'MYR',
];
const root = document.getElementById('root');

root.innerHTML = `
<h1>Currency Converter</h1>
<p>Convert from USD 🇺🇸 to  
<select name='currency-converters' id='currency-converters'>
</select>
</p>
<div class='calculator'>
<div class='input-field' id='base-input-field'>
<label for='base-currency' id='base-currency-label'>USD 🇺🇸</label>
<input id='base-currency' type='text'>
</div>
<h2>=</h2>
<div class='input-field' id='conversion-input-field'>
<label for='conversion-currency' id='conversion-currency-label'>EUR</label>
<div id='conversion-currency'></div>
</div>
<button id='convert'>CONVERT!</button>
`;

let selectConverter = document.getElementById('currency-converters');
let selectBase = document.getElementById('currency-bases');
let baseLabel = document.getElementById('base-currency-label');
let converterLabel = document.getElementById('conversion-currency-label');
let button = document.getElementById('convert');
let conversionOutput = document.getElementById('conversion-currency');
let USDInput = document.getElementById('base-currency');

for (let code of currencies) {
    let option = document.createElement('option');
    option.innerText = code;
    option.value = code;
    selectConverter.appendChild(option);
}

selectConverter.addEventListener('change', () => {
    converterLabel.innerText = selectConverter.value;
});

button.addEventListener('click', () => {
    fetch(
        `https://openexchangerates.org/api/latest.json?app_id=a7064c22a0ff4269b2182a5b018a950f&symbols=${selectConverter.value}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(USDInput.value);
            conversionOutput.innerText =
                USDInput.value * data.rates[`${converterLabel.innerText}`];
        });
});
