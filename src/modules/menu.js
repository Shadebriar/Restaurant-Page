const menu = () => {
    const content = document.querySelector('#content');
    
    content.textContent = '';

    const menuTitle = document.createElement('h1');
        menuTitle.textContent = 'Menu';

    const menuAppsTitle = document.createElement('h2');
        menuAppsTitle.textContent = 'Appetizers';

    const menuAppsList = document.createElement('ul');
        const menuAppsItem1 = document.createElement('li');
            menuAppsItem1.textContent = "Strawberry Cream Cheese Dip";
            const menuAppsItem2 = document.createElement('li');
            menuAppsItem2.textContent = "Pink Deviled Eggs";
            const menuAppsItem3 = document.createElement('li');
            menuAppsItem3.textContent = "Pink Shrimp Cocktail";
        
    const menuEntreesTitle = document.createElement('h2');
        menuEntreesTitle.textContent = 'Entrees';

    const menuEntreesList = document.createElement('ul');
        const menuEntreesItem1 = document.createElement('li');
            menuEntreesItem1.textContent = "Pink Beetroot Pasta";
            const menuEntreesItem2 = document.createElement('li');
            menuEntreesItem2.textContent = "Ribeye with Pink Peppercorn Sauce";
            const menuEntreesItem3 = document.createElement('li');
            menuEntreesItem3.textContent = "Pink Lady Sushi Roll";

    const menuDessertsTitle = document.createElement('h2');
        menuDessertsTitle.textContent = 'Desserts';

    const menuDessertsList = document.createElement('ul');
        const menuDessertsItem1 = document.createElement('li');
        menuDessertsItem1.textContent = "Pink Velvet Cake";
        const menuDessertsItem2 = document.createElement('li');
        menuDessertsItem2.textContent = "Raspberry Macarons";
        const menuDessertsItem3 = document.createElement('li');
        menuDessertsItem3.textContent = "No-Bake Dragon Fruit Cheesecake Bars";

    menuAppsList.appendChild(menuAppsItem1);
    menuAppsList.appendChild(menuAppsItem2);
    menuAppsList.appendChild(menuAppsItem3);

    menuEntreesList.appendChild(menuEntreesItem1);
    menuEntreesList.appendChild(menuEntreesItem2);
    menuEntreesList.appendChild(menuEntreesItem3);
    
    menuDessertsList.appendChild(menuDessertsItem1);
    menuDessertsList.appendChild(menuDessertsItem2);
    menuDessertsList.appendChild(menuDessertsItem3);

    content.appendChild(menuTitle);
    content.appendChild(menuAppsTitle);
    content.appendChild(menuAppsList);
    content.appendChild(menuEntreesTitle);
    content.appendChild(menuEntreesList);
    content.appendChild(menuDessertsTitle);
    content.appendChild(menuDessertsList);
};

export default menu;