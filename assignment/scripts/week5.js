console.log('js');


// Below are example of songs I want to push. 

//   title: "Ramble on",
//   artist: "Led Zeppelin",
//   year: 1969



//   title: "Ticket to Ride",
//   artist: "The Beatles",
//   year: 1965







// - create a variable "collection" that is an empty array
let vinyl_collection = [];
// - add a function to your script named `addToCollection(title, artist, year)`
function addToCollection(title, artist, year){
  console.log("inside of addToCollection func." +" Title "+ title + " Artist "+ artist + " Year " + year);

  // that, when called, creates a new record object and pushes it into the "collection" array
  // - this function should return the newly created record object
 let vinyl_record = {
   title: title,
   artist: artist,
   year: year
 };

  vinyl_collection.push(vinyl_record);  // this is sending the vinyl_record into the array.
}
// title, artist, year
addToCollection( "Don't Stop", "Fleetwood Mac", 1988 ); // this is what I'm submitting into the title, artist, year.

console.log(vinyl_collection);























// console.log("======================");
// // stretch goals below
//
//
// //
// // - create the function `findRecord(title)`
//
// function findRecord(title){
//   console.log(vinyl_collection.indexOf("Ramble on"));
//   // if(vinyl_collection.indexOf("Ramble on") == -1 )
//   // return false;
//   // else {
//   //   return true;
//   // }
// }
//
// console.log(findRecord());
//
//
// // - this function should receive an argument of a record title
// findRecord( vinyl_1.title = "Ramble on");
// vinyl_5.title = "Dont Stop"
// title: "EverLong", artist: "FooFighters", year: 1997

// - if this record is found in the "collection" array,-
// return the record's index within the array
// - if the record is not found, return `false`
