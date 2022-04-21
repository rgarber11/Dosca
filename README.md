<img src="./dosca-whiteboard/ui/collaborative-whiteboard/src/assets/Doscafull.png" width="500"/>

A modern online whiteboard that promotes safe and interactive learning between students and teachers.

### Tech Stack
* MongoDB
* Express.js
* React.js
* Node.js

### How to use Dosca
1. Teacher creates whiteboard lobby using the "Create Whiteboard" button on the landing page.
2. Students join a whiteboard lobby using the "Join Whiteboard" button and input both a username and the corresponding whiteboard lobby code.
3. If lobby code fails to display, use diagnostic lobby code 1234.

### Creating a whiteboard lobby
<img src="./dosca-whiteboard/ui/collaborative-whiteboard/src/assets/createlobby.gif" width="500"/>

### Joining and drawing in a whiteboard lobby
<img src="./dosca-whiteboard/ui/collaborative-whiteboard/src/assets/collaborativedrawing.gif" width="500"/>

### Instructions to run:
1. Prerequisites: latest version of Node.js running on machine.
2. In terminal, CD into dosca-whiteboard/server
3. Run **npm install** and wait for node modules to download.
4. Run **npm start** and wait for the startup confirmation.
5. Open a seperate terminal window, CD into dosca-whiteboard/ui/collaborative-whiteboard
6. Repeat steps 3 & 4; Your browser will launch Dosca.
