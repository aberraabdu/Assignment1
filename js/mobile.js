function MyFunction() {

 company=document.getElementById("company").value;
 owner=document.getElementById("owner").value;
 email=document.getElementById("email").value;
 phone=document.getElementById("phone").value;
 annual=document.getElementById("annual").value;
 loan=document.getElementById("loan").value;
 payment=document.getElementById("payment").value;

 localStorage.setItem("company", company);
 localStorage.setItem("owner",owner);
 localStorage.setItem("email",email);
 localStorage.setItem("phone",phone);
 localStorage.setItem("annual",annual);
 localStorage.setItem("loan",loan);
 localStorage.setItem("payment", payment)




}
