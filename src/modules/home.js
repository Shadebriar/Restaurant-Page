const home = () => {
    const content = document.querySelector('#content');
}

content.textContent = '';

const homeTitle = document.createElement('h1');
homeTitle.textContent = 'La Vie en Rose';

const homeImage = document.createElement('img');
homeImage.src = './src/modules/images/rose1.svg';

const homeDescription = document.createElement('p');
homeDescription.textContent = 
"La Vie en Rose specializes in high-quality food and beverages, that ranges from all different shades of pink.";

content.appendChild(homeTitle);
content.appendChild(homeImage);
content.appendChild(homeDescription);

export default home;
