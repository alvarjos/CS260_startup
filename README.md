# CS260_startup
### Elevator Pitch 

Have you ever wanted to set new goals but don't know where to start? What if you wanted to have a easy way to write down all your goals and keep track of them consistently? The goal tracker allows you to store all of your goals in a secure place, make an action plan, review your progess easily, and achieve greater success in your day to day activities. As you create a goal, it generates a plan, date, and progress bar that allows you to check up on your goal and see how much you've accomplished.

### Design 
![Photo 1](./Design%20Examples/Home%20Page.jpg)
![Photo 2](./Design%20Examples/Goals%20Page.jpg)
![Photo 3](./Design%20Examples/Add%20Goals%20Page.jpg)
![Photo 4](./Design%20Examples/Previous%20Goals%20Page.jpg)

### Key Features
* Secure Login over HTTPS
* Ability to create new goals easily
* Display of current goals 
* Ability to edit current goals 
* Previous goals are stored safely 
* Ability to receive notifications(emails) about upcoming goal dates 

### Technologies
- HTML - Use correct HTML to create the structure for the application 
- CSS - Apply styling that matches each page, creates a good aesthetic, and fits on different screen sizes 
- JavaScript - Provides login, goal display, displays updated progress bar 
- Service - Backend service with endpoints for:
    - Login
    - Add goals
    - Update progress bar 
    - Grab Inspirational Quote from Web Service 
- DB/Login - Stores data/goals from each user based on login information 
- Websocket - As you update your goals, you will see the progress bar move up, along with your friends goals 

# Specification Deliverables

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML, and was a little confused on how advanced you wanted us to go with this deliverable, so I added some CSS

* HTML Pages - 4 Pages that reprsent the home/login page(index.HTML) 
    - A page to view your current progress(homePage.HTML)
    - A page to add new goals(addGoalPage.HTML) 
    - A page to view your friends goals and progress(friendsGoalPage.HTML) 
* Links - I set up all the pages to link to one another through a navigation bar at the top, or through the login page
* Text - Each goal and their action plan are represented in text below the progress bar on homePage.html
* Image - I added a nature image on the login page to give a motivational aspect 
* DB/Login - I added an input box for username and password in the login page. The user's goals and their associated
friends are then pulled from their user information/database
* Websocket - The friendsGoalPage will update information via the progress bar and counter in realtime as people update their goals and add new ones



