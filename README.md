# Mock Fullstack Interview Project

This is a mock fullstack project designed to help prepare for fullstack developer interviews. The project consists of a Node.js server and a React frontend. The Node.js server serves an array of products, and the React frontend displays these products, allowing users to add products to their cart.

## Getting Started

### Prerequisites

- Node.js (version 16.x recommended)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/skontan/mock-fullstack-interview.git
   cd mock-fullstack-interview
   ```

2. Install server dependencies:
   ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
   ```bash
    cd ../client
    npm install
    ```

### Running the project

1. Start the server:
   ```bash
    cd server
    npm start
    ```
    The server will start on http://localhost:5001

2. Start the client:
    ```bash
    cd ../client
    npm start
    ```
    The client will start on http://localhost:3000


### Task

1. Node.js Server: 
- Implement an endpoint to fetch a specific product image by its ID.

2. React Frontend:
- Display the list of products fetched from the server.
- Allow users to add products to their cart.
- Display the number of each product in the cart.
- Display the total cart value.
- Display product image