# Student Dashboard App

Welcome to the Student Dashboard App! This Single Page Application (SPA) built with ReactJS allows instructors to track and display data for different cohorts of students.

https://lively-entremet-6bc212.netlify.app/

## Table of Contents
1. [Local Deployment](#deploy-locally)
1. [About](#about)
2. [Index View](#index-view)
3. [Show View](#show-view)
4. [1-on-1 Notes Section - Form](#1-on-1-notes-section---form)
5. [Aside View - List of Cohorts](#aside-view---list-of-cohorts)

## Deploy Locally
1. Download the server from github
```
git clone https://github.com/10-3-pursuit/project-student-dashboard-reboot-server
cd project-student-dashboard-reboot-server
```
2. Deploy the server locally
```
npm install
npm run dev
```
3. Download the student dashboard 
```
git clone https://github.com/iris-beckham/project-student-dashboard-reboot.git
cd project-student-dashboard-reboot
```
4. Create a .env file in the project folder
1. Create a variable that links to your deployed server
```
//.env
VITE_BASE_API_URL=http://localhost:<YOUR SERVER PORT HERE>/api/students
```
6.  Deploy the student dashboard 

```
npm install
npm run dev
```
7. Access site at the port generated (i.e. http://localhost:5173)

## About
Click on the "About" link to view information about each team member, including their name, GitHub, and a fun fact.

## Index View
- **Student List Count:** Displays the number of students in the currently displayed cohort.
- **Header:** Always shows the title "Student Dashboard."
- **Aside:** Displays a list of seasonal cohorts (sorted ascending/descending) that can be clicked to filter the displayed students.
- **Main:** Shows a list of all students with details like Full Name, Email, Birthday, Profile Photo, and On-Track status.

## Show View
- Clicking on a student card opens a detailed view with additional information.
- **Codewars Stats Heading:** Shows current total, last week's total, goal total, and percent of goal achieved.
- **Scores Heading:** Displays properly formatted percentages for assignments, projects, and assessments.
- **Certifications Heading:** Shows certifications with emojis/icons indicating their status.
- **1-on-1 Notes Section - Form:** Allows instructors to add notes with inputs for name and note. Notes are displayed in a list below the form.

## 1-on-1 Notes Section - Form
- Title: "1-on-1 Notes"
- Form includes inputs for instructor's name, note, and labels for accessibility.
- Submit button clears inputs, and added notes are displayed in a list.
- Notes are saved locally and persist on refresh.

## Aside View - List of Cohorts
- **Aside List:** Shows a continuously visible unique list of cohorts ordered by year and season.
- Clicking a cohort updates the displayed students and changes the page heading.
- Student list count updates to reflect the number of students in the chosen cohort.
- Button functionality to sort the cohort list in ascending and descending order.

## Notes Persistence
- Notes added to each student are saved to localStorage and persist on refresh.
- Includes a count for the number of notes added to each student, updated when a new note is added.