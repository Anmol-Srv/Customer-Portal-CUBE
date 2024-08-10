# Customer Details Portal

This project is a simple single-page application built with React and TypeScript. It displays a list of customers on the left side, and when a customer is selected, their details along with a 3x3 grid of random images are shown on the right side. The images are fetched from the Unsplash API and are updated every 10 seconds.

## Features

- Display a list of customers with their name and title.
- Show detailed information for the selected customer, including a 3x3 grid of images.
- Fetch new random images every 10 seconds.
- Fetch new random images whenever a new customer is selected.
- Responsive design with a simple and clean UI.

## Project Structure

The project structure is organized as follows:

```
customer-portal/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── CustomerList.tsx
│ │ ├── CustomerDetailstsx
│ ├── constants/
│ │ └── customers.ts
│ │ └── MOCK_DATA.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── index.css
│
├── .env
├── package.json
├── package-lock.json
└── README.md
└── tsconfig.json
```


## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine.

### Clone the Repository

Run the following command to clone the repository:

`git clone https://github.com/Anmol-Srv/Customer-Portal-CUBE.git`

### Install Dependencies

Navigate to the project directory and run the following command to install the necessary dependencies:

`npm install`

### Running the Project

To start the development server, run:

`npm start`

This will start the application on `http://localhost:3000`.

## Components

### CustomerList

This component is responsible for displaying the list of customers on the left side of the page. When a customer is selected, it triggers a callback to update the selected customer in the parent component.

#### Props

- `customers`: Array of customer objects.
- `onSelectCustomer`: Function to handle customer selection.
- `selectedCustomerId`: ID of the currently selected customer.

### CustomerDetails

This component displays detailed information about the selected customer, including their name, title, address, and a 3x3 grid of images. It fetches new images every 10 seconds and also when a new customer is selected.

#### Props

- `customer`: The currently selected customer object.

### Utility Functions

- `shuffleArray`: A utility function used to shuffle an array. This is used to shuffle the images before displaying them in the grid.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
