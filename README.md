# Brain Agriculture Project

This project is a web application designed to manage the registration of rural producers and their farms. It allows users to add, edit, and delete producer information, validate CPF or CNPJ, and ensure that the areas of the farms are correctly allocated.

## Features

- **Producer Management**: Register, edit, and delete rural producers.
- **Farm Management**: Manage multiple farms associated with producers.
- **Area Validation**: Ensure that the sum of arable and vegetation areas does not exceed the total farm area.
- **Crop Registration**: Record multiple crops planted per farm and per harvest.
- **Dashboard**: Visual representation of data including:
  - Total registered farms
  - Total hectares recorded
  - Pie charts by state, crop planted, and land use.

## Technologies Used

- **Frontend**: 
  - TypeScript
  - ReactJS
  - Redux for state management
  - Styled Components for styling
  - Jest and React Testing Library for unit testing

## Project Structure

```
brain-agriculture
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── services
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── __tests__
├── .eslintrc.js
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application in development mode, run:
```
npm start
```

## Running Tests

To run the unit tests, use:
```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
