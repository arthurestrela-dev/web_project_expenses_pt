let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
};

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() <= 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
    let total = 0;

    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === category) {
            total = total + expenseEntries[i][1];
        }
    }
    return total;
}

function calculateLargestCategory() {
    let expensesCategory = [
        "groceries",
        "restaurants",
        "transport",
        "home",
        "subscriptions",
    ];

    let categoriesTotal = [];

    for (let i = 0; i < expensesCategory.length; i++) {
        let total = calculateCategoryExpenses(expensesCategory[i]);
        categoriesTotal.push([expensesCategory[i], total])
    };

    let largestCategory = categoriesTotal[0][0];
    let largestTotal = categoriesTotal[0][1];

    for (let i = 1; i < categoriesTotal.length; i++) {
        if (categoriesTotal[i][1] > largestTotal) {
            largestTotal = categoriesTotal[i][1];
            largestCategory = categoriesTotal [i][0];
        }
    };

    return largestCategory
}

function addExpenseEntry(expense) {
    expenseEntries.push(expense);

    totalExpensesValue += expense[1];
}