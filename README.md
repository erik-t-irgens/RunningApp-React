# Running App (Name in Progress)

#### _An application intended to allow users to pair with other users, create events, and create tracks with the intention of running in pairs. - September 21, 2019_

#### _By **Erik Irgens**_

## Description

This application is designed to accomplish the following, in short: 
1. Allow users to who feel unsafe to run alone to find like-minded/paced/gendered pairs
2. Find running routes in unfamiliar areas that are rated by other users
3. Create groups or events for any user needs

## Component Tree Hierarchy

### Overview of the entire tree
As you can see, this tree is quite large. However, it serves as a way to nearly completely break down all separated and necessary components in each tree.
![Untitled Diagram](https://user-images.githubusercontent.com/49962295/65380147-a6e27500-dc89-11e9-9bcc-10bd97556b2e.png)

### APP, Stack, INDEX, and Authentication
Starting at the top, you can see that there is a main App component. Below that, it will use STACK component to stack the information presented in a simple, vertical alignment.

The Regsiter and Login components are offshoots of INDEX, because the rest of the application will not be rendered or returned unless a user has been authenticated.

![1](https://user-images.githubusercontent.com/49962295/65380164-e90bb680-dc89-11e9-998c-8bcb7927993e.PNG)

The AUTHENTICATION branch is the gateway to the rest of the app: 

![2](https://user-images.githubusercontent.com/49962295/65380170-207a6300-dc8a-11e9-9b31-e22e4fc19dc9.PNG)

### Main level view components (User, Track, Event, Home, etc.)

Beneath the gateway AUTHENTICATED component ("/app" route), we have the following main components: 

 #### Header - This is here because it will  now be rendered on every view that an authenticated user can see, not in Register or Login. This will include things such as navigation buttons, a button to view a Drawer component (which will show the user buttons for settings, and the like), and will generally be used for navigation and understanding of view for the user.
    
![HEADER UNDER APP](https://user-images.githubusercontent.com/49962295/65380179-b9a97980-dc8a-11e9-9dae-012d9eb5b8e0.PNG)
    
#### Home - The "home" page, or the thing that is first rendered (with an "/app/home" route) will display a list of recommended items - from matching users, to nearby tracks, and nearby events as well. These are small "Galleries" that will present information of each of these in a consistent style.
    
![HOME UNDER APP](https://user-images.githubusercontent.com/49962295/65380183-f2e1e980-dc8a-11e9-9017-71eb7e62f5e4.PNG)
    
The drawer will give access to Settings ("/app/user/settings") which will allow the current user to edit their profile information. This uses several components that will be rendered with buttons, input fields, and the like.
    
![SETTINGS UNDER APP](https://user-images.githubusercontent.com/49962295/65380194-12791200-dc8b-11e9-894d-d5b8e9f07ac9.PNG)
    
#### User - This route ("/app/user") will present a list of users (with the Gallery) given a certain search criteria. Each user will be inside a Card, which is presented in the Gallery. The summary refers to a minified version of the data from a User's profile for the purposes of display only (perhaps just a profile picture, and their name and gender).
    
![USERS UNDER APP](https://user-images.githubusercontent.com/49962295/65380209-418f8380-dc8b-11e9-9252-84fc347ce1f4.PNG)
    
#### Track - The way that these are displayed are identical to the User component above, with the exception now that there is a CREATE component for the creation of a new track by a user. 
    
![TRACK UNDER APP](https://user-images.githubusercontent.com/49962295/65380232-a3e88400-dc8b-11e9-9265-fc0bb47b00f5.PNG)

#### Event - This is identical to the Track component above, except that Events can be made with Tracks within them (such as creating a new event that takes place in a specific pre-made track.)
    
![EVENT UNDER APP](https://user-images.githubusercontent.com/49962295/65380246-c8dcf700-dc8b-11e9-84d3-8574acb9f7be.PNG)

### Component list and definitions

For the sake of readability, not all components that will be defined in the application were listed in the above component tree. This will account for that, with a complete list of all components - in no particular order.

1. Card - Consistent style in which users, tracks, and events will be displayed within galleries
2. Gallery - A "list" component that will take whatever data (summary) it is given and display it in a carousel for perusal.
3. User Summary - A summarized version of data representing a user.
4. Event Summary - A summarized version of data representing an event. 
5. Track Summary -  A summarized version of data representing a track.
6. Title - Styled component that will be present on "/app/home" to display a Title for each section of Galleries.
7. Header - Omnipresent on all pages after authentication
8. Footer - Omnipresent on all views (brfore and after authentication)
9. Register - Registration
10. Login - Authentication
11. NavButton - Navigatory styled button in the Header component
12. Avatar - A style component to display a user's image (On details, in the drawer, or in a gallery)
13. Drawer - A side bar that will display when a specific NavButton is pressed (hamburger) and will show Drawer Buttons
14. Drawer Button - A style component that will be the style of buttons within the Drawer component
15. Badge Component - A wrapper that will include a NavButton and an Avatar (this will show a little Edit button on the bottom of the user's profile image, or any section of their own profile)
16. Profile Buttons - A style component on a user's setting page for Edit, Save, and Cancel (next to an input or field)
17. Field Component - A component that contains a Field Display component, and a Profile Button component ((Name: <Info>) Button)
18. Field Display - A component containing the single property of the user object (Name: <Info>)
19. Field Edit - A component that contains a form to replace the Field Display, and contains Profile Buttons ((Name: <Input> Buttons)
20. Input - This is actually a list of several other input components, such as TEXT, DATETIME, RANGE, SLIDER, etc.
21. CTA Button - Call to Action buttons, which will be things such as "SAVE", "CREATE", "DELETE" or any major functional buttons on any given page. These will indicate importance of button functionality to the user. Consistent styling.
22. Map Component - This is still loose. KML data and API may be determinate on how this component is changed in the future.
23. Route Component  - Same as above
24. Home
25. User
26. User Details - Full, unminified data representation of a specific User.
27. Track
28. Track Details - Full unminified data representation of a specific track.
29. Event
30. Event Details - Full unminified data representation of a specific event.







## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/erik-t-irgens/RunningApp-React
    ```
2. Install the dependencies
    ```
    $ npm install
    ```
3. Run the application in the root directory
    ```
    $ yarn start
    ```
4. If ```$ yarn start``` doesn't automatically direct you to your default browser, visit the MVC localhost:3000/
    ```
    localhost:3000/
    ```
## Technologies Used
* JavaScript, CSS, HTML, React, Node, yarn


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Support and contact details

_Please contact Erik Irgens with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Erik Irgens_**

