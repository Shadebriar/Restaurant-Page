import roseImage from "./images/rose1.svg";

const home = () => {
    const content = document.querySelector('#content');

        content.textContent = '';

    const homeImage = document.createElement('img');
        homeImage.src = roseImage;
        homeImage.alt = 'Rose Image';
        homeImage.classList.add('home-image');

    const homeTitle = document.createElement('h1');
        homeTitle.textContent = 'La Vie en Rose';

    const homeDescription = document.createElement('p');
        homeDescription.classList.add('home-description');
        homeDescription.textContent = 
        "La Vie en Rose specializes in high-quality food and beverages, that ranges from all different shades of pink.";

    content.appendChild(homeTitle);
    content.appendChild(homeImage);
    content.appendChild(homeDescription);

};

export default home;
