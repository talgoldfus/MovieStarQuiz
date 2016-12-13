# Movie Release Quiz :

##Live Demo

Front End Application (Game) :

https://movie-release-quiz-front.herokuapp.com/

Backend End Application (API):

https://movie-release-quiz-api.herokuapp.com/api/v1/actors

##Features

###GAME:

A) User can search his favorite actors / movie personas and get quized upon their movie release dates

B) Upon user answer he is shown the correct result and given feedback on his answer

C) Upon answering the quiz a user is given a choice to play another round with a different movie or choose another actor

D) If a user enters a movie persona/actor that is not found in the databse it reciveis a message that prompts him to play with Liam Neesons movies

E) If a user enters a movie persona/actor that returns more then one obvious person it reciveis a message asking him to make an additioal search

F) The game is responsive and friendly to all the various device sizes including mobile

###API:

A) Api returns list of popular artist on get request to the index route : api/v1/actors

B) Api reads query strings parameters and returns all give actors movies on : api/v1/actors?actor=actor%20name

C) Api reads query strings parameters and returns all give actors movies and personal details on : api/v1/actors?actor=actor%20name&all_details=true

C) Api returns a default query of Liam Neesons movies if the given actor in the query string cannot be found : api/v1/actors?actor=sdjhsk

## Installing and playing the game localy 

A)Clone the repo to your local machine.

B)Cd into the movie-release-quiz-back folder and run bundle install ($ bundle install).

B)Cd into the movie-release-quiz-front folder and run npm install ($ npm install).

D)To play the game start the rails server via $rails s command (while in the movie-release-quiz-back folder) 

E)Start the front end application via $ npm start (while in the movie-release-quiz-front folder) . If the browser hasn't opened automatically open your browser in http://localhost:3001/

