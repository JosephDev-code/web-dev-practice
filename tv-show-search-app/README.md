# TV Show Search

A simple TV show search application built while practicing JavaScript, Axios, and working with external APIs.

## Features

- Search for TV shows by name
- Send search requests to the TVmaze API
- Display TV show images returned by the API
- Clear the search input after submitting

## Technologies Used

- HTML
- JavaScript
- Axios
- TVmaze API

## What I Practiced

This project helped me practice:

- Working with HTML forms
- Handling form submission events
- Preventing default form behavior
- Reading values from form inputs
- Making API requests with Axios
- Using `async/await`
- Working with API response data
- Creating HTML elements dynamically with JavaScript
- Appending elements to the DOM
- Conditional rendering when an API result contains an image

## How It Works

The user enters the name of a TV show and submits the search form.

JavaScript prevents the page from refreshing, retrieves the search term, and sends it to the TVmaze search API using Axios.

The returned results are then looped through, and an image is created and added to the page for each result that contains an image.

## Purpose

This project was created as part of my JavaScript learning journey to practice APIs, asynchronous JavaScript, Axios, forms, and DOM manipulation.