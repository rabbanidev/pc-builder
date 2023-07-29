const categorizeComponents = (categories, pcComponents) => {
  const categorizedData = {};

  // Initialize the categorizedData object with empty arrays for each category
  categories.forEach((category) => {
    categorizedData[category] = [];
  });

  // Iterate through each component and categorize it
  for (const componentName in pcComponents) {
    const component = pcComponents[componentName];
    const category = component.category;
    if (categorizedData.hasOwnProperty(category)) {
      categorizedData[category].push(component);
    } else {
      categorizedData["Others"].push(component);
    }
  }

  return categorizedData;
};

export default categorizeComponents;
