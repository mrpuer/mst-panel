export const fetchUsers = (store: any) => {
  fetch("https://randomuser.me/api/?results=10&inc=gender,name,email,dob,phone,picture,nat")
  .then(response => response.json())
  .then(data => {
    store.fetch(data.results);
  }).catch(error => console.log(error));
}

export default fetchUsers;