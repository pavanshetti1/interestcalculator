const submit_btn = document.querySelector("button");
const bill_text = document.querySelector("#input-bill");
const percent_text = document.querySelector("#input-percent");
const total_text = document.querySelector(".total-text");
const interestAmt = document.querySelector(".interest-amt");

submit_btn.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let billVal = Number(bill_text.value);
    let percentVal = Number(percent_text.value);

    if(billVal > 0 && percentVal > 0){
        let res = (billVal * percentVal) / 100;
        let finalRes = Math.round(res*100)/100;
        let tot = billVal + finalRes;
        interestAmt.innerText = `Interest amt: $${finalRes}`;
        total_text.innerText = `Total : $${tot}`;
    }

    if(percentVal == 0){
        total_text.innerText = `Total : $${billVal}`;
    }
});