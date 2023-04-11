const prepareShoppingList = () => {
  const ingredList = [
    { ttl: 'banana', measure: '1 cup', id: '1', recipe: '1a' },
    { ttl: 'tomato', measure: '1 kg', id: '2', recipe: '1a' },
    { ttl: 'banana', measure: '0.5 cup', id: '1', recipe: '2a' },
    { ttl: 'milk', measure: '1 spoon', id: '3', recipe: '3a' },
    { ttl: 'banana', measure: '1 cup', id: '1', recipe: '9a' },
    { ttl: 'milk', measure: '200 ml', id: '3', recipe: '4a' },
    { ttl: 'tomato', measure: '0.8 kg', id: '2', recipe: '6a' },
    { ttl: 'banana', measure: '100 g', id: '1', recipe: '7a' },
    { ttl: 'milk', measure: '0,3 spoon', id: '3', recipe: '1a' },
    { ttl: 'banana', measure: '1 cup', id: '1', recipe: '8a' },
  ];
  const sortedIngredients = [];
  const summaryList = [];
  const sortedShoppingList = [];

  while (ingredList.length > 0) {
    const ingredient = ingredList.filter(
      (item, index) => item.ttl === ingredList[0].ttl
    );
    sortedIngredients.push(ingredient);
    //-----
    ingredient.forEach(item =>
      ingredList.splice(
        ingredList.findIndex(ingr => ingr.ttl === item.ttl),
        1
      )
    );
  }
  sortedIngredients.forEach(ingr => {
    ingr.forEach(item => {
      item.measure = item.measure.replace(',', '.').trim();
      item.quantity = Number.parseFloat(item.measure);
      item.unit = item.measure.replace(item.quantity.toString(), '').trim();
      delete item.measure;

      // sortedShoppingList.push(item.filter(({ unit }) => unit === item[0].unit));
    });
  });

  console.log('sortedIngredients', sortedIngredients);
  console.log('ingredList', ingredList);
  console.log('sortedShoppingList', sortedShoppingList);
};

prepareShoppingList();
