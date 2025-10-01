const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const prices = document.querySelectorAll(".price");

  // Initialize total sum
  let total = 0;

  // Loop through prices and add them to total
  prices.forEach(priceCell => {
    total += Number(priceCell.textContent);
  });

  // Create new row and cell
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Set cell to span across both columns
  newCell.setAttribute("colspan", "2");
  newCell.style.textAlign = "right";
  newCell.style.fontWeight = "bold";
  newCell.textContent = `Total Price: Rs ${total}`;

  // Append cell to row, and row to table
  newRow.appendChild(newCell);

  // Append the new row to the table
  document.querySelector("table").appendChild(newRow);

  // Optional: Disable button after one use to prevent multiple totals being added
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
