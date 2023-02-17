function a()
{
   var a= document.getElementById("un").value;
   var b = document.getElementById("ps").value;
  
//    if(a=="" && b=="")
//    {
//     alert("Magne Username & Password required");
//    }
//    else if(a=="")
//    {
//     alert("Username required");
//    }
//    else if(b=="")
//    {
//     alert("Password required");
//    }
//    else if(a=="surajtawale19@gmail.com" && b=="123")
//     {
//         alert("Access Granted !");
//     }
//     else
//     {
//         alert("Access Deniend");
//     }
//    alert("Welcome "+a + " You Can Go");
//    confirm("Click On Ok To Save");

    if(a=="" && b=="")
    {
       document.getElementById("un1").innerHTML="*UserName Is Required!";
       document.getElementById("ps1").innerHTML="*Password Is Required!";
       return false;
    }
    else if(a=="")
   {
   document.getElementById("un1").innerHTML="Username required";
   return false;
   }
   else if(b=="")
   {
    document.getElementById("ps1").innerHTML="Password required";
    return false;
   }
   else if(a=="surajtawale19@gmail.com" && b=="123")
    {
        alert("Access Granted !");
        return true;
    }
    else
    {
        document.getElementById("sbtn").innerHTML="Access Deniend";
        return false;
    }
}
