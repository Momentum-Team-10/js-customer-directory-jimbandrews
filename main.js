function createCustCard(customer) {
    let allCust = document.getElementById("all-customers");
    let custCard = document.createElement("div")
    custCard.appendChild(createImgElement(customer));
    custCard.appendChild(createNameElement(customer));
    custCard.appendChild(createEmailElement(customer));
    custCard.appendChild(createFirstAddressEl(customer));
}

function createImgElement(customer) {
    let image = document.createElement("img");
    image.src = customer.picture.thumbnail;
    return image;
}

function createNameElement(customer) {
    let name = document.createElement("p");
    name.innerText = customer.name.first + " " + customer.name.last;
    return name
}

function createEmailElement(customer) {
    let email = document.createElement("p");
    email.innerText = customer.email;
    return email;
}

function createFirstAddressEl(customer) {
    let firstLine = document.createElement("p");
    firstLine.innerText = String(customer.location.street.number) + " " + customer.location.street.name;
    return firstLine;
}