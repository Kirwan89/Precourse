// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  const catName = {
    addName: name,
    addAge: age,
    meow: function() {
      return 'Meow!';
    }
  }
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  return catName;

}

function addProperty(object, property) {
  // add the property to the object with a value of null 
  object.property = null;
  return object.property;
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  object[method]();
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  return mysteryNumberObject.mysteryNumber * 5;
  // multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  // remove the property from the object
  delete object.property;
  // return the object
  return object;

}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  const newObj = {
    name: name,
    email: email,
    password: password,
  }
  // return the new object
  return newObj;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  let containsEmail = false;
    for (let key in user){
    if ( key === "email"){
      hasEmail.containsEmail[true];
    } 
return containsEmail;
  // otherwise return false
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  const checkProperty = false;
    for (let object in hasProperty){
    if ( object === property){
      hasProperty.checkProperty[true];
    } 
  // property is a string
  // otherwise return false
  return checkProperty;
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
 if (password === user.password){
   return true;
 }
  return false;
  // return true if they match
  // otherwise return false
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  user[password]: newPassword;
  return user;
  // return the object
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  user.friends.push(newFriend);
  // add newFriend to the end of the friends array
  // return the user object
  return user.friends;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  for (let isPremium in users)
  isPremium: true;
  // set each user's isPremium property to true
  // return the users array
  return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  let allPostLikes = 0;
  for (let sumLikes in user){
    sumLikes = posts.likes;
    allPostLikes = allPostLikes + sumLikes
  }
  return allPostLikes;
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  storeItem.calculateDiscountPrice: function() {
      const discountedPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
  }
  return discountedPrice;
  return storeItem;
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
