function createInvoice(services = {}) {
  // implement the factory function here
  let invoice = {
    phone: 3000,
    internet: 5500,
    total() {
      return this.phone + this.internet;
    },
    addPayment() {
      
    }
  };

  if (services.internet !== undefined) {
    invoice.internet = services.internet;
  }

  if (services.phone !== undefined) {
    invoice.phone = services.phone;
  }

  return invoice;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}


function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(payments);
console.log(paymentTotal(payments));      // => 24000