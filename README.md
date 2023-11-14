# Beer Pragma Test

## Development Process:

- Started by reading the test explanation file and studying how to proceed.
- Used Vue CLI to create a faster development environment.
- Added assets and fonts, created media query mixins, and separated token variables.
- Created reusable components in the DS (Design System), such as button, icon, and card. Also began creating a single layout.
- Began working on the top header and side menu, focusing on mobile-first design and adapting the desktop layout for good mobile appearance.
- Started working on the beer card and implementing the store.
- Completed the required part in approximately 2 hours and 40 minutes.

## Bonus:

- Developed the feature to delete a selected beer.
- Researched how to add a chart and decided to implement ApexCharts. It was straightforward, just needed to add a history property and store each API call data to pass to Apex.

## Decisions:

Some decisions made during the challenge:

- **Stack**: Chose Vue.js due to my expertise with it, having over 5 years of experience. With no specific stack instructions, I wanted to leverage my strength.
- **Store Usage**: Created a Vuex store as if I were implementing a feature from scratch, needing robust data handling. An initial store version is advantageous in the long run.
- **Design System**: Focused on consistency, hence creating a DS from the start, even with simple components. This helps in maintaining high consistency in future project expansions.
- **Mixins and Variables**: Same reason as for the DS.
- **SCSS and Style Standard**: Used SCSS and based my style on specificity with "& >", allowing freedom in component styling without the risk of breaking other parts.
- **Naming Convention**: Opted not to follow a naming convention like BEMCSS due to time constraints and my weakness in naming.

## Questions about the Project:

- Will the app start with a logged-out version, then consider authentication?
- Should adding a beer be from a predefined list?
- Can the user create a new beer?
- Should the data saved from the endpoint be stored in another history endpoint?

## Notes:

- For real-time graphing, websockets might be a better choice than conventional calls.

## Opinion:

- Enjoyed the test and found it fun, hence the implementation of the non-required graph. Made strategic decisions like limiting beer additions to avoid API overload and adding a maximum of 3 beers instead of +1 for each new ID. Unfortunately, couldn't commit step-by-step to Git due to my machine being configured with my work GitHub keys, so I preferred not to upload to my personal GitHub.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
