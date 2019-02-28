const tableBodyNode = document.getElementById('table-body');

export function makeTableRow(contact) {
    const template = document.createElement('template');
    
    template.innerHTML = `<tr>
    <td>true</td>
    <td>$2,559.99</td>
    <td><img src="${contact.picture}"></td>
    <td>${contact.age}</td>
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td>${contact.company}</td>
    <td>${contact.email}</td>
    <td>${contact.favoriteFruit.charAt(0).toUpperCase() + contact.favoriteFruit.slice(1)}</td>
    </tr>`;
    
    return template.content;
}
export default function loadContacts(contacts) {
    contacts.forEach(contact => {
        const newRow = makeTableRow(contact);
        tableBodyNode.appendChild(newRow);   
    });

}