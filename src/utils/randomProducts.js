const randomProducts = (products) => {
  const uniqueCategories = new Set();
  const filteredProducts = [];

  for (const product of products) {
    if (!uniqueCategories.has(product.category)) {
      filteredProducts.push(product);
      uniqueCategories.add(product.category);
    }
  }

  return filteredProducts.slice(0, 6);
};

export default randomProducts;
