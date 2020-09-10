# unitThree_frontEnd
A full-stack application, built by Evander Santana, Alex Mackenzie and Adriel Rodriguez using the MERN stack: Node.js, Mongoose, Express and React.


MVP - Minimum Viable Product

For this project, you will be making another full CRUD app using the technologies outlined below.

A working full-stack application, built by you and your group members, using the MERN stack: Node.js, Mongoose, Express and React.
At least one model with full CRUD.
Include at least one of the following features:
Authorization
Include sign up/login functionality, with encrypted passwords & an authorization flow
Pull from a third party API - either client side with AJAX or server-side with an NPM
NPMs that work with an API: Twitter, Yelp, etc. Remember the request module can make API calls server side to any URL.
Have two models
Have two separate models that don't have to be related
Have related models
Models can be related in a one-to-many relationship, for example users can have many posts
Use a CSS framework like Skeleton or Bootstrap
Use React Router



Link to the front end portion:

https://frontenddspotify.herokuapp.com/


Link to the back end portion:

https://backendspotify.herokuapp.com/


Technologies used, approaches taken, and unsolved problems:

For the front end of this project we used majority JavaScript with some CSS and Bootstrap for styling purposes. The most challenging part of this project was connecting to the Spotify API and getting the data to display properly on our page. It was also a challenge to get our back end of the app to listen to the front end the way we wanted to. Once we accomplished those two major obstacles it was just a matter of getting the content on the page and placing it where we wanted.

Our first step was to have a landing page where users could sign in/out of their own personal Spotify accounts. Once they were logged in, a form would appear on the home page where they could create a new playlist, see their already existing playlists, or delete a playlist they no longer want. If a user clicked on one of their existing playlists, they would then be able to see all of the songs in that particular playlist and edit the playlist by adding/subtracting songs of their choosing.

Styling wise we tried to make our page look as close to the actual Spotify page as possible. For this we put the Nav Bar on the left side of the page and also included a header and footer in addition to the main body of the page.

Some unsolved problems we had that we would like to finish if given more time would be to have a responsive design where our page would look like Spotify's depending on if we were on a mobile, tablet, or desktop.