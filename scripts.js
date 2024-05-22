$(document).ready(function () {
    const API_URL = 'http://localhost:3000/recipes';

    // Function to fetch recipes and display them
    function fetchRecipes() {
        $.ajax({
            url: API_URL,
            method: 'GET',
            success: function (recipes) {
                console.log('recipes', recipes)
                $('#starters .row, #main-courses .row, #desserts .row, #beverages .row').empty();
                recipes.forEach(recipe => {
                    const heartClass = recipe.favorite ? 'fas' : 'far';
                    const recipeCard = `
            <div class="col-md-4 menu-item">
              <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}" />
                <div class="card-body">
                  <h5 class="card-title">${recipe.name}</h5>
                  <p class="card-text">${recipe.description}</p>
                  <p class="card-text"><small class="text-muted">$${recipe.price}</small></p>
                  <button class="btn btn-primary favorite-btn" data-id="${recipe.id}">
                    <i class="${heartClass} fa-heart"></i>
                  </button>
                  <button class="btn btn-danger delete-btn" data-id="${recipe.id}">Delete</button>
                </div>
              </div>
            </div>
          `;
                    if (recipe.category === "starter") {
                        $('#starters .row').append(recipeCard);
                    } else if (recipe.category === "main") {
                        $('#main-courses .row').append(recipeCard);
                    } else if (recipe.category === "dessert") {
                        $('#desserts .row').append(recipeCard);
                    } else if (recipe.category === "beverage") {
                        $('#beverages .row').append(recipeCard);
                    }
                });
            },
            error: function (xhr, status, error) {
                console.error("Error fetching recipes:", error);
            }
        });
    }

    // Function to fetch favorite recipes and display them
    function fetchFavorites() {
        $.ajax({
            url: `${API_URL}?favorite=true`,
            method: 'GET',
            success: function (recipes) {
                $('#favorite-recipes').empty();
                recipes.forEach(recipe => {
                    const heartClass = recipe.favorite ? 'fas' : 'far';
                    const recipeCard = `
            <div class="col-md-4 menu-item">
              <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}" />
                <div class="card-body">
                  <h5 class="card-title">${recipe.name}</h5>
                  <p class="card-text">${recipe.description}</p>
                  <p class="card-text"><small class="text-muted">$${recipe.price}</small></p>
                  <button class="btn btn-primary favorite-btn" data-id="${recipe.id}">
                    <i class="${heartClass} fa-heart"></i>
                  </button>
                  <button class="btn btn-danger delete-btn" data-id="${recipe.id}">Delete</button>
                </div>
              </div>
            </div>
          `;
                    $('#favorite-recipes').append(recipeCard);
                });
            },
            error: function (xhr, status, error) {
                console.error("Error fetching favorite recipes:", error);
            }
        });
    }

    // Toggle favorite status
    $(document).on('click', '.favorite-btn', function () {
        const id = $(this).data('id');
        const icon = $(this).find('i');
        const isFavorite = icon.hasClass('far');

        $.ajax({
            url: `${API_URL}/${id}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({ favorite: isFavorite }),
            success: function () {
                if (window.location.pathname.endsWith('favorites.html')) {
                    fetchFavorites();
                } else {
                    fetchRecipes();
                }
            },
            error: function (xhr, status, error) {
                console.error("Error toggling favorite status:", error);
            }
        });
    });

    // Delete a recipe
    $(document).on('click', '.delete-btn', function () {
        const id = $(this).data('id');

        $.ajax({
            url: `${API_URL}/${id}`,
            method: 'DELETE',
            success: function () {
                if (window.location.pathname.endsWith('favorites.html')) {
                    fetchFavorites();
                } else {
                    fetchRecipes();
                }
            },
            error: function (xhr, status, error) {
                console.error("Error deleting recipe:", error);
            }
        });
    });

    // Load all recipes on page load
    if (window.location.pathname.endsWith('favorites.html')) {
        fetchFavorites();
    } else {
        fetchRecipes();
    }
});
