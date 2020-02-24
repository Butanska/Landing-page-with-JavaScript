# Landing Page Project
Udacity Front End Developer Nanodegree Program

## Table of Contents
* [Description](#description)
* [Languages](#languages)
* [Dependencies](#dependencies)
* [Opening the project in a browser](#opening-the-project-in-a-browser)
* [Navigation](#navigation)
* [Scroll to anchor](#scroll-to-anchor)
* [Section active state](#section-active-state)
* [Media queries](#media-queries)

## Description
The project is part of Udacity's Front End Developer Nanodegree Program. 
The goal of the project was to build a landing page and add functionality to the landing page using JavaScript. Specifically, the following landing page behavior had to be ensured:
+ Navigation: Navigation is built dynamically as an unordered list.
+ Section Active State: It should be clear which section is being viewed while scrolling through the page.
+ Scroll to Anchor: When clicking an item from the navigation menu, the link should scroll to the appropriate section.

## Languages
Code with:
+ HTML5
+ CSS3
+ JavaScript

## Dependencies: 
+ Google Fonts

## Opening the project in a browser
The project can be opened in a browser by opening the index.html file.

## Navigation
A navigation bar with links of all sections in the landing page is present at the top of the browser window at all times to ease navigation through the page. 
Features:
+ The navigation bar is built dynamically as an unordered list by looping through all existing sections in index.html and creating corresponding list items in the UL. Id and class name is added for each new list item.

## Scroll to anchor
To go to the desired section, click on the respective section link on the navigation bar.
Features:
+ An event listener for clicks on items on the navigation bar is added, which scrolls to the anchor ID of the respective section using the window.scroll method (smooth).

## Section active state
The active section beeing viewed by the user changes background color and the corresponding item on the navigation bar is highlighted.
Special attention was paid to ensure that the section viewed becomes active when it reaches the middle of the viewport (i.e. it is at the eye-level of the user).

## Media queries
To improve user experience, additional styling changes are introduced for some mobile devices. The Window interface's matchMedia() method is used to add a media query for scrolling to anchor ID of a section via click on the navigation bar for mobile devices with max-height of 414px (landscape). The padding of the landing containers of each section is also decreased in order to improve visibility on screens with smaller height.