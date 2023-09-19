interface Contact {
  name: string;
  phone: string;
}

const contactList: Contact[] = [];

//------------------------- ADD a specific contact to contactList --------------
function addContact(name: string, phone: string) {
  const newContact: Contact = {
    name: name,
    phone: phone,
  };
  contactList.push(newContact);
}

//------------------------- Create contact List --------------

function createList(num: number) {
  for (let i: number = 0; i < num; i++) {
    addContact(
      prompt("Please insert contact name"),
      prompt("Please insert contact phone")
    );
  }

  console.log(contactList);
}

//-------------------------  call add function --------------

createList(
  parseInt(prompt("Please insert a number as the number of contacts: "))
);

////------------------------- Search specific Contact -------------------------------
function searchContact(sname: string) {
  if (contactList.some((contact) => contact.name === sname)) {
    console.log("Object found inside the array.");
  } else {
    console.log("Object not found.");
  }
}

//-------------------------  call search function --------------

searchContact(prompt("search contact name:"));
