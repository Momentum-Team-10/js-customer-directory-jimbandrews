let container = document.getElementById("all-customers");

for (customer of customers) {
    let custCard = document.createElement("div");

    custCard.innerHTML = `<img src=${customer.picture.large} />
    <p>${capitalizeName(customer.name.first)} ${capitalizeName(customer.name.last)}</p>
    <p>${customer.email}</p>
    <p>${customer.location.street.number} ${customer.location.street.name}</p>
    <p>${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</p>
    <p>DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</p>
    <p>Customer Since: ${moment(customer.registered.date).format("MMM D, YYYY")}</p>`
    
    container.appendChild(custCard);
}

function capitalizeName(name) {
    let first = name[0];
    first = first.toUpperCase();
    return first + name.slice(1, name.length);
}
// string.replace(/^\w/, c => c.toUpperCase()) also works, but I don't understand it. Something to do with a RegEx