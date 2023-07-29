const getTotalPrice = (components) => {
  let total = 0;

  for (const componentKey in components) {
    if (components.hasOwnProperty(componentKey)) {
      total += components[componentKey].price;
    }
  }

  return total;
};

export default getTotalPrice;
