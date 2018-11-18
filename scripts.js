const FinancialAdvisor = Object.create({}, {
  company: {
    value: "Raymond James",
    enumerable: true,
    writable: true
  },
  specialty: {
    value: "Personal Finance",
    enumerable: true,
    writable: true
  },
  name: {
    value: "Suzanne Bradford",
    enumerable: true
  },

  portfolio: {
    value: [
      {
        stock: "TWTR",
        quantity: 100,
        price: 30.00,
        buyTransaction: true
    }
    ]
  },

  worth: {
    value: function () {
      let totalWorth = 0
      for (let i = 0; i < this.portfolio.length; i++) {
        if (this.portfolio[i].buyTransaction === true) {
          totalWorth += this.portfolio[i].quantity * this.portfolio[i].price
        } else if (this.portfolio[i].buyTransaction === false) {
          totalWorth -= this.portfolio[i].quantity * this.portfolio[i].price
        }
      }
      return `The total worth of this portfolio is $${totalWorth.toFixed(2)}.`
      },
      enumerable: false
    },

  purchase: {
    value: function (ticker, quantity, price) {
      let newStock = {
        ticker = ticker,
        quantity = quantity,
        price = price,
        buyTransaction = true
      }
      this.portfolio.push(newStock)
    },
    enumerable: false
  },

  sell: {
    value: function (ticker, quantity, price) {
      let newStock = {
        ticker = ticker,
        quantity = quantity,
        price = price,
        buyTransaction = false
      }
      this.portfolio.push(newStock)
    },
    enumerable: false
  }

})