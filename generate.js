/**
 * @Author: Ali Ismail
 * @Date:   2018-04-06T11:50:37+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-06T21:32:39+02:00
 */



var faker = require('faker');
var _ = require("lodash");
// with ES6
module.exports = () =>
({
  myCard : _.times(200, n =>
    ({
      person : {
        id: faker.random.uuid(),
        name:faker.name.findName(),
        avatar:faker.internet.avatar(),
        image:faker.random.image(),
        color: faker.internet.color(),
        address: {
          country:faker.address.country(),
          state: faker.address.state(),
          city: faker.address.city(),
          zipcode: faker.address.zipCode(),
        },
        posts: {
          words:faker.lorem.words(),
          sentence:faker.lorem.sentence(),
          slug:faker.lorem.slug(),
          paragraph:faker.lorem.paragraph(),
          text:faker.lorem.text(),
          lines:faker.lorem.lines(),
        }
      }

    })),
    userCard : _.times(100, n =>
      ({
        id: n,
        contextualCard: faker.helpers.contextualCard(),
        userCard: faker.helpers.userCard(),
        color: faker.internet.color()
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
