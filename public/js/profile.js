async function getShoppingList(recipeId, userId) {
    let response = await fetch(`/api/ing/${recipeId}`);
    let ingredients = await response.json();
    
    let invResponse = await fetch(`/api/inv/${userId}`);
    let inventory = await invResponse.json();

    let shoppingList = ingredients.filter(ingredient => {
        // Assuming your inventory has a list of ingredient names
        return !inventory.map(item => item.name).includes(ingredient.name);
    });

    return shoppingList;
}

document.getElementById("addToShoppingList").addEventListener("click", async function() {
    let recipeId = document.getElementById("recipe-dropdown").value;
    
    let shoppingList = await getShoppingList(recipeId);
    
    // Here, you'll probably re-render your entire template or just the part that contains the shopping list
    const context = {
        shoppingListItems: shoppingList,
        // ... other context data you might have ...
    };

    const mainTemplate = Handlebars.compile(document.getElementById("your-main-template-id").innerHTML);
    document.getElementById("your-render-target-id").innerHTML = mainTemplate(context);
});


// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   // .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
