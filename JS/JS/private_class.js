class BankAccount {
  static #accountCount = 0;
  #accountHolder;
  #balance;
  #transcations = [];

  static get totalAccounts() {
    return BankAccount.#accountCount;
  }
  constructor(accountHolder, balance = 0) {
    this.#accountHolder = accountHolder;
    this.#balance = balance;
    BankAccount.#accountCount++;
  }
  get accountHolder() {
    return this.#accountHolder;
  }
  get balance() {
    return this.#balance;
  }
  set accountHolder(name) {
    if (name.length > 3) {
      this.#accountHolder = name;
    } else {
      throw new Error("ERROR_DND");
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#transcations.push({
        type: "credit",
        amount: amount,
        balance: this.#balance,
        dateOftranscation: new Date(),
      });
    } else {
      throw new Error("ERROR_DND_NR");
    }
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance = this.#balance - amount;
      this.#transcations.push({
        type: "debit",
        amount: amount,
        balance: this.#balance,
        dateOftranscation: new Date(),
      });
    } else {
      throw new Error("test");
    }
  }
  getAccountSummary() {
    return `Account Holder: ${this.#accountHolder}, Balance: ₹${this.#balance}`;
  }
  get transcations() {
    return this.#transcations;
  }
}

class SavingAccount extends BankAccount {
  #interest;
  constructor(accountHolder, balance, interest = 0) {
    super(accountHolder, balance);
    this.#interest = interest;
  }
  get interest() {
    return this.#interest;
  }
  set interest(rate) {
    if (0 < rate < 6) {
      this.#interest = rate;
    }
  }
  interestCalucator(timeInYear) {
    return (this.balance * timeInYear * this.#interest) / 100;
  }
}
class CurrentAccount extends BankAccount {
  constructor(accountHolder, balance, overdraftLimit = 5000) {
    super(accountHolder, balance);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      let newBalance = this.balance - amount;
      super.withdraw(this.balance);
      console.log("over", newBalance);
    }
  }
}
// let sb = new SavingAccount("Prince Chauhan", 1000, 5.5);
let cb = new CurrentAccount("Prince Chauhan", 1000);
cb.deposit(200);

cb.withdraw(2500);
console.log(cb.balance);
