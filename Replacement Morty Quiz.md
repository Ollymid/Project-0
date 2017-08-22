## Replacement Morty Quiz

#### Installation and setup

For the optimal installation of this game, you should first do the following:

- Download or clone the repo
- `npm i` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

#### A brief description of this game

I am bordering on the fanatical when it comes to Rick and Morty, the adult cartoon series from Adult Swim. The premise of this game is that Rick needs a new Morty to replace his old one, so you have to answer 15 questions about the show or face death. The user has 3 "Morty" buttons that help them answer the questions - Mr Meeseeks(phone a friend), The Jerrify button (50:50) or Ask the Rick-dience(ask the audience).
The user also collects flurbos (integalactic currency) and if they equal the high score they can keep them.

#### Technologies used

You should add a list of the software and languages used in the project, for exmaple:

- HTML 5
- SCSS
- JavaScript ES6
- jQuery 3.10
- Gulp
- NPM
- Git & Github

#### Challenges faced

I stored my questions and answers within objects that were transferred using jquery to the answer buttons on the page. The first challenge was to find a means of checking that the button that was clicked was the correct answer.
The second challenge once this one was overcome was to then again making sure the correct button was checked - and the javascript was doing some funky things - saying that the indexes of the 2 item array were 1 & 2 rather than 0 & 1. This was avoided once the event listener was given more specific information about which buttons to listen to.
I also had the issue of randomising the questions, so they appeared in random order. I solved that with a simple fisher-yates shuffler, that works well.


#### Final Say


I have many upgrades I wish to carry out in future:

- Improve the overall styling.
- I want to create a 2 player mode.
- add a timer to the questions.
- I want to throw in some more Morty Buttons that will help (or hinder) the user with the quiz.
- I want to include animation of elements.

https://github.com/Ollymid
