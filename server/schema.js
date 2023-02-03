const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')

//const faker = require('faker')
var casual = require('casual');
casual.define('user', function() {
  var result = [];
  for (var i = 0; i < 2000; ++i) {
     result.push({
        name: casual.name,
        email: casual.email,
        phone: casual.phone,
        country: casual.country,              
        city : casual.city,               
        //zip: casual.zip(digits = {5, 9}),
        street : casual.street,             
        address: casual.address,              
        address1: casual.address1,            
        address2: casual.address2,           
        state: casual.state,                
        building_number: casual.building_number 
    });
   }
   return result;
  }
);

const UserType = new GraphQLObjectType({
  name: 'userlist',
  fields:{
    name: {type :GraphQLString},
    email: {type :GraphQLString},
    phone: {type :GraphQLString},
    country: {type :GraphQLString},              
    city : {type :GraphQLString},               
   // zip: GraphQLString | GraphQLInt,
    street : {type :GraphQLString},             
    address: {type :GraphQLString},              
    address1: {type :GraphQLString},            
    address2: {type :GraphQLString},           
    state: {type :GraphQLString},                
    building_number: {type :GraphQLInt}
  }
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields:  () => ({
      list: {
        type: new GraphQLList(UserType),
        resolve(parent, args) {
          return casual.user;
        }
      }
    })
  })
})