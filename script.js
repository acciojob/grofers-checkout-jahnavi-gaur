const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(priceCell => {
    // Clean the text and convert to number
    total += Number(priceCell.textContent.trim());
  });

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.setAttribute("id", "ans"); // Required by test
  newCell.setAttribute("colspan", "2");
  newCell.style.textAlign = "right";
  newCell.style.fontWeight = "bold";
  newCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(newCell);
  document.querySelector("table").appendChild(newRow);

  getSumBtn.disabled = true; // Optional: prevent multiple rows
};


getSumBtn.addEventListener("click", getSum);
