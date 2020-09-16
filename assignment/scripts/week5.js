console.log('js');

let vinyl_1 = {
  title: "Ramble on",
  artist: "Led Zeppelin",
  year: 1969
}; // end of vinyl

let vinyl_2 ={
  title: "black",
  artist: "Pearl Jam",
  year: 1991
}; // end of vinyl

let vinyl_3 = {
  title: "Ticket to Ride",
  artist: "The Beatles",
  year: 1965
}; // end of vinyl


// - create a variable "collection" that is an empty array
let vinyl_collection = [];
// - add a function to your script named `addToCollection(title, artist, year)`
function addToCollection(title, artist, year){
  console.log("inside of addToCollection func." +" Title "+ title + " Artist "+ artist + " Year " + year);
  vinyl_collection.push(title, artist, year);
}

addToCollection(vinyl_4 = {
  title: "Night Moves",
  artist: "Bob Seger & The Silver Bullet Band",
  year: 1976
});

console.log(vinyl_collection);
//
// that, when called, creates a new record object and pushes it into the "collection" array
// - this function should return the newly created record object


addToCollection(vinyl_5 ={});

addToCollection
(vinyl_5.title = "Don't Stop",
vinyl_5.artist = "Fleetwood Mac",
vinyl_5.year = 1988);

console.log(vinyl_collection);




// {
//   title: "EverLong", artist: "FooFighters", year: 1997
// }
