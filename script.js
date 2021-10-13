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
<p>Convert from 
<select name='currency-bases' id='currency-bases'>
<option value='USD'>USD</option> 
</select>
to 
<select name='currency-converters' id='currency-converters'>
<option value='USD' id='USD'>USD</option>
<option value='GBP' id='GBP'>GBP</option>
<option value='EUR' id='EUR'>EUR</option>
<option value='AUD' id='AUD'>AUD</option>
<option value='BTC' id='BTC'>BTC</option>
<option value='CAD' id='CAD'>CAD</option>
</select>
</p>
<form id='base-input'>
<div class='calculator'>
<div class='input-field' id='base-input-field'>
<label for='base-currency' id='base-currency-label'>USD</label>
<input id='base-currency' type='text'>
</div>
<h2>=</h2>
<div class='input-field' id='conversion-input-field'>
<label for='conversion-currency' id='conversion-currency-label'>USD</label>
<input id='conversion-currency' type='text'>
</div>
`;

let selectBase = document.getElementById('currency-bases');
let selectConverter = document.getElementById('currency-converters');
let baseLabel = document.getElementById('base-currency-label');
let converterLabel = document.getElementById('conversion-currency-label');

selectBase.addEventListener('change', () => {
    baseLabel.innerText = selectBase.value;
});

selectConverter.addEventListener('change', () => {
    console.log(selectConverter.value);
    converterLabel.innerText = selectConverter.value;
});
