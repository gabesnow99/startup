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
- Data base notes: Remember! Don't save username and password in the code! They'll generally stored in /etc/environment, though locally I had to write mine into the .bashrc file (Use the "export VAR=var" command, check using "printenv"). Mongo is the database we're using so that the scores don't have to be stored locally.
- Login Notes: One thing that's really interesting is the way that the password is hashed before it is entered into the database. Other than that, the auhorization token is also interesting. I'm fairly sure that's used perform functions while logged in.
- WebSocket Notes: Websocket is used to send messages back and forth. The functions that are key are the on connection function and the on message function. Another important bit is to connect the socket. This is done by calling a new "WebSocket" object which includes the port.
- React Notes: In essence, react seems like a way to reduce the amount of code required for a project, as well as organize things. So far as I can tell, it does't inherently add any functionality. However, it allows the creation of building blocks, like making something out of legos. React is particularly useful for user interface things.

Other HTML and CSS Notes:
- HTML is purely structure. One of the most useful blocks is "div" in my opinion. It's seems very versitile.
- CSS is all about styling. The big connection between the two sets of code is in class="". The outside class will default to share their settings with their children. The inside classes can override these.

JS Notes:
- It is very important to link the files using script. Sometimes this comes after the HTML code.
- Things can be saved locally, which is very important for things like scores.
- Async/Await is acually pretty useful for this project.

Startup Service Notes:
- Node.js is actually the best. I love it. It allow code to be run and things to be output to the console simply by typing "node ___.js" into the command line.
- The big thing about turning it to a service is placing the previous files in a "public" folder and add the required lines of code to an index.js file.
- Mongo is very convenient and simple to use to store data. Passwords are hashed before they are inserted to MongoDB. This way even I can't see the passwords of people. A shame, that.
- Websocket communication can be a beast, though relatively few lines of code go into it. See example code.
- Authentication is used, among other things, to check that a person is logged in. It's also used to verify the login.
