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
  var totalCount = 2000;
  for (var i = 0; i < totalCount; ++i) {
     result.push({
        name: casual.name,
        email: casual.email,
        phone: casual.phone,
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

const DataType = new GraphQLObjectType({
  name: 'userlist',
  fields:{
    name: {type :GraphQLString},
    email: {type :GraphQLString},
    phone: {type :GraphQLString},
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
        type: new GraphQLList(DataType),
        args: {offset : {type :GraphQLInt}, limit : {type: GraphQLInt} },
        resolve(parent, args) {
          const res = casual.user;
          const result = [];
          for(let i=0; i< res.length;i++) {
              if(i>= args.offset) result.push(res[i]);
              if(args.limit && args.limit === result.length) break;
          }
          return result;
        }
      }
    })
  })
})