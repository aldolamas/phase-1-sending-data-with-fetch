const mainUrl = "http://localhost:3000/users"

const body = document.querySelector('body');

function submitData(firstName, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(body => addNewContact(body.id))
    .catch(response => document.body.append('Unauthorized Access'))
}
function addNewContact(newID) {
        document.getElementsByTagName('body')[0].innerHTML = newID;
}
submitData("Aldo", "aldo@aldo.com");