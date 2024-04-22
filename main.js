// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
// function that checks if the credit card is valid or invalid following the Luhn algorithm:
let invalidCard = [];
const validateCred = (cardNumb) => {
  let checkCard = cardNumb.slice(); //copying the card number into a new array

  //iterating the new array from left to right
  for (let i = checkCard.length; i >= 0; i--) {
    //doubling every other digit
    if (i % 2 === 0) {
      checkCard[i] *= 2;
    }
    // if resulting value of each doubled digit is > 9, substract 9 from the resulting value
    if (checkCard[i] > 9) {
      checkCard[i] -= 9;
    }
  }

  // sum up all the values (credit card numbers)
  const totSum = (x, y) => x + y;
  let validatingSum = checkCard.reduce(totSum);

  // if the sum of all the value is evenly divisible by 10, then return TRUE=valid card; else FALSE=invalid card
  if (validatingSum % 10 === 0) {
    validatingSum = true;
  } else {
    validatingSum = false;
  }

  return validatingSum;
};

// findInvalidCards checks through the nested array for which numbers are invalid & returns another nested array of invalid cards
const findInvalidCards = (cardDigits) => {
  for (let i = 0; i < cardDigits.length; i++) {
    let checkDigits = cardDigits[i];

    if (!validateCred(checkDigits)) {
      invalidCard.push(checkDigits);
    }
  }
  return invalidCard;
};

// idInvalidCardCompanies returns an array of companies
const idInvalidCardCompanies = (invalidNumb) => {
  const companyName = [];

  invalidNumb.forEach((getFirstDigit) => {
    switch (getFirstDigit.shift()) {
      case 3:
        companyName.push("American Express");
        break;
      case 4:
        companyName.push("Visa");
        break;
      case 5:
        companyName.push("MasterCards");
        break;
      case 6:
        companyName.push("Discover");
        break;
      default:
        companyName.push("Company not found");
        break;
    }
  });
  return companyName;
};

console.log(idInvalidCardCompanies(invalidCard));

  if (validatingSum % 10 === 0){
    validatingSum = true;
  } else {
    validatingSum = false;
  }
  
  return validatingSum
}

//
const findInvalidCards = cardDigits => {
  for (let i = 0; i < cardDigits.length; i++){
    let checkDigits = cardDigits[i];

    if (!validateCred(checkDigits)){
      invalidCard.push(checkDigits);
    }
  }
  return invalidCard
}




const idInvalidCardCompanies = invalidNumb => {
  const companyName = [];

  invalidNumb.forEach((getFirstDigit) => {
    switch (getFirstDigit.shift()) {
      case 3:
        companyName.push("American Express");
        break;
      case 4:
        companyName.push("Visa");
        break;
      case 5:
        companyName.push("MasterCards");
        break;
      case 6:
        companyName.push("Discover");
        break;
      default:
        companyName.push("Company not found");
        break;
    }
  });
  return companyName;
}
//check if the card is valid or invalid:
//console.log(validateCred(enter the array name here from the card numbers at the top of the page), for example:
console.log(validateCred(mystery1));

//check name of company
console.log(idInvalidCardCompanies(invalidCard))
