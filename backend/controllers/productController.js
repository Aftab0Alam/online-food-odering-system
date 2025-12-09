exports.getProducts = (req, res) => {
  const products = [
    { id: 1, name: "Burger", price: 80, in_stock: true },
    { id: 2, name: "Pizza", price: 200, in_stock: false },
    { id: 3, name: "Pepsi", price: 25, in_stock: true }
  ];

  res.json(products);
};
