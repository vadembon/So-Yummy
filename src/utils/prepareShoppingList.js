const parseMeasure = measure => {
  measure = measure.replace(',', '.').trim();
  const quantity = Number.parseFloat(measure);
  const unit = measure.replace(quantity.toString(), '').trim();
  return { quantity, unit };
};

export const prepareShoppingList = ingredList => {
  // const ingredList = [

  //  { ttl: 'banana', measure: '1 cup', id: '1', recipe: '1a', thb: '' },

  //  { ttl: 'tomato', measure: '1 kg', id: '2', recipe: '1a', thb: '' },

  //  { ttl: 'banana', measure: '0.5 cup', id: '1', recipe: '2a', thb: '' },

  //  { ttl: 'milk', measure: '1 spoon', id: '3', recipe: '3a', thb: '' },

  //  { ttl: 'banana', measure: '1 cup', id: '1', recipe: '9a', thb: '' },

  //  { ttl: 'milk', measure: '200 ml', id: '3', recipe: '4a', thb: '' },

  //  { ttl: 'tomato', measure: '0.8 kg', id: '2', recipe: '6a', thb: '' },

  //  { ttl: 'banana', measure: '100 g', id: '1', recipe: '7a', thb: '' },

  //  { ttl: 'milk', measure: '0,3 spoon', id: '3', recipe: '1a', thb: '' },

  //  { ttl: 'banana', measure: '1 cup', id: '1', recipe: '8a', thb: '' },

  // ];

  const summaryList = {};

  ingredList?.forEach(item => {
    const { unit, quantity } = parseMeasure(item.measure);
    const key = JSON.stringify([item.id, unit]);
    if (!summaryList[key]) {
      summaryList[key] = {
        ttl: item.ttl,
        thb: item.thb,
        sum: quantity,
        unit,
        keys: [{ id: item.id, recipe: item.recipe }],
      };
    } else {
      const current = summaryList[key];
      current.sum += quantity;
      current.keys.push({ id: item.id, recipe: item.recipe });
    }
  });
  return Object.values(summaryList);
};

// prepareShoppingList();
