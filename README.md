# Student Dashboard App

Welcome to the Student Dashboard App! This Single Page Application (SPA) built with ReactJS allows instructors to track and display data for different cohorts of students.

## Table of Contents
1. [About](#about)
2. [Index View](#index-view)
3. [Show View](#show-view)
4. [1-on-1 Notes Section - Form](#1-on-1-notes-section---form)
5. [Aside View - List of Cohorts](#aside-view---list-of-cohorts)

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