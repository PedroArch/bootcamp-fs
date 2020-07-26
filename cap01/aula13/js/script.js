window.addEventListener("load", () => {
  doSpread();
  doRest();
  doDestructuring();
});

// Spread
function doSpread() {
  const marriedMen = users.users.filter((user) => user.name.title === "Mr");
  const marriedWomen = users.users.filter((user) => user.name.title === "Ms");

  marriedUsers = [...marriedMen, ...marriedWomen];

  console.log(marriedUsers);
}

// Rest
function doRest() {
  console.log(infiniteSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

// Destructuring
function doDestructuring() {
  const first = users.users[0];

  const username = first.login.username;
  const password = first.login.password;
  console.log(username);
  console.log(password);

  // agora com Destructuring

  const { uuid, salt } = first.login;
  console.log(uuid);
  console.log(salt);
}
