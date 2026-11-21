const contact = () => {
    const content = document.querySelector('#content');
    content.textContent = '';

    const contactTitle = document.createElement('h1');
        contactTitle.textContent = 'Contact Us';

    const contactEmail = document.createElement('p');
        contactEmail.textContent = 'Email: contact@restaurant.com';
    const contactPhone = document.createElement('p');
        contactPhone.textContent = 'Phone: (123) 456-7890';
    const contactAddress = document.createElement('p');
        contactAddress.textContent = 'Address: 123 Pink Street, Pink City, PC 12345';
    const contactHours = document.createElement('p');
        contactHours.textContent = 'Hours: Mon-Fri 12pm-9pm, Sat-Sun 12pm-6pm';
        
    content.appendChild(contactTitle);
    content.appendChild(contactEmail);
    content.appendChild(contactPhone);
    content.appendChild(contactAddress);
    content.appendChild(contactHours);
};

export default contact;
