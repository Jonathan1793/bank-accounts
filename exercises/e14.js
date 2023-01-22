// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let res = [];
  let totalWithdrawal = 0;
  let totalDeposit = 0;
  for (let element of array) {
    let accountWithWithdrawals = element.withdrawals ?? 0;
    let accountsWithDeposits = element.deposits ?? 0;
    for (let i = 0; i < accountWithWithdrawals.length; i++) {
      totalWithdrawal = totalWithdrawal + element.withdrawals[i];
    }
    for (let i = 0; i < accountsWithDeposits.length; i++) {
      totalDeposit = totalDeposit + element.deposits[i];
    }
    if (totalDeposit - totalWithdrawal !== element.balance) {
      res.push(element);
    }
    totalWithdrawal = 0;
    totalDeposit = 0;
  }
  return res;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
