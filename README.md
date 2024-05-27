# Bearcraft Music Website

Welcome to the Bearcraft Music website repository! This project is built using React and provides information about the music collective Bearcraft. The site includes sections for videos, audio tracks, an about page, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/dickymoore/Bearcraftmusic.git
   cd Bearcraftmusic
Install the dependencies:

npm install
Usage
To run the project locally, use the following command:


npm start
This will start the development server and you can view the website at http://localhost:3000.

File Structure
Here is an overview of the key files and directories in this project:

Bearcraftmusic/
├── src/
│   ├── __tests__/
│   │   ├── Footer.test.js
│   │   ├── Header.test.js
│   │   └── Home.test.js
│   ├── components/
│   │   ├── BurgerMenu.css
│   │   ├── ErrorBoundary.js
│   │   ├── Font.js
│   │   ├── Footer.css
│   │   ├── Footer.js
│   │   ├── Header.css
│   │   ├── Header.js
│   │   ├── Logo.js
│   │   └── SocialIcons.js
│   ├── config/
│   │   └── constants.js
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.js
│   │   ├── Audio.css
│   │   ├── Audio.js
│   │   ├── Home.css
│   │   ├── Home.js
│   │   ├── Video.css
│   │   └── Video.js
│   ├── App.css
│   ├── App.js
│   ├── global.css
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
Testing
The project uses Jest and React Testing Library for testing. Test files are located in the src/__tests__ directory. To run the tests, use the following command:


npm test
Test Files
Footer.test.js: Tests for the Footer component.
Header.test.js: Tests for the Header component.
Home.test.js: Tests for the Home page.
Contributing
Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Additional Notes
The public directory contains static assets like images used in the project.
The project uses CSS modules for styling components.
The Font.js component dynamically loads Google Fonts.
The ErrorBoundary.js component is used to catch JavaScript errors anywhere in the child component tree.
The Header.js component includes a responsive navigation menu and social media links.
The Footer.js component includes subscription and social media links.
For any questions or further information, please feel free to open an issue or contact the repository owner.


Feel free to adjust this `README.md` as per your specific requirements and