const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

console.log(convertButton)

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")
   

console.log(currencySelect.value)
   const dolarToday = 5.2
   const euroToday = 6.2

   const convertdValue = inputCurrencyValue / dolarToday


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
   style: "currency",
   currency: "BRL"
}).format(inputCurrencyValue)

currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD"
 
}
).format (convertdValue )

}




convertButton.addEventListener("click", convertValues)