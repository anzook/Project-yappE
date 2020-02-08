# Project-yappE
Team Repo for yappE

Weclome to yappE!!

YappE is a Johns Hopkins Coding Bootcamps course project developed by Alex Zook, Phill Mitchell-Matsuyama, Mike Havrilak and Jody Jones.

YappE is an full stack web application for petowners to keep track of your pets daily, weekly, monthly or annual activities including walks, "bathroom" runs, feeding times, last checkups and so on. We have taken all our knowledge learned thus far in the course and implemented it into this app.

As A Pet Owner.
I want to know my pet's activities.
So that I can share with my family the family pet's activities.

For this app we utilized Node, mysql, sequelize, process.env, javascript, jquery, Bulma for CSS and HTML.

In order to deploy this app you need to do your npm installs for my mysql and sequelize. Then run your schema db in mysql. Once your database is set up you need to establish your .env file with the correct password. Once all set up run the server.js file.

The app starts on the landing page which prompts you to either Sign Up or Log In. Jquery sets up the automation for the responsiveness. Depending on whether you are a New User signing up or an Existing User logging in, the app will take you to two different pages. Sign Up takes you to the Initial Add page where you will be able to create your pet's profile. Once added the app takes you to a Caretaker Add page in which you can add an additional caretaker who can log your pet's activities once in the Profile page. After you complete the Caretaker Add page the app takes you to your pet's profile page where you will be able to log your pet's activities.

The app is set up with a number of folders. Config contains the config.js and passport.js files. DB contains our sql database files. Models contains our sequelize files. Public file contains the UI/UX files including our jquery, CSS, HTML and images. The Routes folder stores our page and API routes files.

Hope you enjoy!
