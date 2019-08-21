# VU Voice

Through VU Voice, we hope to create an open platform where students and administration can freely communicate their thoughts/initiatives. We found that 90.2% of students surveyed believe that such an app would help bridge the communication gap. More specifically, we aim to provide the following: 

1) For students: 
- A quick and effective way to voice their suggestions and complaints.
- A highly-visible forum that assures students their opinions are being heard.

2) For administration:
- A channel where administration can promptly respond to students’ concerns and communicate the current initiatives/resources that are available to address those concerns. 
- A centralized platform for direct and honest feedback from students.

# Build Flow

To start checkout to branch testing and pull the git latest changes by using commands.
```bash
git checkout testing
git pull origin testing
```
NPM will be the package manager of choice to collect all the local dependencies in order to keep the repo clean.
```bash
npm install
```
Now all dependencies will be loaded, the project itself can actually be ran. Gulp is the task manager that will automize our scripts. To get a full list of tasks use 
```bash
gulp --tasks
```
## Gulp
The easiest hands off script to run and watch for all JS changes will be 
```bash
gulp develop
```
This command will build Webpack and utilize Babel, launch a BrowserSync server (with full API functioning), create HTML templates with Pug, and finally set a watch for the JS.
In order to test all files use the command 
```bash
gulp test
    OR
npm run test
```
can be used to test the entire spec suite. Functioning for testing only one spec file soon to come.
## Test Framework
The bulk of the testing framework will be handled by Mocha with plugins for Sinon (if expect call isn't enough may need to add 'assert' to require stack). All unit tests for components should have the naming convention <filename>.spec.js and be placed in the same folder as the component. Best practices should be a test for every line of code. Spies on outside services will be handled by Sinon and if testing necessary for server tracker Sinon.sandbox can be used.
## Making Changes
The goal for this project is a clean interface and as such it should be easy for other developers to maintain. To ensure the testing branch and master are never contaminated we will use pull requests and branches to monitor progress. Any none trivial change should be made on a new branch from testing (after pulling latest changes).
```bash
git checkout testing
git pull origin testing
git checkout -b <user handle>/<short title description of changes>
```
Naming convention for new branches should be kebab case (ex: foo-bar-stuff). All new changes should be made to the newly created branch. After first commit to new branch go onto Github and create a pull request with a small description of the new changes. If there are UI changes post a screenshot of the new layout for reviewers to see.  Once the pull request is deemed complete (meaning fully functional and UTs for all new changes or files) at least two other developers should review your code. After two approvals the pull request can be 'squashed and merged' to the testing branch using the Github UI button on the pull request page. Testing will act as our beta version for us to see and test new user experience with. The master branch will be our stable version that we show to faculty and other stakeholders. There should never be direct changes to master branch. Only after a majority vote at a Vyn meeting on the stability of new changes should commits be squashed to master