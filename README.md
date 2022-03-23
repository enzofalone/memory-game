# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Enzo Falone**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/hospitable-nice-ocicat

Live preview with GitHub Pages: https://enzofalone.github.io/memory-game/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Timer turns red when it is under 5 seconds
- [x] Hover animation for the start/stop button
- [x] Custom borders for the buttons in order to add a sketchy design that combines with the light colors
- [x] Strikes are shown through an alert and updated under the Start/Stop button
- [x] Used flexboxes in order to arrange all counters within the same input/output row
- [x] Imported local font using @font-face

## Video Walkthrough (GIF)

![](https://github.com/enzofalone/memory-game/blob/main/memorygamev2.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/API/setInterval

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container

https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

https://stackoverflow.com/questions/9419263/how-to-play-audio

https://stackoverflow.com/questions/44172360/github-pages-font-face-not-working

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I specifically tried to create the logic of the guess function by myself. However, I got stuck after the walkthrough as I tried to use a while loop but after walking through what I was doing step-by-step as I was figuring out how to make the player go through his whole turn. I ended up realizing that I could do everything without any loops as the variables were already provided to create the conditional logic as the function is called every time the user clicks any of the buttons, this led me to use the guessCounter variable as the main driver. Furthermore, the timer was something I was having trouble with, as I was creating the interval variable inside the block it was being created alongside with my own variable outside, resulting in two intervals being invoked and my clearInterval call was not enough to solve it as it could not reference the variable created inside the function. To solve this, I had to thoroughly inspect and debug every part it was being called to catch the mistake I did as it was being called every time, I did something in the game. As a result, I did find this problem quickly and successfully had the game flowing as I desired.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would like to learn better about UX/UI design, such as choosing palettes, styling with more complexity the buttons, sticking to one style and being consistent with it across the page, knowing where to place all my elements, and how to make this webpage responsive for cellphones as my main goal is for my website to work everywhere. Additionally, I would like to learn how to align everything in place perfectly without having problems with sizes as I had them with my counters when they are unhidden

Moreover, I would like to learn about how to make the buttons more responsive about the position of the mouse and where it is clicking in terms of not getting a bug when the user drags his click outside the box, where in some cases, the playTone function would stick and would not execute the stopTone button. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would end adding sounds and images as I could not find any short sounds as guitar cords. Moreover, I would make this game infinite and implement a scoreboard in order to show the accumulated points by the user where the score would increase after every successful turn and increasing every time the game is more complex. 

On the other side, I would style everything to fit the whole page as it would make the webpage look more modern. Designing better counters, utilizing cross signs for the strikes and creating a little box for the seconds left in addition to a ticking sound when the time is running out.

Besides, I would also refactorize the code by creating modules for a game manager and audio manager in order to increase the readability and improve the ease of access for other developers to dig into the code without having to scroll back and forth between many lines of codes that are dedicated to many different aspects of the game. In the CSS file, I would refactorize the code by creating different files as well in order to improve organization in case I want to keep working in this project.  

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/c6bb115d298d416cad0ad69ef9be43c6)


## License

    Copyright [Enzo Falone]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
