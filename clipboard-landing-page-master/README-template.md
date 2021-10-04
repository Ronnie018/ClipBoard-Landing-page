# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

[Mobile](https://snipboard.io/j0gX8l.jpg)
[desktop](https://snipboard.io/2N8Wu1.jpg)

### Links

- Live Site URL: [Clipboard Landing Page]()

## My process

### Built with

- Semantic HTML5 markup
- Moduled CSS
- Flexbox
- CSS Grid


### What I learned

I learned to avoid using width on my divs, now i'm using max-width instead of it;

If the div's min-width becomes bigger than my screen width, i will have some strange problems;

I'm contantly applying some patterns on my code that makes it more organized and easy;

Before this challenge, im using more grid-layouts instead of flex and float;

I discover that i can use multiple classes on a tag;

Even i haven't used relative units in every css, i learned that it's better.


```HTML
      <a href="#" class="download ios">Download for iOS</a>
```
```CSS

/*moduling*/
@charset "UTF-8";
@import url(./outlines.css);
@import url(./first-page.css);
@import url(./computer-section.css);
@import url(./device-section.css);
@import url(./features-section.css);
@import url(./footer.css);

/*relative units*/
h1{
    font-size: 3.6rem;
}

/*It was very useful to me*/{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(32rem, 1fr))}
```

### Continued development

I still have so much difficultity setting the images sources in HTML...
I will give better names for my classes, become faster on solving problems, learn to change colors of my svg, think more before start to code;

### Useful resources

- [Grid layout tutorial](https://youtu.be/R7gqJkdc5dM) - After looking a lot for the solution to my problem with the placement of items in flexbox, I discovered through this video that I should be using grid.

## Author

- Frontend Mentor - [@Ronnie018](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@BrittoRonnie](https://www.twitter.com/BrittoRonnie)

## Acknowledgments

(https://www.frontendmentor.io/profile/pikamart)
It took 4 days of error to reach this result, and I could not leave and consult the feedback that the
Raymart Pamplona left on my first challenge.