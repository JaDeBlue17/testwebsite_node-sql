// function validation(){
//     console.log("form validation function called");
//     var un = document.reg.uname.value;
//     var em = document.reg.mail.value;
//     var g = document.reg.gen.value;
//     var pn = document.reg.phno.value;
//     var dob = document.reg.dob.value;
//     var p = document.reg.pass.value;
//     var cp = document.reg.conpas.value;
    
    
//     var at = -1;
//     var dot = -1;
//     at = em.indexOf('@');
//     dot = em.lastIndexOf('.');
    
//     if( un == "" ){
//         alert("--No username entered--");
//         un.focus();
//         return false;
//     }
//     else if( em == "" ){
//         alert("--No email entered--");
//         em.focus();
//         return false;
//     }
//     else if( g == "" ){
//         alert("--Gender not selected--");
//         g.focus();
//         return false;
//     }
//     else if( pn == "" ){
//         alert("--No phone number entered--");
//         pn.focus();
//         return false;
//     }
//     else if( p == "" ){
//         alert("--Password not entered--");
//         p.focus();
//         return false;
//     }
//     else if( dob == "" ){
//         alert("--D.O.B. not selected--");
//         dob.focus();
//         return false;
//     }
//     else if( cp == "" ){
//         alert("--Password not entered for confirmation--");
//         cp.focus();
//         return false;
//     }
//     else if( p.localeCompare(cp)!=0){
//         alert("--Passwords do not match--");
//         cp.focus();
//         return false;
//     }
//     else if( pn.length!=10 || isNaN(pn)){
//         alert("--Phone number should be 10 digit long and consist only of numbers--");
//         pn.focus();
//         return false;
//     }
//     else if(at<2 || dot-at<3 || em.length-dot<3){
//         alert("--Invalid email--");
//         em.focus();
//         return false;
//     }
//     else{
//         alert("Form Submitted!!");
//         return true;
//     }
// }

    const form = document.getElementById('reg');

    form.addEventListener('submit', (e) => {

        var un = document.getElementById('uname').value;
        var em = document.getElementById('mail').value;
        var g = document.reg.gen.value;
        var pn = document.getElementById('phno').value;
        var dob = document.getElementById('dob').value;
        var p = document.getElementById('pass').value;
        var cp = document.getElementById('conpas').value;

        let at = -1;
        let dot = -1;
        at = em.indexOf('@');
        dot = em.lastIndexOf('.');

        let messages = []
        
        if( un == "" || un == null){
            messages.push("No username entered");
        }
        if( em == "" || em == null){
            messages.push("No email entered");
        }else if(at<2 || dot-at<3 || em.length-dot<3){
            messages.push("Invalid email");
        }
        if( g == "" || g == null){
            messages.push("Gender not selected");
        }
        if( pn == "" || pn == null){
            messages.push("No phone number entered");
        }else if( pn.length!=10 || isNaN(pn)){
            messages.push("Phone number should be 10 digits long and consist only of numbers");
        }
        if( dob == "" || dob == null){
            messages.push("D.O.B not selected");
        }
        if( p == "" || cp == "" || p == null || cp == null){
            messages.push("A password field is empty");
        }else if( p.localeCompare(cp)!=0){
            messages.push("Passwords do not match");
        }

        // console.log(messages.join(", "));
        if( messages.length > 0 ){
            e.preventDefault();
            printErrors(messages);
        }
    })

    function printErrors(msg){
        var errbox = document.getElementById('errmsgs');
        var i = 1;
        var errmsg = "The form could not be submit due to the following input errors: \n";
        for(x in msg){
            errmsg += i + '. '+ msg[x] + "\n";
            i = i+1;
        }
        errbox.innerText = errmsg;
        errbox.style.border = "2px solid black";

        setTimeout(() => {
          
            errbox.style.display = 'none';
          }, 5000);
    }