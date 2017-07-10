function validateform(){  
var email=document.myform.email.value;  
var phone=document.myform.phone.value;  
  
if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;  
}else if(phone.length<10 || phone.length>10 ){  
  alert("Phone must be 10 characters long.");  
  return false;  
  }  
} 