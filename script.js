const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let sum = 0;

    let prices = document.querySelectorAll('.prices');

    prices.forEach((priceCell) => {
        sum += Number(priceCell.textContent);
    });

    if (document.querySelector('#ans')) return;

    let tr = document.createElement('tr');
    tr.classList.add('total-row');

    let td = document.createElement('td');
    td.setAttribute('id', 'ans');   // ✅ IMPORTANT
    td.innerText = sum;

    tr.appendChild(td);
    document.querySelector('table').appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
