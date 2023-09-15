## PROJECT NAME

### 👀 Overview



### 📜 Repository Information
- Repository: 
- Branch: 


### 💁Git Related Instructions
It is advised that you generate an ssh key and register it in your gitlab account at the link below. You should then be able to clone a repo using its ssh link and would never have to enter username and password again and again when doing git operations in the future.

- You must always work on a new branch created by you for example feature/OnboardingVivek for adding new feature or for the bugs  fixes bugFixes/OnboardingVivek .
- Typically, no commits should be made on branches that got created from upstream.
- This new branch name follows the structure as described in the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) document.
- Commit your changes to this new branch. Do as many commits as you like, but try to make each commit look like a logical small checkpoint. (Reference tutorials: [Basics of git command line](https://www.youtube.com/watch?v=HVsySz-h9r4&list=PLWL3LDOx1clv-mJ4CL0ot_SVc_J1NdVDW&index=2), [Net Ninja: Git and Github for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR))
- Push this new branch to remote regularly to avoid loss of code in case your local system fails.
- Always take pull regularly from develop branch
- Never push to the master branch
- Always raise a Pull Request before merging the current branch into upstream branch.
- The moderators will then code review your changes, and suggest any alterations they feel are required.
- Make any code modifications by making new commits on the same local branch and pushing them onto origin.
- They will then merge your branch if all necessary modifications are made and code stability has been established by both the moderators and the developer.
- Following this, they will close the merge request and may delete your branch in order to reduce number of branches


### ⚙️ Installation
To install and set up PROJECT NAME locally, follow these steps:
1. Clone the repository from GitHub: git clone repo.
2. Install the required dependencies by running **npm install** in the project directory.
3. Start the development server: npm run dev || npm start.
4. Access PROJECT NAME in your web browser at **http://localhost:3001**.
For detailed installation instructions and additional configuration options, refer to the project's documentation.


### 🍥 Design
The design for PROJECT NAME was created using Figma, a collaborative design tool. You can access the design files and assets using the following link:
- Figma Design: URL


### 🔬 Technologies Used
- Frontend: HTML, CSS, JavaScript, React.js


### 📦 Dependencies
| No. | Package                 | Description                                |
|-----|-------------------------|--------------------------------------------|
|  1. | axios                   | Used for API calls.                        |
|  2. | material-ui             | Used for UI style and icons.               |
|  3. | redux                   | For state management.                      |
|  4. | reduxjs/toolkit         | For using Redux in an easy way.            |
|  5. | redux-thunk             | Used for asynchronous operations.          |
|  6. | yup                     | For form validation.                       |
|  7. | formik                  | For handling forms.                        |
|  8. | dayjs                   | For handling time.                         |
|  9. | lodash                  | For handling complex data manipulation.    | 
| 10. | tinymce/tinymce-react   | For the rich text editor (Need to add your free API key and approved domain for the Dev and Prod [click here](https://www.tiny.cloud/my-account/domains/))         |


### 📂 Folder Structure
```
src
├── App.js
├── assets
│   ├── theme
│   ├── images
│   ├── fonts
│   └── ...
├── components
│   ├── Button
│   ├── ...
│   └── ...
├── hooks
│   ├── useCustomHook1.js
│   ├── useCustomHook2.js
│   └── ...
├── layout
│   ├── Header
│   ├── Footer
│   ├── Sidebar
│   └── ...
├── lib
│   ├── axios (GET, POST, PUT, DELETE, COMMON API FUNCTIONS)
│   ├── ...
│   └── ...
├── pages
│   ├── Home
│   ├── Login
│   └── ...
├── redux
│   ├── actions
│   ├── reducers
│   ├── store.js
│   └── ...
├── router
│   ├── constants.js
│   ├── routes
│   └── ...
├── services
│   ├── index.js (API CONSTANTS)
│   └── ...
└── util
    ├── constant.js
    └── ...
```

### 📑 API Documentation
- URL
