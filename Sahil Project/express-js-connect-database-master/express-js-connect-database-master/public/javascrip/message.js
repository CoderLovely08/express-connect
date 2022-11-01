function check() {
    var x = document["s"]["firstnm"].value;
    if (x== "") {
      alert("please Enter First name");
      return false;
    }   
    var x=document.s;
    var input=x.firstnm.value;
    if(!(/^[a-zA-Z]+$/.test(input))){
        alert('In name only alphabets allowed');
        return false;
    }
    var x = document["s"]["lastnm"].value;
    if (x== "") {
      alert("please Enter last name ");
      return false;
    }   
    var x=document.s;
    var input=x.lastnm.value;
    if(!(/^[a-zA-Z]+$/.test(input))){
        alert('In name only alphabets allowed');
        return false;
    }
    var x = document["s"]["emails"].value;
    if (x== "") {
      alert("please Enter email id ");
      return false;
    } 
    var x = document["s"]["pass"].value;
    if (x=="") {
      alert("please Enter password");
      return false;
    } 
    var x = document["s"]["Cpass"].value;
    if (x=="") {
      alert("please Enter conformation password");
      return false;
    }
    var x = document["s"]["pass"].value;
    var y = document["s"]["Cpass"].value;
    if(x!=y){
      alert("please Enter correct conformation password");
      return;
    }

}
function checked(){
    var x = document["login"]["emails"].value;
    if (x== "") {
      alert("please Enter email id ");
      return false;
    } 
    var x = document["login"]["pass"].value;
    if (x=="") {
      alert("please Enter your password");
      return false;
    }
}