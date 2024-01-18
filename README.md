# CS260_startup
### Elevator Pitch 

Have you ever wanted to set new goals but don't know where to start? What if you wanted to have a easy way to write down all your goals and keep track of them consistently? The goal tracker allows you to store all of your goals in a secure place, make an action plan, review your progess easily, and achieve greater success in your day to day activities. As you create a goal, it generates a plan, date, and progress bar that allows you to check up on your goal and see how much you've accomplished.

### Design 
![Photo 1](../Design%20Examples/Home%20Page.jpg)
![Photo 2](../Design%20Examples/Goals%20Page.jpg)
![Photo 3](../Design%20Examples/Add%20Goals%20Page.jpg)
![Photo 4](../Design%20Examples/Previous%20Goals%20Page.jpg)

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

