Tier 1 Week 5
===

This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

Required Features
===

Adding records to the collection

- create a variable "collection" that is an empty array
- add a function to your script named ```addToCollection( title, artist, year)``` that, when called, creates a new record object and pushes it into the "collection" array
- this function should return the newly created record object

CSS
---
Time to make our index.html page look cool!

- place the `<h1>` and `<p>` in a header
- add an `<h2>` into the header that says `YOUR NAME's Record Shop`
- create a `stylesheet.css` file and source it into your index.html file.
- look up the CSS `background-image` attribute to learn how to use the provided `record.png` as the background image on your page.
- look up CSS `background-repeat` to learn how to make that image repeat itself in the body of the page.
- Add a background color to the header to make it stand out

Stretch Goals
===

Finding a record by name

- create the function ```findRecord( title )```
- this function should receive an argument of a record title
- if this record is found in the "collection" array, return the record's index within the array
- if the record is not found, return ```false```

Get all records by an artist

- create a function called ```allBy( artist )```
- when run, this function should return an array of all records in "collection" that are by the given artist 

**Reminder**: Make sure to answer this week's Slack discussion question!
