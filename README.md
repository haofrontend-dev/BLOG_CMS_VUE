<div align="center">
<a href="https://vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://router.vuejs.org/logo.svg" width="80" alt="Vue Logo" /></a>
<a href="https://www.typescriptlang.org/" target="blank" style="margin: 0 1rem;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343" width="80" alt="Typescript Logo" /></a>
<a href="https://vitejs.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vitejs.dev/logo.svg" width="80" alt="Vite 3 Logo" /></a>
<a href="https://pinia.vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://pinia.vuejs.org/logo.svg" width="50" alt="Pinia Logo" /></a>
<a href="https://vue-i18n.intlify.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="90" alt="Vue i18n Logo" /></a>

<br><br>

<h1>✨ Vue CMS ✨</h1>
</div>

The boilerplate of Vue v3, Typescript, Vite, Vue Router, Pinia, Axios, Tailwind CSS, and Vue i18n for buildings efficient, faster, maintainable, and scalable for enterprise applications.

### 📚 Table of Contents

-   [❓ What's Included?](#-whats-included)
-   [🖇️ Core Dependencies](#️-core-dependencies)
-   [🗂️ Project Structure](#️-project-structure)
-   [🚀 Getting Started](#-getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [💡 Scripts](#-scripts)
-   [📝 License](#-license)

## ❓ What's Included?

-   [x] Authentication: Provides a secure login system for users.
-   [x] Authorization: Implements role-based access control to manage user permissions.
-   [x] Multiple Language: Supports localization and enables users to switch between different languages.
-   [x] Theme (Light/Dark/System): Offers a choice of light, dark, or system-based theme for a personalized user experience.
-   [x] Form Validation: Includes form validation functionality to ensure data integrity and improve user experience.
-   [x] Error Handling: Handles and displays error messages in a user-friendly manner.
-   [x] API Integration: Integrates with external APIs to fetch data and provide dynamic content.
-   [ ] Responsive Design: Ensures the application is optimized for various screen sizes and devices.
-   [ ] Testing: Includes a test suite with unit tests and integration tests for reliable code quality.
-   [ ] Documentation: Provides comprehensive documentation to guide developers and users.

## 🚀 Getting Started

### Prerequisites

[&#8593; Back to top](#-table-of-contents)

1. [Node Js](https://nodejs.org/en/) version `v20.10.0`. The current Long Term Support (LTS) release is an ideal starting point.
2. [Visual Studio Code](https://code.visualstudio.com/download). Visual Studio Code is the free and open-sourced code editor. It is one of the top most editor used especially for JavaScript application development.

    **Recommended Plugin for VSCode**

    - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
    - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
    - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### Installation

[&#8593; Back to top](#-table-of-contents)

1.  Clone this repository to your computer:

    ```sh
    https://github.com/haofrontend-dev/BLOG_CMS_VUE?
    cd blog-cms
    code .
    ```

2.  Run command below to ignore git case-sensitive filename

    ```sh
    git config --global core.ignorecase false
    ```

3.  From the project's root directory, install the required packages (dependencies):

    ```sh
    yarn install
    ```

4.  Create environment files:

    ```sh
    cp .env.example .env
    ```

5.  Set up the environment variables.

6.  To run the app on your local machine:

    ```sh
    yarn dev
    ```

7.  Build for production

    ```sh
    yarn build
    ```

    Happy Coding :)

## 💡 Scripts

[&#8593; Back to top](#-table-of-contents)

The following scripts are available:

| Script         | Action                                                    |
| -------------- | --------------------------------------------------------- |
| `yarn install` | Installs the project dependencies.                        |
| `yarn dev`     | Runs the application in development mode.                 |
| `yarn build`   | Builds the production-ready optimized bundle.             |
| `yarn preview` | Starts the preview server using Vite.                     |
| `yarn lint`    | Runs ESLint to lint the project files and fix any issues. |
| `yarn format`  | Formats the source code using Prettier.                   |

## 📝 License

This project is licensed under the [MIT](./LICENSE) License.
