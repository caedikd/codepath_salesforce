# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Caedi Seim**

Time spent: **8** hours spent in total

Link to project: https://simon-sings.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- added links & a styled UI that looks more "game-friendly"

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Alt Text](http://g.recordit.co/Ve9HpnMwPD.gif)
[link to gif](http://g.recordit.co/Ve9HpnMwPD.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- StackOverflow
- https://coolors.co/5f634f-9bc4cb-cfebdf-e2fadb-eef0bd
- https://www.w3schools.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   A few challenges I encountered when creating this submission included trying to understand the Javascript for the music implementations as well as attempting to create a website that looked somewhat professional. I think my main issue with the javascript was actually just attempting to figure out what was going on. For example, there were some audio-specific calls that I came to understand called part of the audio-processing API. To aid my understanding of this, I had to write a little pseudo-code for the javascript for methods and other calls to the API that I was not initially understanding. I suppose the drive to understand it a little better was mainly because I still wanted to be able to feel like I had created something even with the step-by-step instructions. 
   
   I also felt like I really wanted to make something that looked both unique and fit my personality as I was the one creating it. Initially, I just jumped right into coding and made the basic functionality and figured I would think up a design on the spot. I ended up with something that looked vaguely like the demo but I felt like the design was much too elementary. For example, I wanted the design to look simple without looking unintentionally so. A major issue I had was actually just with text because I felt like a serif font might be a little bit over the top, yet a san-serif font like Arial made the already bare website look hacked together. I figured the best way to go about this was to think up a theme (I went with muted-green colors as the sounds of the game seemed to fit that mood) and draw out my plan or wireframe for the website design and then search on Google or StackOverflow for how to go about implementing the design. After knowing what I wanted and how to search for it, I was able to design the website exactly how I intended, such as by adding fonts from Google's open source fonts, adding color, and even adding some interactivity with the hover.
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  
   After completing this task I have a lot of questions about web design. In regards to the layout of the website, is there a faster way to go about the design process as CSS feels oddly clunky and a lot of work for a low reward. Is every site strictly made through raw HTML, CSS, and Javascript, or are these more of building block languages that work in conjuction with other libraries like React. Likewise, I think I would like to see this website be able to work on mobile devices or smaller screens, and I was wondering how or if the code would have to change to perform in that way. In my code, I was also able to use javascript to ask for user input and then use that input as part of my code. However, I was curious if there could be somewhere to save all this data (that was not in my local javascript code) as so many sites currently host login programs. If so, what would the data limits be, and how might I go about connecting that to my current code. 
  
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had a few more hours to work on this project, I would would most likely be exploring the sound API a little more and adding more features within that. For example, I would probably want to add some sound effects on clicks or on game wins or losses. I also wrote that the game might not be accessible for colorblind/blind people, however I actually think it could also be arranged such that instructions were read aloud and the keys were played a little louder, making this a primarily sound based game. I also wanted to implement a leader board for the highest rounds people would play (as it gets faster each round). However, I couldn't figure out how to easily save all that data from each play after reloading the website, so I think figuring something like that out would be especially cool. I asked for user input, but I think the alert and prompt does not really fit in well with the theme of the website, so I would also like to either change that or make it so that the website itself has a place for input. For example, I think I'd like it if the website had a place to enter the number of rounds instead of that being a pop-up question prompt that it is right now. 
## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=MZuVNg8_ghI)

## License

    Copyright Caedi Seim

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
