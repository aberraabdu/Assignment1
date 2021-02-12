
document.addEventListener('DOMContentLoaded',function(){

    document.getElementById("companies").innerHTML += localStorage.getItem("company");
    document.getElementById("owners").innerHTML +=localStorage.getItem("owner");
    document.getElementById("emails").innerHTML+=localStorage.getItem("email");
    document.getElementById("phones").innerHTML +=localStorage.getItem("phone");
    document.getElementById("annuals").innerHTML +=localStorage.getItem("annual");
    document.getElementById("loans").innerHTML +=localStorage.getItem("loan");
    document.getElementById("payments").innerHTML +=localStorage.getItem("payment");
},false);

function RejectForm() {
localStorage.removeItem("company");
localStorage.removeItem("owner");
localStorage.removeItem("email");
localStorage.removeItem("phone");
localStorage.removeItem("annual");
localStorage.removeItem("loan");
localStorage.removeItem("payment");

document.getElementById("companies").innerText = "Company: ";
document.getElementById("owners").innerText = "Owner: ";
document.getElementById("emails").innerText = "Emails: ";
document.getElementById("phones").innerText =  "Phones";
document.getElementById("annuals").innerText = "Annuals";
document.getElementById("loans").innerText = "Borrow Amount: ";
document.getElementById("payments").innerText = "Payment Term: ";
document.getElementById("interest").innerText = "Interest: ";
document.getElementById("pay").innerText = "Payment: ";
document.getElementById("profit").innerText = "Profit: ";


}
interest =localStorage.getItem("loan")*localStorage.getItem("payment")/12*0.03;

function myInterest() {

document.getElementById("interest").textContent+=interest;
}
pay=interest+localStorage.getItem("loan");
function MyPayment(){
  document.getElementById("pay").textContent+=pay;
}
  profit=pay-localStorage.getItem("loan")
function myProfit(){

  document.getElementById("profit").textContent+=profit;
}

function AcceptForm(){
  container.innerHTML+='<p> Company Name:</p>'+localStorage.getItem("company");
  container.innerHTML+='<p> Owner Name:</p>'+localStorage.getItem("owner");
  container.innerHTML+='<p> Email Address:</p>'+localStorage.getItem("email");
  container.innerHTML+='<p> Phone Number:</p>'+localStorage.getItem("phone");
  container.innerHTML+='<p> Annual Sale in Dollars:</p>'+localStorage.getItem("annual");
  container.innerHTML+='<p> Borrow Amount:</p>'+localStorage.getItem("loan");
  container.innerHTML+='<p> Payment Term:</p>'+localStorage.getItem("payment");

}
