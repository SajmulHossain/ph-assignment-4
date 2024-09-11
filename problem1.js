function calculateTax(income, expenses) {
if(income < 0 || expenses < 0 || income < expenses) {
    return 'Invalid Input';
}

    const remainMoney = income - expenses;
    const remainAfterVat = remainMoney * .20;

    return remainAfterVat;
}

const result = calculateTax(5000, 1500);
console.log(result);
