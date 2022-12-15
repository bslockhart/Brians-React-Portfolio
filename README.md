# Brians-React-Portfolio

## Description

Being a web developer means being part of a community. We all need a place to share our projects. Not only for applying for jobs or working as a freelancer; but also, to share our work with fellow developers and collaborate on future projects.

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [Technical Acceptance Criteria](#technical-acceptance-criteria)
- [Deployment](#deployment)
- [Application Quality](#application-quality)
- [Repository Quality](#repository-quality)
- [Submission](#submission)

## License

This project is license under MIT ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Installation

1. Clone the repository from GitHub
1. Install `node.js`
1. Run `npm install` to install dependencies.
1. Run `npm start` to start the web server and connect

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Screenshots

## Technical Acceptance Criteria

- Satisfies all of the preceding acceptance criteria plus the following:
- Application must use React to render content.
- Application has a single Header component that appears on multiple pages, with a Navigation component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
- Application has a single Project component that’s used multiple times in the Portfolio section.
- Application has a single Footer component that appears on multiple pages.
- Application must be deployed to GitHub Pages.

## Deployment

- Application deployed at live URL.
- Application loads with no errors.
- Application’s GitHub URL is submitted.
- GitHub repo contains application code.

## Application Quality

- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application uses a color scheme other than the default Bootstrap color palette.

## Repository Quality

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a quality README file with description, screenshot, and link to deployed application.

### Submission

- Date Submitted: December 14, 2022
- You are required to submit BOTH of the following for review:

1. The URL of the functional, deployed application: https://bslockhart.github.io/Brians-React-Portfolio/
2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project: https://github.com/bslockhart/Brians-React-Portfolio
