console.log('js');


// Below are example of songs I want to push/use.

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
  console.log("inside of addToCollection func." +" Title of the song "+ title + " Name of the Artist "+ artist + " The Year the song was released " + year);

  // that, when called, creates a new record object and pushes it into the "collection" array
  // - this function should return the newly created record object
   let vinyl_record = {
     title: title,
     artist: artist,
     year: year
   };

  vinyl_collection.push(vinyl_record);  // this is sending the vinyl_record into the array.
}
//    title, artist, year    // this is what I'm submitting into the title, artist, year.
addToCollection( "Ticket to Ride", "The Beatles", 1965 );
addToCollection("Ramble on","Led Zeppelin",1969);
addToCollection("Eight Days a Week","The Beatles",1964);

console.log(vinyl_collection);  // this is going to C.L. what's in the array.




// // stretch goals below


// - create the function `findRecord(title)`


console.log('----------------------------------------');


function findRecord(title){
  console.log("inside function findRecord", title );
  for(let i = 0; i < vinyl_collection.length; i++ ){  // this is looping through the array.
    if(vinyl_collection[i].title === title ){   // this is finding the correct Title that is listed in the C.L. below.
      return i ;  // this is going to tell me where the index spot is of the Title.
    }
  }
    return false;
}  // end of func.


console.log(findRecord("Ramble on"));

console.log(findRecord("Even Flow"));  // this is showing me the func. will return false!

// - this function should receive an argument of a record title
// - if this record is found in the "collection" array, return the record's index within the array
// - if the record is not found, return `false`

console.log("--------------------------------");
// - create a function called `allBy(artist)`
function allBy(artist){
  console.log("inside function allBy ", artist);
  // - when run, this function should return an array of all records in "collection"-
  // - that are by the given artist
  let resultArray = [];

  for(let i = 0; i < vinyl_collection.length; i++ ){
    if(vinyl_collection[i].artist === artist ){
      resultArray.push(vinyl_collection[i]);
    }
  }
    return resultArray;
}

console.log(allBy("The Beatles"));



console.log("------------------------------");


//
    // - create a function called `search(criteria)`
function search(criteria){
console.log(criteria.artist);
  let searchArray = [];
    // - when run, this function should accept an object of search criteria,
    // and return an array of matching records
    //     - If there is no object `search()` or an empty object `search({})`, it should return all records

  if(criteria === undefined || criteria == 0) {
   return vinyl_collection;
  }
  else if {
      //     - If there is an artist property `search({artist: 'Ray Charles'})`, it should return all records by that artist
      for (let i = 0; i < vinyl_collection.length; i++){
        if (vinyl_collection[i].artist === criteria.artist){
          searchArray.push(vinyl_collection[i]);
        }
      }
      return searchArray;

  }




    //     - If there is a year property `search({year: 1957})`, it should return all records from that year
if(search() == criteria.year){
  searchArray.push(criteria)
  console.log(criteria)
}

console.log(search({ 1964  }));


    //     - If there is a year property and an artist property `search({artist: 'Ray Charles', year: 1957})`,
    //       it should return all records from that year by that artist
}

console.log(search(""));

console.log(search({artist:"Led Zeppelin"}));
// console.log(search({ 1964  }));


// console.log(search("Led Zeppelin"));





// ..
