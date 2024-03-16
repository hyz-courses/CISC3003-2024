/* define functions here */
/* 
This script should be linked once at the end of the HTML
file in order to make getElementById work.
*/

/*--------------- Calculations -------------*/
/**
 * @param {*} quantity Quantity of a product.
 * @param {*} price Price of a product.
 *  Calculates amount value of product.
 */
function calculateTotal(quantity, price) {
    return quantity * price;
}

/**
 * Subtotal = sum of all amounts.
 * @param {*} totals An array of invoice prices.
 * @returns Subtotal, that is the sum of these prices.
 */
function calcSubTotal(quantities, prices) {
    var subTotal = 0;
    for (index in quantities) {
        subTotal += calculateTotal(quantities[index], prices[index]);
    }
    return subTotal;
}

/**
 * Tax = 10% * subTotal.
 * @param {*} subTotal Subtotal to calculate tax. 
 * @returns Tax value.
 */
function calcTax(subTotal) {
    return 0.1 * subTotal;
}

/**
 * Shipping = 40, only if subTotal is smaller than 1000.
 * @param {*} subTotal 
 * @returns 
 */
function calcShipping(subTotal) {
    return subTotal <= 1000 ? 40 : 0;
}

/**
 * Grand Total = Subtotal + Tax + Shipping.
 * @param {*} subTotal 
 * @returns 
 */
function calcGrandTotal(subTotal) {
    return grandTotal = subTotal + calcTax(subTotal) + calcShipping(subTotal);
}

/*--------------- Sub-Render Functions -------------*/
/**
 * Renders a row of cart in the table, containing portrait, name, number, price and amount.
 * @param {*} file File name.
 * @param {*} title Title of item.
 * @param {*} quantity Quantity of item.
 * @param {*} price Unit price of item.
 * @param {*} total Total price of item.
 */
function outputCartRow(file, title, quantity, price) {

    // Write table data.
    function writeTableData(data) {
        document.write("<td>" + data + "</td>");
    }

    // Total price of item.
    var total = calculateTotal(quantity, price);

    // Construct file path. Relative to the HTML file rather than js file.
    var filePath = "./images/" + file;
    var imageElement = "<img src='" + filePath + "' alt='" + title + "'>";

    // Write table row: Image, Title, Quantity, Price, Amount.
    document.write("<tr>");
    writeTableData(imageElement);
    writeTableData(title);
    writeTableData(quantity);
    writeTableData("$" + price.toFixed(2));
    writeTableData("$" + total.toFixed(2));
    document.write("</tr>");
}

/**
 * Output Subtotal.
 * @param {*} subTotal 
 */
function outputSubTotal(subTotal) {
    document.getElementById('subtotal').innerText = "$" + subTotal.toFixed(2);
}

/**
 * Output tax.
 * @param {*} subTotal 
 */
function outputTax(subTotal) {
    var tax = calcTax(subTotal);
    document.getElementById('tax').innerText = "$" + tax.toFixed(2);
}

/**
 * Output shipping.
 * @param {*} subTotal 
 */
function outputShipping(subTotal) {
    var shipping = calcShipping(subTotal);
    document.getElementById('shipping').innerText = "$" + shipping.toFixed(2);
}

/**
 * Output Grand Total.
 * @param {*} subTotal 
 */
function outputGrandTotal(subTotal) {
    var grandTotal = calcGrandTotal(subTotal);
    document.getElementById('grand-total').innerText = "$" + grandTotal.toFixed(2);
}

/*--------------- Overall Output Function -------------*/
/**
 * Subtotal, Tax, Shipping, and Grand Total.
 */
function outputTotal() {
    var subTotal = calcSubTotal(quantities, prices);
    outputSubTotal(subTotal);
    outputTax(subTotal);
    outputShipping(subTotal);
    outputGrandTotal(subTotal);
}

/**
 * Render the table cart rows using given data.
 */
function renderTable() {
    for (var i = 0; i < filenames.length; i++) {
        outputCartRow(filenames[i], titles[i], quantities[i], prices[i]);
    }
}

/* Render Subtotal*/
outputTotal();


