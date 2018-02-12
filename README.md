# Readable

Readable is an app has posts and comments like Hacker News and Reddit. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

## Getting Started

### Installing

```
git clone https://github.com/jayjongcheolpark/readable.git
cd readable

#for server
npm install
npm start

#for frontend
cd frontend
npm install
npm start

```

### Demo

![Demo](https://user-images.githubusercontent.com/13275149/35788076-e0391a00-0a00-11e8-9337-973ad6ab9727.png)

[https://readable-udacity.herokuapp.com/](https://readable-udacity.herokuapp.com/)

## Acknowledgments

### Functionality (requirements)

- Default (Root)
    - should list all available categories, which should link to a category view for that category
    - should list all of the posts
    - should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
    - should have a control for adding a new post
- Category View
    - identical to the default view, but filtered to only include posts with the selected category
- Post Detail View
    - should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
    - should list all of the comments for that post
    - should have controls to edit or delete the post
    - should have a control to add a new comment.
    - implement comment form however you want (inline, modal, etc.)
    - comments should also have controls for editing or deleting
- Create/Edit View
    - should have a form to create new post or edit existing posts
    - when editing, existing data should be populated in the form

### Additional Functionality
#### Using Redux and Redux-Saga
To use redux and redux-saga is easier to manage state and asynchronous things, more efficient to execute, simple to test, and better at handling failure.

#### Storybook
Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

![Storybook](https://thumbs.gfycat.com/AmusedLinedIndianskimmer-size_restricted.gif)

Storybook is deployed on [https://jayjongcheolpark.github.io/readable/](https://jayjongcheolpark.github.io/readable/)

#### Deployment
This App is deployed on [Heroku](https://reactnanodegree-readable.herokuapp.com/)


## License

A Project [starter code](https://github.com/udacity/reactnd-project-readable-starter) contributed by Udacity.
