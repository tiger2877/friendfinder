/* ---------------------------------------------
  DATA
  Below data will hold all of the friends
  Initiallized with "dummy" friend
--------------------------------------------- */
var friends = [
  {
    name: "Jerry Seinfeld",
    photo: "https://raw.githubusercontent.com/tiger2877/friendfinder/master/seinfeld.jpg",
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
    photo: "https://samepageteam.files.wordpress.com/2014/04/elaine-benes-picture.jpg?w=470",
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
    photo: "http://images3.wikia.nocookie.net/__cb20110406222713/seinfeld/images/7/76/George-costanza.jpg",
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
    photo: "http://img1.rnkr-static.com/user_node_img/79/1576045/870/michael-richards-people-in-tv-photo-u6.jpg",
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