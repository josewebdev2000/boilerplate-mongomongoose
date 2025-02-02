require('dotenv').config();
const mongoose = require("mongoose");

// Connect to the DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a new Schema
let personSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  favoriteFoods: {
    type: [String]
  }
});

// Create a new Model
let Person = mongoose.model("Person", personSchema);

// Array of people to create
const arrayOfPeople = [
  {
    name: "Josue",
    age: 32,
    favoriteFoods: ["pizza", "hamburger", "ramen noodles"]
  },
  {
    name: "Alejandro",
    age: 24,
    favoriteFoods: ["chicken", "pork", "lettuce"]
  },
  {
    name: "Fiona",
    age: 25,
    favoriteFoods: ["avocado", "tomatoes", "tuna fish"]
  }
];

const createAndSavePerson = (done) => {
    // Create an instance of a new person
    const person = new Person({
      name: "Gabriel",
      age: 27,
      favoriteFoods: ["Rice", "Beans", "Meat"]
    });
  
    // Save the person to the DB
    person.save((err, data) => {
      if (err) return console.log(err);
      done(null, data);
    });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  // Use Person.find to find someone by his/her name
  Person.find({
    name: personName
  },
  (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  // Use Person.findOne to only return one result
  Person.findOne({
    favoriteFoods: food
  })
    .then(data => done(null, data))
    .catch(err => console.log(err));
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
