function generateAboutContent(content) {
    // About Us section
    const aboutUsSection = document.createElement("div");

    const aboutH1 = document.createElement("h1");
    aboutH1.textContent = "About US";
    aboutH1.style.marginBottom = "10px";
        
    const teamH2 = document.createElement("h2");
    teamH2.textContent = "Our Little Team";
    const team = document.createElement("p");
    team.innerHTML = `
    We are a small but mighty team of five people.
    <ul>
    <li>Bill Gates &minus; Manager and Owner</li>
    <li>Edward Riches &minus; Head Chef</li>
    <li>Tyler Riverson &minus; Accountant, Tech Support and Marketing</li>
    <li>Tailor Swift &minus; Chef Assistant</li>
    <li>Ryan Reynolds &minus; Waiter</li>
    </ul>
    `;
    team.style.marginBottom = "30px";

    const timesH2 = document.createElement("h2");
    timesH2.textContent = "Opening Times";
    const times = document.createElement("p");
    times.innerHTML = `
    <ul>
    <li>Mondays to Fridays &minus; 8am to 9pm</li>
    <li>Saturdays &minus; 10am to 8pm</li>
    <li>Sundays &minus; 1pm to 8pm</li>
    </ul>
    `;
    times.style.marginBottom = "30px";

    const contactH2 = document.createElement("h2");
    contactH2.textContent = "Contact Details";
    const contact = document.createElement("p");
    contact.innerHTML = `
    <ul>
    <li>Email Address: support@cudelights.com</li>
    <li>Contact number: +233 (0) 23 289 2729</li>
    <li>Physical Address: 1st Ravens St, Alabama, North Carlifornia</li>
    </ul>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208838.2273483785!2d-90.10832316693369!3d35.129245296643965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e1eea439745%3A0xd193f315601ab6fe!2sMemphis%2C%20TN%2C%20USA!5e0!3m2!1sen!2sgh!4v1770231078756!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    aboutUsSection.append(aboutH1, teamH2, team, timesH2, times, contactH2, contact);

    // Form functionality
    const orderSection = document.createElement("div");
    const orderH1 = document.createElement("h1");
    orderH1.textContent = "Order from us NOW!"
    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "* Name: ";

    const customerName = document.createElement("input");
    customerName.name = "name";
    customerName.id = "name";
    customerName.required = true;

    const contactLabel = document.createElement("label");
    contactLabel.textContent = "* WhatsApp Contact: "
    const customerContact = document.createElement("input");
    customerContact.type = "tel";
    customerContact.name = "contact";
    customerContact.id = "contact";
    customerContact.required = true;

    const orderlabel = document.createElement("label");
    orderlabel.textContent = "* Please enter all your preferences (ie. beverages, pastries, main courses, their quantities and any anything you want us to know): ";
    const customerOrder = document.createElement("textarea");
    customerOrder.name = "order";
    customerOrder.id = "order";
    customerOrder.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.type = "submit";
    
    form.append(nameLabel, customerName, contactLabel, customerContact, orderlabel, customerOrder, submitBtn)
    orderSection.append(orderH1, form);


    content.style.display = "flex";
    content.style.flexWrap = "wrap";
    content.style.gap = "30px";
    content.style.justifyContent = "space-around";
    content.append(aboutUsSection, orderSection);
}

export {generateAboutContent};