# Tech Perspective Frontend

## **Deploy URL**

[Frontend Deployment](https://scintillating-bombolone-df8732.netlify.app/)

## **Survey URL**

[Tech Perspective Survey](https://tech-perspective-survey.netlify.app/admin)

## **The vision**

![Survey](./public/assets/survey.png)

- The vision compiling diversity data and using it as a teaching tool to bring to light internal biases and ways to be more conscious with regard to inclusivity and diversity .

## **The Problem Domain**

- This project will revolutionize the existing survey data, making it more user friendly and potentially caching historical data.

## **The Importance**

- This product will drastically improve the awareness of internalized biases, discrimination and privilege based on a multitude of factors. This product will serve to bring about a more inclusive and self-aware team.

### **The Project Scope (In/Out)**

![Survey Admin](./public/assets/surveyadmin.png)

#### *In Scope*

*Allow the Admin user to...*

- Create personal accounts.
- Create new surveys linked on personal account.
- Run multiple surveys at once between users.
- View surveys user participated in.
- See results in clear, concise graph.

#### *Out of Scope*

- Only data from created and completed surveys to users will be visible.

### Minimum Viable Product

![Survey Questions](./public/assets/surveyquestion.png)

- **What will your MVP functionality be?**
  - Create personal accounts.
  - View personal account data.
  - Run multiple surveys at once across users.

### Stretch Goals

- **What are your stretch goals?**
  - Provide user with resoures about DEI in the tech world.
  - Stylize chart in more clear, concise manner.
- **What stretch goals are you going to aim for?**
  - Stylize chart in more clear, concise manner.

## **Software Requirements**

### **Functional Requirements**

1. User can create/login to their own accounts.
2. User can create a new survey and share the individual link with others.
3. Users can view the results of the survey they created.
4. Users can view the results of the survey they participated in.
5. Multiple users can run multiple surveys at one time.

### **Non-Functional Requirements**

- **Security**
  - Auth0 will authorize users to login into a personal account.
  - Using the information from Auth0, it will allow users to view their personal data.
  - Users will not be able to view any one else's data.
- **Usability**
  - React bootstrap will put app elements in visually pleasing and familiar format.
  - Chart.js will display the results in a visually appealing format.
  - Routes will allow users to view specific elements on different pages for better organization.

- **Database**
  - Each item belongs to a single location
  - The two databases will be a Student database and a Class database
    - There will be a identifier in the DB associated with the class
  - Each student will have a single class

### **Data Flow**

![Data flow for the survey](./public/assets/surveydata.png)

### DataBase Schemas

```js

ClassSurvey = {
  ClassNumber : Number,
  Identifier : String,
  ClassCount : Number,
  Instructor : String,
  thumbnail : String, //url
  note: String //optional
}
```

## How To Use **The Tech Perspective Survey**

## Step One

- begin by running:
- `git clone` then copy and paste `git@github.com:Meltingpot-Data/techperspective-front.git`

- Do the same for the backend repo:
- `git clone` then copy and paste `git@github.com:Meltingpot-Data/techperspective-back.git`

## Step Two

- run: `cd techperspective-front`
- then (installs node modules): `npm install`
- then (installs dependencies): `npm i express bootstrap nodemon cors dotenv mongoose jwt bcrypt base-64 supertest sqlite3 jsonwebtoken`
- repeat **step two** for 'back'

## Step Three

- Your are going to need to create a `.env` in order to use the server, follow the guide in the provided `.sample.env` file.

## How to Use

- Click on the provided link here: [Survey Admin Portal](https://tech-perspective-survey.netlify.app/admin)

## To start server

- run: `npm start`
*To test the server*

- run: `npm run test`
*To run the tests*

## **Team Meltingpot-Data**

![MPD](./public/assets/MeltingpotData.jpg)

## Our Cooperation Plan

### Team Key Strengths?

*Need to complete*

**Erik** Program Management, React, JavaScript, teamwork, bootstrap-react
**Joey** Front-end Design, creative, communication, leadership, team building, all-around BA
**Emily** Front-end design, layout and CSS
**Ryan** Cool bird Dad, testing/bug hunting, Master of parrot gifs
**Michael** Backend creation, Javascript development and problem solving

**How are we going to utilize these strengths?**

- **Emily** and **Joey** will take point on the creative styling and UI.
- **Ryan** and **Michael** will tackle the backend development.
- **Joey** and **Erik** will co-lead the team and ensure all docs and details are submitted and taken care of.

### Team Professional Competencies

*Need to complete*

1. **Joey** wants to work on leadership and project management.
2. **Erik** wants to work on communication and making his presentations sound more natural.
3. **Emily** would like to refine her teamwork skills.
4. **Michael** Would like to improve his communication and public speaking.
5. **Ryan** endeavors to hone his technical skills.

### Day to day work schedule

*Need to complete*

- 9:00am to 6:00pm 12pm-2pm lunch designed but open to interpretation.
- Morning standup to go over what is planned.
- Afternoon (~5:00PM) will be bringing all the code together and planning for the next day/

## Conflict Plan

*Need to complete*

- **Conflict Resolution**
  - One-on-one discussion,
  - Mediation with another group member,
  - Group discussion,
  - Elevate to the next level as necessary.

## Communication Plan

### **Availability**

- **Everyone** 9am-12pm, 1pm-6pm (PST)

### **Communication Platforms?**

- Slack
- Remo

### Breaks an off hours

*Need to complete*

- As needed but will have planned lunch
- If we start to fall behind?
  - Reevaluate what is MVP for us
- *Communication on off hours*
  - Slack
  - text (for urgent needs)

### Making sure to hear all voices

*Need to complete*

- Everyone will be sharing at stand up and stand down.
- Frame responses with mutual respect.

## Diversity Equity and Inclusion Plan

*Need to complete*

- **Joey** is going to do his best to check his internal biases and assumptions of others.
- **Erik** speak up in challenging situations and bravery.
- **Emily** wants to work on not being so mean to men and take action to reduce stressful situations.
- **Michael** wants to ensure all voices are heard.
- **Ryan** wants to work on examining his assumptions.

## Work Plan

### **Tools for collaboration and workflow**

- Trello: board we used to list and check off various tasks.
- GitHub Organization: Collectively edit our work reliably.

### **Git Process**

*Need to complete*

- Frontend and backend will live on the GitHub
- Making an organization
- Working on own branches
- Push to staging and test
- Otherwise push as needed

### **PR Processes**

*Need to complete*

- Two other reviews for main
- One for staging
- Merging hopeful once a day but as necessary

### **Credit and Co-Conspirators**

- Created by **Jon Rumsey**, **Allen Brazier**, **Liesl White**, and **Simon Son**. Thank you to **Brook Riggio** for all your help with this project and all past contributers to this tech perspective survey! (*Erik Savage*, *Michael Metcalf*, *Joey Hernandez*, *Emily Landers*, and *Ryan Lee*!)

### **Contact the Team**

[Follow Allen on LinkedIn](linkedin.com/in/allenbrazier)

[Follow Jon on LinkedIn](linkedin.com/in/jonathan-rumsey-wa)

[Follow Liesl on LinkedIn](linkedin.com/in/lieslwhite)

[Follow Simon on LinkedIn](linkedin.com/in/sson68x)
