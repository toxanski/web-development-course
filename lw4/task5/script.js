<<<<<<< HEAD
var Cashbox = {
=======
var cashbox = {
>>>>>>> 7df762d8dad9ea2647057763e41fd2cf69075fc4
  amount: 0,
  operationHistory: [],
  addPayment: function(payment) {
    this.checkValidation(payment);
    if (payment.amount <= 0) {
      return 'amount not affected';
    }
    this.amount += payment.amount;
    this.recordTransactions(payment, 'payment');
    return 'cashbox amount = ' + this.amount;
  },
  refundPayment: function(refund) {
    this.checkValidation(refund);
    if (this.amount - refund.amount <= 0) {
      return 'cashbox amount not affected';
    }
    this.amount -= refund.amount;
    this.recordTransactions(refund, 'refund');
    return 'cashbox amount = ' + this.amount;
  },
  showHistory: function() {
    this.operationHistory.forEach((item, i, arr, operation) => {
      if (item.operationName === 'payment') {
        operation = 'платёж на';
      } else {
        operation = 'возврат';
      }
      console.log(
        `${i + 1}. ${item.date} - ${operation} ${item.summ} руб, операция: ${item.info}`
      );
    });
  },
  recordTransactions: function(obj, operation) {
    var currentDate = new Date();
    var formattedDate = {
      day: (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate(),
      month: ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1),
      year: currentDate.getFullYear(),
      hours: (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours(),
      min: (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()
    };

    this.operationHistory.push({
      // String(obj.amount).replace(/^0+/, '')
      summ: obj.amount,
      info: obj.info,
      operationName: operation,
      date: `${formattedDate.day}.${formattedDate.month}.${formattedDate.year} ${formattedDate.hours}:${formattedDate.min}`
    });
  },
  checkValidation: function(obj) {
    if (typeof(obj.amount) !== 'number' || typeof(obj.info) !== 'string') {
      throw 'Введите валидные данные!!!';
    }
  }
};
 

// cashbox.addPayment({amount: 10, info: 'Оплата ЖКХ'}); // cashbox amount = 10
