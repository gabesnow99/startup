# startup

SUPER PONG!

https://startup.gabeproject.click

Have you ever wanted to play a classic old game with friends, but don't want to share a screen? Welcome to Super Pong! The idea is to recreate one of the most classic games of all time, but with an added twist: This Pong will have the classic single person mode, but also an option to play with two people, locally or from different devices.

Key Features:
 - Login to Save Progress
 - Single Player
 - Multi-Player on a Single Keyboard
 - Real-Time Play Against Other Players
 - Settings to Change Background and Ball Color
 - Possible Power Ups

Images:
![alt text](https://github.com/gabesnow99/startup/blob/main/IMG_7677.jpg?raw=true)


Simon Project Notes:
- From HTML: This project is interesting. It is relatively simple. The biggest challenge I think is connecting input and outputs. Other than that, it seems like HTML is a matter of simply knowing which building blocks to use and making a correct use of them.
- From CSS: I wondered where the heck the different styles were coming from until I followed the link that's put into the 'head' section. I realized that all of the possible formats are defined very compactly in the file. They are then imported like a package. Also, placing the link there allows the rest of the file to call the different fonts, alignments, etc. Finally, I realized that the "class=" section can include multiple components so some features can be shared and others not between elements.
- From Turning into a service: One of the key things is the idea of nodes. Bascially, there is a single file that acts as connection point between what's going on in the files and the production environment. Express was written to simplify the process.

Other HTML and CSS Notes:
- HTML is purely structure. One of the most useful blocks is "div" in my opinion. It's seems very versitile.
- CSS is all about styling. The big connection between the two sets of code is in class="". The outside class will default to share their settings with their children. The inside classes can override these.

JS Notes:
- It is very important to link the files using script. Sometimes this comes after the HTML code.
- Things can be saved locally, which is very important for things like scores.
- Async/Await is acually pretty useful for this project.
