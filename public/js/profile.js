

async function getShoppingList(recipeId, userId) {
    let recResponse = await fetch(`/api/ing/${recipeId}`);
    let ingredients = await recResponse.json();
    
    let invResponse = await fetch(`/api/inv/${userId}`);
    let inventory = await invResponse.json();

    let shoppingList = ingredients.filter(ingredient => {
        // Assuming your inventory has a list of ingredient names
        return !inventory.map(item => item.name).includes(ingredient.name);
    });

    return shoppingList;
}

document.getElementById("addToShoppingList").addEventListener("click", async function() {
    let recId = document.getElementById("recipe-dropdown").value;
    
    let shoppingList = await getShoppingList(recId);
    
    // Here, you'll probably re-render your entire template or just the part that contains the shopping list
    const context = {
        shoppingListItems: shoppingList,
        // ... other context data you might have ...
    };

    const mainTemplate = Handlebars.compile(document.getElementById("your-main-template-id").innerHTML);
    document.getElementById("your-render-target-id").innerHTML = mainTemplate(context);
});