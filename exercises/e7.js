// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let res = [];
  let currentLowestBalance = array[0].balance;
  for (let element of array) {
    if (element.balance > 0) {
      if (element.balance < currentLowestBalance) {
        res[0] = element;
        currentLowestBalance = element.balance;
      }
    }
  }
  return res;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
