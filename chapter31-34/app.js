// question # 1 strat 
// let date = new Date()
// document.write(date)
// question # 1 end


// question # 2 strat 
// let date = new Date()
// let month=date.getMonth();

//  let monthslist = [ "January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write('Current Month :'+ monthslist[month])
// question # 2 end



// question # 3 strat 
// let date = new Date()
// let day=date.getDay()

//   let daysliste =['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
// alert(`Today is `+ daysliste[day ])
// question # 3 end



// question # 4 strat 

// let date=new Date();
// let day=date.getDay();
// let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// if(days[day]==='saturday'||days[day]==='Sunday'){
//     alert("It's Fun day ")
// }
// else{
//     alert('Today is not fun day ')
// }

// question # 4 end



// question # 5 strat 
// let date = new Date();

// let today = date.getDate();

// if (today < 16) {
//     alert("First fifteen days of the month");
// }
// else {
//     alert("Last days of the month");
// }
// question # 5 end



// question # 6 strat 
// let date = new Date();

// let minutesSince1970 = Math.floor(date.getTime() / (1000 * 60));

// document.write(minutesSince1970);
// question # 6 end



// question # 7 strat 
// let date = new Date();

// let hours = date.getHours();

// if (hours < 12) {
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }
// question # 7 end



// question # 8 strat 

// let laterDate = new Date(2020, 11, 31);
// document.write(laterDate);


// question # 8 end



// question # 9 strat 
// let ramadanDate = new Date("June 18, 2015");

// let today = new Date();

// let difference = today.getTime() - ramadanDate.getTime();

// let daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan 2015");
// question # 9 end



// question # 10 strat 
// let dateNow=new Date();
// let todayMilli=dateNow.getTime();
// let year2015=new Date('1 Jan,2015');
// let milli2015=year2015.getTime();
// let diffMilliSec = todayMilli - milli2015;
// let seconds=Math.floor(diffMilliSec/(1000));
// document.write('On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015')
//  question # 10 end




//  question # 11 start

// let today = new Date();
// let hoursAgo=today.getHours();
// hoursAgo=hoursAgo+1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

//  question # 11 end



//  question # 12 start
// let date = new Date();

// let year = date.getFullYear();

// date.setFullYear(year - 100);

// alert(date);








//  question # 12 end



//  question # 13 start
// let age = prompt("Enter your age:");

// let currentYear = new Date().getFullYear();

// let birthYear = currentYear - age;
// document.write(`your age is ` + age)
// document.write("<br />")

// document.write(`Your birth year is` + birthYear);
//  question # 13 end



//  question # 14 start





// let customerName='Samreen Shah';
// let today=new Date();
// let month=today.getMonth();
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// let noUnits=410;
// let chargePerunit=16;
// let netAmount=noUnits*chargePerunit;
// let lastCharge=350;
// let afterDueDate=netAmount+lastCharge;
// document.write('<h1>'+'K-Electric Bill'+'</h1>')
// document.write('Customer Name :'+customerName+'<br>');
// document.write('Month :'+mlist[month]+'<br>');
// document.write('Number of units :'+noUnits+'<br>');
// document.write('Charges per unit :'+chargePerunit+'<br>');
// document.write('<br>')
// document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
// document.write('Late payment surcharge :'+lastCharge+'<br>');
// document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');
//  question # 14 end