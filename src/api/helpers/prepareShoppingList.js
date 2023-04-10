const prepareShoppingList = () => {
  const ingredList = [
    { ttl: 'banana', measure: '1 cup' },
    { ttl: 'tomato', measure: '1 kg' },
    { ttl: 'banana', measure: '1 cup' },
    { ttl: 'milk', measure: '1 spoon' },
    { ttl: 'banana', measure: '1 cup' },
    { ttl: 'milk', measure: '200 ml' },
    { ttl: 'tomato', measure: '1 kg' },
    { ttl: 'banana', measure: '100 g' },
    { ttl: 'milk', measure: '1 spoon' },
    { ttl: 'banana', measure: '1 cup' },
  ];
  const ingredients = [];

  while (ingredList.length > 0) {
    const foundIndexes = [];
    const ingredient = ingredList.filter((item, index) => {
      if (item.ttl === ingredList[0].ttl) {
        // console.log('index', index);

        foundIndexes.push(index);
      }
      return item.ttl === ingredList[0].ttl;
    });
    //-----
    ingredients.push(ingredient);
    console.log('foundIndexes', foundIndexes);

    for (let i = 0; i < foundIndexes.length; i++) {
      console.log(foundIndexes[i]);
      ingredList.splice(foundIndexes[i], 1);
      console.log(ingredList);
    }

    // console.log('ingredList', ingredList);
  }

  // console.log('ingredient', ingredients);
  // console.log('ingredList', ingredList);
};

prepareShoppingList();
