## Rick and Morty Characters

This is a simple app that allows you to explore and view characters from the TV
show Rick and Morty. It is built with Next.js, Chakra UI, and Apollo Client.

## Features

- Browse a list of characters from the Rick and Morty series.
- View detailed information about each character.
- Register and manage user information.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and more.
- **Chakra UI**: A UI component library for React.
- **Apollo Client**: A state management library for integrating GraphQL in JavaScript apps.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

```bash
# Clone the repository
git clone https://github.com/htjun/rick-and-morty-characters.git

# Navigate to the project directory
cd rick-and-morty-characters

# Install dependencies
npm install
```

### Environment Variables

Set up the environment variable before running the application:

- `RICK_AND_MORTY_GRAPHQL_API_URL`: URL of the Rick and Morty GraphQL API.

### Development and Production Workflow

```bash
# Start the development server with hot reload at localhost:3000
npm run dev

# Build the application for production
npm run build

# Start the production server after building the application
npm run start
```

## Testing

This project uses Jest and React Testing Library. To run the tests for this project, use the following command:

```bash
npm run test
```

## Considerations

- Used Chakra UI version 2 as version 3 is still in preview release.
