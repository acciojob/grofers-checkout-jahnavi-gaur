const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
	

const getSum = () => {
	//Add your code here
	let sum = 0
	let tds = document.querySelectorAll('td')
	tds.forEach((td)=>{
		let price = td.querSelector('.prices').textContent
		sum = sum + Number(price)
	})
	let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	td1.innerText = "Total"
	td2.innerText = sum
	tr.appendCild(td1,td2)

	let table = document.querySelector('table')
	table.appendChild(tr)
};

getSumBtn.addEventListener("click", getSum);

