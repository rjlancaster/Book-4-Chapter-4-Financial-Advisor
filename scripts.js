const RichardLancaster = Object.create({}, {
  firstName: {
    value: "Richard",
    enumerable: true
  },
  lastName: {
    value: "Lancaster",
    enumerable: true
  },
  dateOfBirth: {
    value: "July 30, 1972",
    enumerable: true,
  },
  placeOfBirth: {
    value: "Tallahassee, FL",
    enumerable: true
  },
  currentCityOfResidence: {
    value: "Nashville",
    enumerable: true,
    writable: true
  },
  currentStateOfResidence: {
    value: "Tennessee",
    enumerable: true,
    writable: true
  },
  toString: {
    value: function () {
      const description = `${this.firstName} ${this.lastName} was born in ${this.placeOfBirth}. He was born on ${this.dateOfBirth}. He currently lives in ${this.currentCityOfResidence}, ${this.currentStateOfResidence}.`
      return description
    }
  }
})
