function validation(){
    console.log("form validation function called");
    var un = document.reg.uname.value;
    var em = document.reg.mail.value;
    var g = document.reg.gen.value;
    var pn = document.reg.phno.value;
    var dob = document.reg.dob.value;
    var p = document.reg.pass.value;
    var cp = document.reg.conpas.value;
    
    
    if( un == "" ){
        alert("--No username entered--");
        un.focus();
        return false;
    }
    if( em == "" ){
        alert("--No email entered--");
        em.focus();
        return false;
    }
    if( g == "" ){
        alert("--Gender not selected--");
        g.focus();
        return false;
    }
    if( pn == "" ){
        alert("--No phone number entered--");
        pn.focus();
        return false;
    }
    if( p == "" ){
        alert("--Password not entered--");
        p.focus();
        return false;
    }
    if( dob == "" ){
        alert("--D.O.B. not selected--");
        dob.focus();
        return false;
    }
    if( cp == "" ){
        alert("--Password not entered for confirmation--");
        cp.focus();
        return false;
    }
    if( p.localeCompare(cp)!=0){
        alert("--Passwords do not match--");
        cp.focus();
        return false;
    }
    if( pn.length!=10 || isNaN(pn)){
        alert("--Phone number should be 10 digit long and consist only of numbers--");
        pn.focus();
        return false;
    }
    var at = -1;
    var dot = -1;
    at = em.indexOf('@');
    dot = em.lastIndexOf('.');
    if(at<2 || dot-at<3 || em.length-dot<3){
        alert("--Invalid email--");
        em.focus();
        return false;
    }

    alert("Form Submitted!!");
    return true;
}