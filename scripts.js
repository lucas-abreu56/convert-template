const USD = 5.50;
const EUR = 6.37;
const GBP = 7.44;

const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

//Manipulating amount input to receive only numbers
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g; //get characters inserted
    amount.value = amount.value.replace(hasCharactersRegex, ""); // replace characters to nothing
    // console.log(amount.value)
})

//Submit event on form
form.onsubmit = (event) => {
    event.preventDefault(); //Doesn't reload page after submit
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Function to convert currency
function convertCurrency(amount, price, symbol){

    // console.log(amount, price, symbol)

    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`; // Show currency selected

        let total = amount * price;
        total = formatCurrencyBRL(total)
        result.textContent = `${total}`
        
        footer.classList.add("show-result"); // Attach class to footer, showing the result
    } catch (error){
        footer.classList.remove("show-result"); // Remove class attached

        // console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.");
    }
}


// Brazilian currency formated
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}