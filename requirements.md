# Software Requirements

We produced a PDF of our software requirements and checked it in to the repository [here](./public/assets/Requirements.pdf)  

## Vision

What is the vision of this product?

We would like to create a web application that allows users to take a survey on DEI (Diversity, Equity, and Inclusion).
What pain point does this project solve?

Diversity, Equity and Inclusion is vital to creating and maintaining a successful workplace; one founded on the principle that all people can thrive personally and professionally. Data gathered from our survey can help tech companies identify where they stand.

Why should we care about your product?

It is a helpful tool that helps an organization understand how its employees feel about the tech company work culture and policies. This survey can help determine how well a company has integrated diversity, equity and inclusion.

## Scope

### IN Scope

Auth0 and MongoDB calls will allow the user to sign into their own private account and be able to create new surveys, share the link with others, view its results, then either archive it or delete it. Individual users will also be able to rename surveys to any appropriate label. Using chart.js and some styling, the results will also be displayed in a more clear and concise format than the histogram that currently exists.  
High overview of each. Only need to list 4-5.  
Individual accounts with own personal survey data.  
Ability to create new surveys on own account.  
Ability to see the surveys you partook in.  
More clear, concise graph format.  

### OUT Of Scope

App will never show survey edit details to users that are not Admins that "own" the survey.  
App might not be 100 percent compatible with tablet or other small-sized screens like smart phones.  

## Minimum Viable Product

Administrators will use Auth0 to get authorization to create and manage their own surveys.
Survey takers that are NOT authorized to access the admin panel will be able to take surveys.
Administrators can only see surveys related to them (they created).  
Multiple users will be able to run multiple surveys at one time.  
Users will be able to rename surveys appropriately.  

## Stretch Goals

Administrators will be able to provide a link to users for filling out surveys en-masse i.e. at a presentation or conference session.  
Styling a chart so that both users and admins can better understand what kind of data the chart displays. This is partially implemented.  
Adding some additional resources about DEI in tech perspective.  
User can view the results of a survey they participated in.  

### Functional Requirements

Administrators can login to their own account.  
Administrators can create a new servey.  
Administrators can share a link and ID to non-administrative users so they can take a custom survey.  
Administrators can view the results of the survey they created.  

## Web Request Response Cycle

[WRRC document for this project](./public/assets/wrrc.JPG)  

The WRRC describes the flow of data in your application.

### Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

Security

> Security essentially describes how we will ensure user information and data stays private. We will be using Auth0 for our app in order to have users login into a personal account. Once they do, they will be able to view their own data and no one else's. This will protect the data of all users and their personal login information.  

Usability

> Effective usability leaves readers with a confident understanding of how to operate the various features of a site. To make usability as effective and concise as possible, we will be using various packages. This includes: react bootstrap and chart.js. React bootstrap will put the various components users access in a visual form and/or shape. Then chart.js will put the results of the survey in a concise and visually appealing format.
