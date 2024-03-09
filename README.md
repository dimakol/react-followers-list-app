# Followers List App

A web application that display a list of Github account followers.

## Screenshots

![image](screenshots/image.png?raw=true "Image")

![animated gif](screenshots/animation.gif?raw=true "Animation")

## Tech/framework used

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)

## Features

- The JSON data that we receive from the REST API for the followers is displayed in a [material ui DataGrid](https://mui.com/x/react-data-grid/) with sorting and filtering by columns.
- The user column reference to github site of user account.
- The avatar of the github account that we search followers for him is displayed in the text field.

## Installation

**Running Locally**

git, npm and node softwares should be installed before moving on

```bash
git clone https://github.com/dimakol/react-followers-list-app.git
cd react-followers-list-app
npm install
npm run dev
```

**Building for production**

```bash
npm run build
```

## API Reference

- https://docs.github.com/en/enterprise-server@3.2/rest/users/users#get-a-user - Github API for user
- https://docs.github.com/en/enterprise-server@3.2/rest/users/followers#list-followers-of-a-user - Github API for user followers

## Deployed to Github pages

https://dimakol.github.io/react-followers-list-app/

## License

(The MIT License)

Copyright © 2022 Dima Kolyas
