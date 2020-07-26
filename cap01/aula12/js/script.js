window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = users.users.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });
  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = users.users.filter((user) => {
    return user.dob.age > 50;
  });
  console.log(olderThan50);
}

function doForEach() {
  const mappedUser = doMap();
  mappedUser.forEach((user) => {
    user.nameSize =
      user.name.title.length + user.name.first.length + user.name.last.length;
  });
  console.log(mappedUser);
}

function doReduce() {
  const totalAge = users.users.reduce((acc, current) => {
    return acc + current.dob.age;
  }, 0);
  console.log(totalAge);

  // Confirmando com o for
  let sumAges = 0;

  for (let i = 0; i < users.users.length; i++) {
    var current = users.users[i];
    sumAges += current.dob.age;
  }
  console.log(sumAges);
}

function doFind() {
  const found = users.users.find((user) => {
    return user.location.state === "Minas Gerais";
  });
  console.log(found);
}

function doSome() {
  const found = users.users.some((user) => {
    return user.location.state === "Amazonas";
  });
  console.log(found);
}

function doEvery() {
  const every = users.users.every((user) => {
    return user.nat === "BR";
  });
  console.log(every);
}

function doSort() {
  const mappedNames = users.users
    .map((user) => {
      return { name: user.name.first };
    })
    .filter((user) => {
      return user.name.startsWith("A");
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  console.log(mappedNames);
}
