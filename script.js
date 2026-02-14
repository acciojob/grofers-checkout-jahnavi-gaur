const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum = 0;

	// Select only price cells
	let prices = document.querySelectorAll('.prices');

	prices.forEach((priceCell) => {
		sum += Number(priceCell.textContent);
	});

	// Prevent adding total row multiple times
	if (document.querySelector('.total-row')) return;

	let tr = document.createElement('tr');
	tr.classList.add('total-row');
	tr.setAttribute('id','and')

	// let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	// td1.innerText = "Total";
	td2.innerText = sum;

	// tr.appendChild(td1);
	tr.appendChild(td2);

	document.querySelector('table').appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
