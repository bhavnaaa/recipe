document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('recipe');

    if (recipeId) {
        displayRecipeDetails(recipeId);
    }
});

function displayRecipeDetails(id) {
    const recipes = {
        1: {
            title: "Spaghetti Carbonara",
            image: "images/img11.jfif",
            ingredients: ["Spaghetti", "Eggs", "Pecorino Cheese", "Guanciale", "Black Pepper"],
            instructions: "Cook the spaghetti. Mix the eggs and cheese. Cook the guanciale. Combine all together."
        },
        2: {
            title: "Grilled Chicken",
            image: "images/img88.jfif",
            ingredients: ["Chicken", "Olive Oil", "Garlic", "Lemon Juice", "Herbs"],
            instructions: "Marinate the chicken with oil, garlic, and lemon juice. Grill until cooked."
        },
        3: {
            title: "Vegetable Stir-Fry",
            image: "images/img22.jfif",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
            instructions: "Stir-fry the vegetables with soy sauce and ginger until tender."
        },
        4: {
            title: "Pasta Salad",
            image: "images/img33.jfif",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
            instructions: "Stir-fry the vegetables with soy sauce and ginger until tender."
        },
        5: {
            title: "Classic Burger",
            image: "images/img44.jfif",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
            instructions: "Stir-fry the vegetables with soy sauce and ginger until tender."
        },
        6: {
            title: "Vegetarian Chili",
            image: "images/img55.jfif",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
            instructions: "Stir-fry the vegetables with soy sauce and ginger until tender."
        },
        7: {
            title: "Fried Chicken",
            image: "images/img66.jfif",
            ingredients: ["Chicken", "Olive Oil", "Garlic", "Lemon Juice", "Herbs"],
            instructions: "Marinate the chicken with oil, garlic, and lemon juice. Grill until cooked."
        },
        8: {
            title: "Banana Bread",
            image: "images/img77.jfif",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Ginger"],
            instructions: "Stir-fry the vegetables with soy sauce and ginger until tender."
        }
    };

    const recipe = recipes[id];

    document.querySelector("h2").textContent = recipe.title;
    document.getElementById("recipe-image").src = recipe.image;

    const ingredientsList = document.getElementById("ingredients-list");
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById("recipe-instructions").textContent = recipe.instructions;
}
