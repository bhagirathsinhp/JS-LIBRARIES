const customers = ["Max", "Manuel", "Anna"];
const activeCustomers = ["Max", "Manuel"];

// const inactiveCustomers = _.difference([2, 1], [2, 3]);
const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
