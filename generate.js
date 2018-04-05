var faker = require('faker');
var _ = require("lodash");
// with ES6
module.exports = () =>
({
  people : _.times(100, n =>
    ({
      id: n,
      name: faker.name.findName(),
      country:faker.address.country(),
      avatar: faker.internet.avatar(),
      color: faker.internet.color()
    })),
    comments : _.times(100, n =>
      ({
        id: n,
        text: faker.lorem.sentences(),
        time: faker.date.weekday(),
        
      }))
})
//
// module.exports = function(){
//   return {
//     people: _.times(50, function (n) {
//       return {
//         id: n,
//         name: faker.name.findName(),
//         state:faker.address.state(),
//         avatar: faker.internet.avatar(),
//         image: faker.image.image()
//       }
//     })
//
//   }
// }
