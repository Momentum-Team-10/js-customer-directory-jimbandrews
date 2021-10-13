let container = document.getElementById("all-customers");

for (customer of customers) {
    let custCard = document.createElement("div");
    custCard.classList.add("customer-card");

    custCard.innerHTML = `<img src=${customer.picture.large} />
    <h2 id="name">${capitalizeName(customer.name.first)} ${capitalizeName(customer.name.last)}</h2>
    <p id="email">${customer.email}</p>
    <p>
    <p class="address" id="address1">${customer.location.street.number} ${customer.location.street.name}</p>
    <p class="address" id="address2">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</p>
    </p>
    <p class="date">DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</p>
    <p class="date">Customer since: ${moment(customer.registered.date).format("MMM D, YYYY")}</p>`
    
    
    container.appendChild(custCard);
}

function capitalizeName(name) {
    let first = name[0];
    first = first.toUpperCase();
    return first + name.slice(1, name.length);
}
// string.replace(/^\w/, c => c.toUpperCase()) also works, but I don't understand it. Something to do with a RegEx
// /^\w/ is the search value; the function is the replacement value
// the / denote the boundaries of the regular expression (regex)
// ^ means the start of a string or line, depending on the context
// \w indicates a "word character"
// so ^\w is used to indicate the first word character in a string