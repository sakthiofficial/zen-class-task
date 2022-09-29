// a. Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();//----------new create a specific object
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var res=JSON.parse(request.response);
   var reg = res.filter((ele)=>ele.region == "asia").map((ele)=>ele.name);
   console.log(reg);
};

// b. Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();//----------new create a specific object
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var res=JSON.parse(request.response);
   var reg = res.filter((ele)=>ele.population< 200000);
   console.log(reg);
};

// c. Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();//----------new create a specific object
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var res=JSON.parse(request.response);
   var reg = res.forEach ((ele) => console.log(ele.name+" "+ele.capital+" "+ele.flag));
   console.log(reg);
};

// d.Print the total population of countries using reduce function

var request=new XMLHttpRequest();//----------new create a specific object
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var res=JSON.parse(request.response);
   var reg = res.reduce((acc,ele)=>acc+ele.population,0)
   console.log(reg);
};

// Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();//----------new create a specific object
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var res=JSON.parse(request.response);
   var reg = res.map((ele)=>ele.currencies);
   var sum = reg.filter(ele)=>ele.code ==
   console.log(res);
};

