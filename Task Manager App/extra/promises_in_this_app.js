// This file just contain promise chaining usage in our app. This file doesn't integrates with any other files.

require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('',{age : 19}).then((user) => {
   console.log(user);
   return User.countDocuments({age:18});
}).then((result) => {
   console.log(result);
}).catch((e)=> {
   console.log(e);
});


const updateAgeAndCount = async(id,age) =>{
   const user = await User.findByIdAndUpdate(id,{age});
   const count = await User.countDocuments({age});
   return count;
}

updateAgeAndCount('',17).then((count) => {
   console.log(count);
}).catch((e) => {
   console.log(e);
})