![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Replacement Morty Quiz

<figure>
	<a href="https://lit-eyrie-29646.herokuapp.com/"><img src="http://i.imgur.com/p38zHkQ.png"></a>
	<figcaption>My first project at GA: Replacement Morty Quiz - a basic trivia game.</figcaption>
</figure>

#### Run Locally - Installation and Setup

For the optimal installation of this game, you should first do the following:

**Note**: You'll need to have `gulp-cli` installed globally
-  Download or clone this github repo
- `npm i -g gulp-cli` to install dependencies
-  Run `gulp` to compile the source code and open in browser


#### View Online

- [View on Heroku](https://lit-eyrie-29646.herokuapp.com/)
- [View on Github](https://github.com/Ollymid/project-0)

### Description

I am bordering on the fanatical when it comes to Rick and Morty, the adult cartoon series from Adult Swim. The premise of this game is that Rick needs a new Morty to replace his old one, so you have to answer 15 questions about the show or face death. The user has 3 "Morty" buttons that help them answer the questions - Mr Meeseeks(phone a friend), The Jerrify button (50:50) or Ask the Rick-dience(ask the audience).
The user also collects flurbos (integalactic currency) and if they equal the high score they can keep them.


<figure>
	<a href="https://lit-eyrie-29646.herokuapp.com/">
    <img src="http://i.imgur.com/7cSUeIQ.png">
  </a>
	<figcaption>
      The main game screen viewable by the user showing the answer options and the helper buttons
  </figcaption>
</figure>


<figure>
	<a href="https://lit-eyrie-29646.herokuapp.com/"><img src="http://i.imgur.com/w6rVzGy.png"></a>
	<figcaption>Players can use the morty buttons to help them answer the questions - for example the Ask a Meeseeks Button gives the player the correct answer.</figcaption>
</figure>

### Technologies used

The list of the languages, frameworks etc used in the project:

- HTML5
- SASS
- JavaScript (ES6)
- jQuery
- Gulp
- NPM
- Git
- Github
- Heroku

### Challenges faced

I stored my questions and answers within objects that were transferred using jquery to the answer buttons on the page. The first challenge was to find a means of checking that the button that was clicked was the correct answer.
The second challenge once this one was overcome was to then again making sure the correct button was checked - and the javascript was doing some funky things - saying that the indexes of the 2 item array were 1 & 2 rather than 0 & 1. This was avoided once the event listener was given more specific information about which buttons to listen to.
I also had the issue of randomising the questions, so they appeared in random order. I solved that with a simple fisher-yates shuffler, that works well.

### Making It Better

I have many upgrades I wish to carry out in future:

- Improvement to the UI in terms of styling and added animation
- I want to create a multiplayer mode.
- add a timer to the questions.
- I want to throw in some more Morty Buttons that will help (or hinder) the user with the quiz.
- Add namespacing.
