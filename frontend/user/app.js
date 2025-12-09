// Backend se food list fetch karna
fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("food-list");
    let html = "";

    data.forEach(item => {
      html += `
        <div>
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Status: ${item.in_stock ? "Available" : "Out of stock"}</p>
          <hr>
        </div>
      `;
    });

    container.innerHTML = html;
  })
  .catch(err => {
    console.error("API Error:", err);
    document.getElementById("food-list").innerHTML = "Failed to load data.";
  });
