function mortCalc(myform) {
    // Sanitize inputs to remove commas
    var price = document.Form1.Amount.value.replace(/,/g, '');
    price = parseInt(price, 10);
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid number for Loan Amount. Do not use a dollar sign.");
        return;
    }

    var interest = document.Form1.Rate.value.replace(/,/g, '');
    interest = parseFloat(interest);
    if (isNaN(interest) || interest <= 0) {
        alert("Please enter a valid number for Interest Rate.");
        return;
    }

    var numYears = document.Form1.Years.value;
    numYears = parseInt(numYears, 10);
    if (isNaN(numYears) || numYears <= 0) {
        alert("Please select a valid Loan Term.");
        return;
    }

    // Perform the calculation
    var payment = monthly(price, interest, numYears);
    var formattedPayment = punctuation(payment.toFixed(2));

    // Display the result dynamically
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `Your Monthly Payment is: ${formattedPayment}`;
}

function monthly(price, interest, numYears) {
    var IntRate = interest / 1200; // Monthly interest rate
    var Pmts = numYears * 12; // Total number of payments
    return price * (IntRate / (1 - (1 / Math.pow(1 + IntRate, Pmts))));
}

function punctuation(valuein) {
    var formatStr = "";
    var Odollars = "";
    var decpos = valuein.indexOf(".");
    if (decpos == -1) decpos = valuein.length;
    var dollars = valuein.substring(0, decpos);
    var Fdollars = dollars.length;
    if (Fdollars > 3) {
        while (Fdollars > 0) {
            Tdollars = dollars.substring(Fdollars - 3, Fdollars);
            if (Tdollars.length == 3) {
                Odollars = "," + Tdollars + Odollars;
                Fdollars = Fdollars - 3;
            } else {
                Odollars = Tdollars + Odollars;
                Fdollars = 0;
            }
        }
        if (Odollars.substring(0, 1) == ",")
            dollars = Odollars.substring(1, Odollars.length);
        else dollars = Odollars;
    }
    var cents = valuein.substring(decpos + 1, decpos + 3);
    if (cents == "") cents = "00";
    formatStr = "$" + dollars + "." + cents;

    return formatStr;
}
