const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

const {john, peter} = names
//instead of destructuring we can also juse names.john and names.peter
sayHi('susan')
sayHi(john)
sayHi(peter)