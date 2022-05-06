## Software Requirements
https://docs.google.com/document/d/1zr_dOW77yNfJ_0Bwb5xcXPCBZfzwfn4w2Sgv3Nh4OGs/edit#

### Vision

Minimum Length: 3-5 sentences
What is the vision of this product?
We would like to create a web application that allows users to take a survey on DEI (Diversity, Equity, and Inclusion).
What pain point does this project solve?
Diversity, Equity and Inclusion is vital to creating and maintaining a successful workplace; one founded on the principle that all people can thrive personally and professionally. Data gathered from our survey can help tech companies identify where they stand.
Why should we care about your product?
It is a helpful tool that helps an organization understand how its employees feel about the tech company work culture and policies. This survey can help determine how well a company has integrated diversity, equity and inclusion.
### Scope (In/Out)
IN - What will your product do
Describe the individual features that your product will do.
Auth0 and MongoDB calls will allow the user to sign into their own private account and be able to create new surveys, share the link with others, view its results, then either archive it or delete it. Individual users will also be able to rename surveys to any appropriate label. Using chart.js and some styling, the results will also be displayed in a more clear and concise format than the histogram that currently exists. 
High overview of each. Only need to list 4-5
Individual accounts with own personal survey data
Ability to create new surveys on own account 
Ability to see the surveys you partook in 
More clear, concise graph format
OUT - What will your product not do?
These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
My app will never show survey edit details to other users. 
- Minimum Viable Product vs
What will your MVP functionality be?
Users will be able to create personal accounts that will only show surveys related to them. Multiple users will be able to run multiple surveys at one time. Users will be able to rename surveys appropriately. 
- Stretch
What are your stretch goals?
Styling a chart so that both users and admins can better understand what kind of data the chart displays.
Adding some additional resources about DEI in tech perspective. 

What stretch goals are you going to aim for?
Styling a chart that’s clear and concise. 
### Functional Requirements
List the functionality of your product. This will consist of tasks such as the following:
User can create/login to their own accounts
User can create a new survey and share the individual link with others
User can view the results of the survey they created
User can view the results of a survey they participated in
- Data Flow
(./public/assets/wrrc.JPG)

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.
### Non-Functional Requirements (301 & 401 only)
Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

-Security
Security: Security essentially describes how we will ensure user information and data stays private. We will be using Auth0 for our app in order to have users login into a personal account. Once they do, they will be able to view their own data and no one else's. This will protect the data of all users and their personal login information. 
-Usability
Usability: Effective usability leaves readers with a confident understanding of how to operate the various features of a site. To make usability as effective and concise as possible, we will be using various packages. This includes: react bootstrap and chart.js. React bootstrap will put the various components users access in a visual form and/or shape. Then chart.js will put the results of the survey in a concise and visually appealing format.



