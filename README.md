# BYU News Components

> A web component to consume the BYU News API.

# Components
## BYU News
This is the component to use when you want to pull in a stream of stories and display them in a pretty list. 

```html
<byu-news categories="all" tags="all" max-date="2017-07-01" min-date="2017-04-01" story-limit="3"></byu-news>
```
### Attributes
- Categories: **Reqired**. The category ID's you want to consume, separated by '+'. If you want all categories, use the value `all`.
- Tags: **Required**. The tag ID's you want to consume, seperated by '+'. If you want all tags, use the value `all`.
- Max Date: The latest date a story should have been published.
- Min Date: The earlies date a story should have been published.
- Story Limit: The number of stories you want display.

NB: If you want the latest stories, just leave out the `min-date` and `max-date` attributes.

## BYU Story
_Still in Development. Currently only a child for the `byu-news` component._

This component takes a story's ID and displays that story on your site.

```html
<byu-story story-id="12345"></byu-story>
```

# How To Contribute
## Fork the Repo
Unless you have write access to the [byu-theme-components](https://github.com/byuweb/byu-theme-components) repository or are on the Unicomm Web Developers team, you will need to fork this repository to contribute to it. Pull requests can be submitted the same way as if you had write access, just do it from your forked repo.

## Development Environment
You need to be sure you have npm installed to develop this component. We recommend downloading v6.11.0 LTS of [nodeJS](https://nodejs.org/en/). Once you've done that, clone the repo and in the project folder, run
```
npm install
yarn
```

**DEPENDENCIES**: For this component, after the first time you install dependencies, be sure to use `yarn` rather than `npm install`.

To run a local development server with a file watch, run

```
npm start
```

To assemble the final distribution bundle, run

```
npm run build
```

To run automatic unit tests, run

```
npm test
```


