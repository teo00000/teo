let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupedById(users);
  
  function groupedById(array) {
      return array.reduce((groupedPeople, person) => {
          const id = person[id];
          groupedPeople[person[id]] = person;
          return groupedPeople;
      }, {});
  }