# Assignment 1 - ReactJS app.

Name: SIJIE HE

## Overview.

A React app that uses the TMDB database to get movies and actors

### Features.

#####  Overall Features,

+ Feature 1 - 10 new TMDB endpoints.
+ Feature 2 - 10 new views.
+ Feature 3 - Routing （Including parameterized URL).
+ Feature 4 - Dynamic and interactive UI, Material UI.
+ Feature 5 - Flitering and Sorting
+ Feature 6 - TMDB user authentication.
+ Feature 7 - Storybook support.
+ Feature 8 - Web Form (reviews, log in).
+ Feature 9 - Styled Components 3rd party components.

 ##### Details,

 + Feature 1 - Popular actor List Page: The user can see all the popular actors in the form of card sorting by popularity. 
    + Actor sort switch button : User can click the buttons to actors by DECS or ASC.
    + The user can add interested actor to the actor list
 + Feature 2 - Actor Page: User can view the Actor's basic information.
 + Feature 3 - Use new Material UI component 
    + build a temporary drawer - entrance for ( Favorite Movies, Play List,NowPlaying Movies,Toprated Movies,Popular Movies,Popular Actors,Liked Actors,Search TV) combine this new element into the old site components
    + switch Button - Click the button to switch between different states
    + rating Button - The user can slide the mouse to rate the movie
 + Feature 4 - new Detail Page, add the buttonGroup contain the links to the similar movies , recommentation movie, new function - see the related cast.
    + The user can the related information below the movie details.
    + The user can click the hide button to return the movies datails page.
 + Feature 5 -  Credits page : the user can see the credits about the movie and can link to the full information about the cats 
 + Feature 6 - Search tv page : the user can enter the name about tv and get the poster and name about tv
 + Feature 7 - use the TMDB account to login .
 + Feature 9 - Toprated page : the user see the toprated movie and add it to playlist
 + Feature 10 - Popular page : the user see the popular movie and add it to playlist

## Setup requirements.

npm install

If you make any change 

```
npm run build 

npm run analyze
```
## API endpoints.

+ Discover list of movies - /discover/movie
+ Movie details - movie/:id
+ Movie genres - /genre/movie/list
+ Nowplaying movies -movie/now_playing
+ Popular movies on TMDB. - movie/popular
+ Top rated movies on TMDB. - movie/top_rated
+ Upcoming movies in theatres. - movie/upcoming
+ Posters about a movie. - movie/{movie_id}/images
+ Reviews for a movie. - movie/{movie_id}/reviews
+ Recommended movie. - movie/{movie_id}/recommendations
+ Cast and crew for a movie. - movie/{movie_id}/credits
+ popular people on TMDB. - person/popular
+ Person details . - person/{person_id}
+ Images for a person. - person/{person_id}/images
+ Similar movie. - movie/{movie_id}/similar
+ Search TV. - search/tv
+ Login authentication. - authentication/token
+ TMDB account - /account

## App Design.

### Component catalogue.

+ screenshot from the Storybook UI

![](./images/storybook.jpg)

### UI Design.

[ Insert screenshots of the __new/modified app pages__ you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

>I redesigned the homepage and changed the style and layout of the page.

![ ](./images/homepage.png)

>I added a temporary drawer called Menulist to sideHeader, and clicked on it to see some of the other pages
![ ](./images/sideheader.png)

>Now we can the temporary drawer on the left of page and can click the any link below.
![ ](./images/drawer.png)

>We click on the "Popular Actor" button to see the entire actor page.
![ ](./images/actor.png)

>Now we see the entire popular actor list page. On the left side of the page, there is a search and sort card that allows us to search for actor names in the input field and sort them by popularity. (Descending by default)
![ ](./images/sort.png)

>Click the switch button to change the sort of popularity
![ ](./images/swtich.jpeg)

>We can also enter the name of the actor you want to search in the input box, and select the sort status
![ ](./images/sortDECR.png)

>
![ ](./)

>
![ ](./)

>
![ ](./)
![ ](./)
![ ](./)
![ ](./)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these (we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).


-------------------------------------------
# Assignment 1 - Agile Software Practice.

## Automated Testing.

### Best test cases.

[ List the top 4/5 test cases ('it' blocks), in your opinion, from your test suite that best demonstrate your competency in writing Cypress test code. Specify the test file name and the starting line number of the 'it' block, 

e.g.
+ cypress/integration/mustWatch-movies-page.spec.js - line 24
+ cypress/integration/actor-bio-page.spec.js - line 32
+ etc

### Cypress Custom commands (if relevant).

[Specify the test file(s) that contain custom Cypress command implementations.]

e.g.
+ cypress/integration/mustWatch-novies-page.spec.js
+ cypress/integration/actor-bio-page.spec.js

## Code Splitting.

[Show a screenshot of the 'build/static/js' folder of your project]

![](images/build.png)

## Independent learning (If relevant).

[State which aspect of the Outstanding grading spectrum you addresses. Include relevant screenshots and links to services used, e.g. Percy project, Deployed app