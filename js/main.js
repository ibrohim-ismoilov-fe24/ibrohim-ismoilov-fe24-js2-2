





















 let  name =prompt("ismingizni kiriting: ")
 let  surname=  prompt("familyangizni  kiriting: ")
 let  age=prompt("yoshingizni kiriting: ")
 let  school =prompt("o'qish joingizni kiriting: ")

 let student = {
    ism : name,
    familya : surname,
    yosh:age,
    uqish: school
 }
 console.log("foydalanuvchi ismi "+student["ism"]);
 console.log("foydalanuvchi familyasi "+student["familya"]);
 console.log("foydalanuvchi yoshi "+student["yosh"]);
 console.log( "foydalanuvchi o'qish joyi " + student["uqish"]);
