•	What I did: 
Tried to deploy a node.js app on Heroku.
•	Error I got:
2022-09-14T19:12:33.333844+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/activity" host=bb-con-back.herokuapp.com request_id=cf39a02e-70a3-4ea7-ac26-0dead6ae64f1 fwd="81.230.102.28" dyno230.102.28" dyno=web.1 connect=0ms service=30000ms status=503 bytes=0 protocol=https
2022-09-14T19:12:33.336230+00:00 app[web.1]: GET /activity - - ms - -
2022-09-14T19:12:37.345777+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/activity" host=bb-con-back.herokuapp.com request_id=9a1f484d-ddd9-4d4e-a42d-594d68c42a53 fwd="81.230.102.28" dyno230.102.28" dyno=web.1 connect=1ms service=30000ms status=503 bytes=0 protocol=https
2022-09-14T19:12:37.347701+00:00 app[web.1]: ServiceUnavailableError: Response timeout
2022-09-14T19:12:37.347712+00:00 app[web.1]: at IncomingMessage.<anonymous> (/app/node_modules/connect-timeout/index.js:84:8)
2022-09-14T19:12:37.347712+00:00 app[web.1]: at IncomingMessage.emit (node:events:513:28)
2022-09-14T19:12:37.347713+00:00 app[web.1]: at Timeout.<anonymous> (/app/node_modules/connect-timeout/index.js:49:11)
2022-09-14T19:12:37.347713+00:00 app[web.1]: at listOnTimeout (node:internal/timers:559:17)
2022-09-14T19:12:37.347713+00:00 app[web.1]: at processTimers (node:internal/timers:502:7)
2022-09-14T19:12:37.348016+00:00 app[web.1]: GET /activity 503 30001.351 ms – 146
 
•	Solution Heroku recommend:
https://devcenter.heroku.com/articles/preventing-h12-errors-request-timeouts
Install the Node.js timeout module https://github.com/expressjs/timeout It raises a Response timeout exception.
•	What I have done to solve the problem:
Installed connect-timeout,  but could not use it correctly.

# BB-Con-backend

# Short introdution:
This is the backend server with database connection for BB-Con application.

For this project we used MongoDB as database. For the backend code, we used Express JS where we set up a server boilerplate.

# Structure:
Models folder: for all the mongoose schema 
Routes folder: for all the routes
.env file: MONGO_URL

# Setup and installation:

1. Clone this repo with git.
2. Install Nodejs.
3. In the terminal write "npm install".
  This will install all the project dependencies/npm packages

4. To start the app write in the terminal "npm start" or "nodemon start".




