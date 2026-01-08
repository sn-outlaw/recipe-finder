const recipes = [
    {
        name: "Jollof Rice",
        image: "images/jollof.jpg",
        ingredients: ["Rice", "Tomatoes", "Onion", "Pepper", "Oil", "Salt"],
        result: "A spicy and tasty West African rice dish."
    },
    {
        name: "Fried Rice",
        image: "images/friedrice.jpg",
        ingredients: ["Rice", "Carrots", "Green beans", "Eggs", "Soy sauce"],
        result: "Colorful fried rice with vegetables."
    },
    {
        name: "Pancakes",
        image: "images/pancakes.jpg",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
        result: "Soft fluffy breakfast pancakes."
    },
    {
        name: "Spaghetti",
        image: "images/spag.jpg",
        ingredients: ["Spaghetti", "Tomato sauce", "Onion", "Oil"],
        result: "Classic spaghetti with rich tomato sauce."
    },
    {
        name: "Chicken Stew",
        image: "images/chickenstew.jpg",
        ingredients: ["Chicken", "Tomatoes", "Onion", "Spices"],
        result: "Rich and flavorful chicken stew."
    },
    {
        name: "Fruit Salad",
        image: "images/fruitsalad.jpg",
        ingredients: ["Apple", "Banana", "Pineapple", "Orange"],
        result: "Fresh mixed fruit salad."
    }
];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");

function displayRecipes(recipeList) {
    container.innerHTML = "";

    recipeList.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.image}">
            <div class="recipe-content">
                <h3>${recipe.name}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <p><strong>Food you get:</strong> ${recipe.result}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value)
    );
    displayRecipes(filtered);
});

displayRecipes(recipes);



