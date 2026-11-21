const about = () => {
    const content = document.querySelector('#content');
    content.textContent = '';

    const aboutTitle = document.createElement('h1');
        aboutTitle.textContent = 'About Us';

    const aboutDescription = document.createElement('p');
        aboutDescription.textContent = 
        "La Vie en Rose is a restaurant that specializes in high-quality food and beverages, that ranges from all different shades of pink. Our mission is to provide our customers with a unique dining experience that is both visually stunning and delicious.";

    content.appendChild(aboutTitle);
    content.appendChild(aboutDescription);
}

export default about;
