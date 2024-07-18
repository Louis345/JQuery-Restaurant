# Restaurant Menu Project

This project is a simple restaurant menu application that demonstrates CRUD (Create, Read, Update, Delete) operations using a mock server with JSON Server. It allows users to view, add, update, and delete recipes.

## Features

- **View Recipes**: Display a list of recipes categorized as Starters, Main Courses, Desserts, and Beverages.
- **Add Recipe**: Users can add new recipes to the menu.
- **Update Recipe**: Users can mark recipes as favorites.
- **Delete Recipe**: Users can delete recipes from the menu.

## Technologies Used

- HTML, CSS, Bootstrap
- JavaScript, jQuery
- JSON Server for mock backend

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/JQuery-Restaurant.git
   cd JQuery-Restaurant
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Install JSON Server globally:**

   ```bash
   npm install -g json-server
   ```

### Starting the Server

1. **Start the JSON Server:**

   ```bash
   json-server --watch db.json
   ```

   This will start the JSON Server and watch the `db.json` file for changes. The server will be available at `http://localhost:3000`.

2. **Open `index.html` in your browser:**

   You can open the `index.html` file directly in your browser or use a local server to serve the HTML file.

## Project Structure

- `index.html`: The main HTML file containing the structure of the restaurant menu.
- `styles.css`: Custom CSS for styling the menu.
- `scripts.js`: JavaScript file containing the logic for fetching and displaying recipes, and handling CRUD operations.
- `db.json`: Mock database file used by JSON Server.

## CRUD Operations

### Create

- **Add Recipe**: Users can add new recipes by filling out the form in the "Add New Recipe" section and submitting it. The recipe is then added to the mock server and displayed on the page.

### Read

- **View Recipes**: Recipes are fetched from the mock server and displayed in their respective categories on page load.

### Update

- **Toggle Favorite**: Users can mark recipes as favorites by clicking the heart icon. This sends a PATCH request to the mock server to update the recipe's favorite status.

### Delete

- **Delete Recipe**: Users can delete recipes by clicking the "Delete" button. This sends a DELETE request to the mock server to remove the recipe.

## Acknowledgements

This project uses the following libraries and resources:

- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Font Awesome](https://fontawesome.com/)
- [JSON Server](https://github.com/typicode/json-server)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
