# Tier 1 Week 5

This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

## Required Features

### Adding records to the collection

- create a variable "collection" that is an empty array
- add a function to your script named `addToCollection(title, artist, year)` that, when called, creates a new record object and pushes it into the "collection" array
- this function should return the newly created record object

CSS
---
Time to make our index.html page look cool!

- place the `<h1>` and `<p>` in a header
- add an `<h2>` into the header that says `YOUR NAME's Record Shop`
- create a `stylesheet.css` file and source it into your index.html file.
- look up the CSS `background-image` property to learn how to use the provided `record.png` as the background image on your page with a relative path.
- look up CSS `background-size` to learn how to fill the body of the page.
- Add a background color to the header to make it stand out

Here's an example of what the style could look like
<img src="./example.png">

**Reminder**: Make sure to answer this week's Slack discussion question!

## Stretch Goals

### Finding a record by name

- create the function `findRecord(title)`
- this function should receive an argument of a record title
- if this record is found in the "collection" array, return the record's index within the array
- if the record is not found, return `false`

### Get all records by an artist

- create a function called `allBy(artist)`
- when run, this function should return an array of all records in "collection" that are by the given artist

### Add record from DOM

- Add an `input` for `title`, `artist`, and `year`. Add a `button` that says `Add a Record` to `index.html`
- When a user clicks `Add a Record`, it should be added to the list in JavaScript

### Flexible search

- create a function called `search(criteria)`
- when run, this function should accept an object of search criteria, and return an array of matching records
    - If there is no object `search()` or an empty object `search({})`, it should return all records
    - If there is an artist property `search({artist: 'Ray Charles'})`, it should return all records by that artist
    - If there is a year property `search({year: 1957})`, it should return all records from that year
    - If there is a year property and an artist property `search({artist: 'Ray Charles', year: 1957})`, it should return all records from that year by that artist

### Search from DOM

- Add an `input` for `artist` and `year`. Add a `button` that says `Search` to `index.html`
- When a user clicks `Search`, it should use flexible `search` to find all of the records that match, and list them out in an alert
- For even *more* stretch. List the results on the DOM instead of in an alert

