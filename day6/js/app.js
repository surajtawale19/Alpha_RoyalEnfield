// function a()
// {
//     var name=document.getElementById("fname").value;
//      regular Expression    
//       var regx=/^[a-zA-Z]{3,20}$/;
//     if(regx.test(name))
//     {
//         alert("Access Allowed");
//     }
//     else
//     {
//         {
//             alert("Access Denied");
//         }
//     }
// }

// function phoneno()
// {
//     var phone=document.getElementById("pno").value;
//     var regp=/^[6-9]{0-9}$/
//     if(regp.test(phone))   
//     {
//         alert("Access Allowed");
//     }
//     else
//     {
//         {
//             alert("Access Denied");
//         }
//     }

// }

// function p()
// {
//     var pass=document.getElementById("create_pass").value;
//     var regpass=/^[A-Za-z0-9!@#$%^&*_+]{0,15}$/
//     if(regpass.test(pass))   
//     {
//         // alert("Access Allowed");
//         var confpass = document.getElementById("conf_pass").value;
//         if(pass==confpass)
//         {
//             alert("Access Granted!!");
//         }
//         else
//         {
//             alert("dienied");
//         }
//     }
//     else
//     {
//        alert("Access Denied");
//     }   
// }

function a()
{
    var firstname=document.getElementById("fname").value;
    var regn=/^[a-zA-Z]{2,10}$/;

    var lastname=document.getElementById("lname").value;
    var regln=/^[a-zA-Z]{2,10}$/;

    var pnumber=document.getElementById("pno").value;
    var regpnum=/^[6-9][0-9]{9}$/;

    var Email=document.getElementById("gmail").value;
    var regEmail=/^[A-Za-z0-9@!#$%^&*]{0,20}$/;

    var pass=document.getElementById("create_pass").value;
    var regCretPass=/[A-Za-z0-9!@#$%^&*_+]{0,15}/;

    var confpass=document.getElementById("create_pass").value;
    var regConfPass=/[A-Za-z0-9!@#$%^&*_+]{0,15}/;


    if(firstname=="")
    {
        document.getElementById("sfirst").innerHTML="*username required";
        return false;
    }
    else if(regn.test(firstname))
    {
        document.getElementById("sfirst").innerHTML="";
    }
    else
    {
        document.getElementById("sfirst").innerHTML="Invalid username";
        return false;
    }

    // LAST NAME

    if(lastname=="")
    {
        document.getElementById("slast").innerHTML="*Last name required";
        return false;
    }
    else if(regln.test(lastname))
    {
        document.getElementById("slast").innerHTML="";
    }
    else
    {
        document.getElementById("slast").innerHTML="Invalid username";
        return false;
    }

    // PHONE NUMBER

    if(pnumber=="")
    {
        document.getElementById("snumber").innerHTML="*phone number required";
        return false;
    }
    else if(regpnum.test(pnumber))   
    {
        document.getElementById("snumber").innerHTML="";
    }
    else
    {
        document.getElementById("snumber").innerHTML="Invalid phone number";
        return false;
    }

    // EMAIL 

    if(Email=="")
    {
        document.getElementById("semail").innerHTML="*Email required";
        return false;
    }

    // CREATE PASSWORD

    if(pass=="")
    {
        document.getElementById("spass").innerHTML="*password required";
        return false;
    }
    else if(regCretPass.test(pass))   
    {
        document.getElementById("spass").innerHTML="";
    }
    else
    {
        document.getElementById("spass").innerHTML="Invalid phone number";
        return false;
    }

    // CONFIRM PASSWORD

    if(confpass=="")
    {
        document.getElementById("sconfpass").innerHTML="*password required";
        return false;
    }
    else if(pass==confpass)
    {
        document.getElementById("sconfpass").innerHTML="";  
    }
    else
    {
        document.getElementById("sconfpass").innerHTML="Denied"; 
        return false;  
    }
}
