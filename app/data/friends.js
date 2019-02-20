/* ---------------------------------------------
  DATA
  Below data will hold all of the friends
  Initiallized with "dummy" friend
--------------------------------------------- */
var friends = [
  {
    name: "Jerry Seinfeld",
    photoURL: "https://raw.githubusercontent.com/tiger2877/friendfinder/master/seinfeld.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Elaine Benes",
    photoURL: "https://raw.githubusercontent.com/tiger2877/friendfinder/master/elaine.jpg",
    scores: [
      3,
      4,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      1
    ]
  },
  {
    name: "George Costanza",
    photoURL: "https://raw.githubusercontent.com/tiger2877/friendfinder/master/george.jpg",
    scores: [
      5,
      4,
      3,
      4,
      4,
      3,
      5,
      1,
      5,
      4
    ]
  },
  {
    name: "Cosmo Kramer",
    photoURL: "https://raw.githubusercontent.com/tiger2877/friendfinder/master/kramer.jpg",
    scores: [
      5,
      1,
      1,
      1,
      5,
      1,
      1,
      1,
      5,
      5
    ]
  }
];

// Export the array to make it accessible to other files using require
module.exports = friends;