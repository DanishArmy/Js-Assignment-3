/*
// chapter 14-16
// question 1
var myArray = new Array(); 
//question 2
var obj ={
};
//question 3
var arr1 = ["appel","banana","mango","cheery"];
//question 4
var arr1 =[1,2,3,4,5];
//question 5
var arr1 = [true,false,false,true];
//question 6
var arr1 = ["Muhammad Ibad",1,true,0.5]
//question 7
var arr1 =["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL..","PHD"];
//a= arr1.length;
//document.write(a)
document.write("<h1>Qualification</h1>"+"<br>")
for (var i=0 ; i<arr1.length ; i++){
	document.write((i+1)+") "+arr1[i]+"<br>");
}
//question 8
var arr1 =["Michael","John","Tony"];
var arr2 =[320,230,480];
for(var i = 0; i<arr1.length;i++){
	document.write("Score of "+arr1[i]+" is "+arr2[i]+" Percentage "+(arr2[i]/500)*100)
	document.write("%<br>")
}
//question 9
arr1 = ["blue","red","voilet"];
document.write(arr1+"<br>");
var a = prompt("enter colour name");
arr1.unshift(a);
document.write(arr1+"<br>"); 
var b = prompt(" what color he/she wants to add to the end ");
arr1.push(b);
document.write(arr1+"<br>"); 
arr1.unshift("Dark green","light green");
document.write(arr1+"<br>"); 
arr1.shift();
document.write(arr1+"<br>"); 
arr1.pop();
document.write(arr1+"<br>"); 
var c = prompt(" which index you wants to add a color ");
var d = prompt("Enter Color ");
arr1[c]=d;
document.write(arr1+"<br>"); 
var e = prompt("Enter  start Position for deletion");
var f = prompt("Enter end Position for deletion");
for(var i = e; i<=f ;i++){
	delete arr1[i]
}
document.write(arr1+"<br>"); 
//question 10
arr1 = [320,230,480,120]
document.write("Scores of Students : "+ arr1+"<br>");
arr1.sort()
document.write("Ordered Scores of Students : "+ arr1+"<br>");
//question 11
var arr1 = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:<br>");
document.write(arr1+"<br>"); 
document.write("<br>")
var arr2= arr1.slice(2,4);
document.write("Selected Cities list:<br>");
document.write(arr2+"<br>"); 
//question 12
var arr1 = ["this ","is ","my ","cat "];
document.write("Array:<br>");
document.write(arr1+"<br>"); 
var a =arr1.join(" ");
document.write("String:<br>");
document.write(a);
//question 13
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.shift();
	document.write("Out :<br>");
	document.write(a+"<br>")
}
//question 14
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.pop();
	document.write("Out :<br>");
	document.write(a+"<br>")
}
*/
/* 
//chapter17-20
// Question 1
var Arr=[[1,2],[3,4],[5,6]];
// Question 2
var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// Question 3
for (let index = 1; index < 11; index++) {
    console.log(index);
     }
// Question 4
var num=prompt("Enter Number");
var len=prompt("Enter Length");
for (let index = 1; index <= len; index++) {
    console.log(num," * ",index," = ",num*index);
}
// Question 5
var fruits=["apple","banana","mango","orange","strawberry"]
for (let index = 0; index < fruits.length; index++) {
    console.log("Element at Index ",index," is ",fruits[index]);
    
}
// Question 6
console.log("Counting : \n");
var Result="";
for (let index = 1; index < 16; index++) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Reversed Counting : \n");
for (let index = 10; index > 0; index--) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Even Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Odd Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2!=0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Series : \n");
for (let index = 2; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+"k, ";   
    }
}
console.log(Result);
// QUESTION 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}
// QUESTION 8
var A = [24, 53, 78, 91, 12];
var a=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]>a) {
        a=A[index]
    }
    
}
console.log("The Largest Number is ",a);
// QUESTION 9
var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);
// QUESTION 10
var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);
*/
/* 
//chapter21-25
//question 1
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
document.write("Hello "+a+" "+b)
//question 2
var a = prompt("Enter your Favourute phone");
document.write("My Favourute phone is  "+a+"<br>");
document.write("length of string : "+(a.length));
//question 3
a="Pakistani"
document.write("String : "+a+"<br>")
document.write("Index Of n :  ")
document.write(a.indexOf("n"))
//n="asdf"
//if (n.match("e")) {
//	document.write("yes")
//}
//question 4
a="Hello world"
var b =a.lastIndexOf("l");
document.write("String : "+a)
document.write("<br>last inex of l : "+b)
//question 5
var a="Pakistani"
document.write("String : "+a)
var b=a.charAt(3)
document.write("<br>Character at inedx 3 : "+b)
//question 6
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
var c = a.concat(b);
document.write("Hello "+c);
//question 7
var str ="Hyedrabad";
var res =str.replace("Hyedr", "islam");
document.write(res);
//question 8
var message = "Ali and Sami are best friends. They play cricket and football together"
var mes =message.replace("and", "&");
var mess =mes.replace("and", "&");
document.write(mess);
//question 9
var a ="472"
document.write("Value : "+ a+"<br>"+"type : ")
document.write(typeof a);
var b =Number(a)
document.write("<br>Value : "+ b+"<br>"+"type : ")
document.write(typeof b);
//question 10
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b =a.toUpperCase();
document.write("Upper case : "+b)
//question 11
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b= a.slice(0,1)
var b = b.toUpperCase()
//document.write(b)
var a =a.slice(1,a.length)
var c= b.concat(a)
document.write("<br>Titel case : "+c)
//question 12
var a =35.36;
document.write("Number : "+a+"<br>")
var b =a.toString()
var c =b.replace(".","");
document.write("Result  : "+c)
//question 13
var a = prompt("Enter username")
for (var i = 0; i < a.length; i++) {
	b = a.charAt(i)
	b=b.charCodeAt(0)
	if (b ==33 || b==44 || b==46 || b==64){
		document.write("Enter a valid username")
	}
}
//question 14
var a=["cake","appel pie","cookie","chips","patties"]
document.write(a+"<br>")
var b = prompt("enter item to be search ")
b=b.toLowerCase()
function find(b){
	for (var i =0 ; i< a.length; i++){
	if (a[i]==b) {
		document.write(a[i]+" item is <strong>avaliable</strong> at index "+i+" i our bakery")
		return;
	}
}
document.write("we are sorry "+b+" is <strong>not avaliable</strong> in our bakery")
}
find(b)
//question 15
var a = prompt("Enter Password<br>");
pswrdcheck(a);
function pswrdcheck(a){
	var b= a.slice(0,1)
	b=b.charCodeAt(0)
	var c = a.length
	var cont = 1
	str =false;
	int =false;
	if (b >= 48 && b<=57) {
		document.write("Password can not begin with a number<br>Please Enter a valid password");
		return;
	}
	else if (c<6){
		document.write("Password is short<br>Please Enter a valid password");
		return;
	}
	for (var i = 1; i < a.length; i++){
		var d =a.charAt(i)
		if (d >= 48 && d<=57) {
			int = true;
		}
		if (d>= 65 && d <=90 || d>=97 || d<=122 ) {
			str = true
		}
	}
	if (!str && !int) {
		document.write("Password must contain Alphabet and Number both<br>Please Enter a valid password")
		return
	}
}
//question 16
var university ="University of Karachi";
var str = []
var str =university.split('');
for (var i = 0; i < str.length; i++) {
	document.write(str[i]+"<br>")
}
//question 17
var a = prompt("Enter input");
document.write("User Input: "+a)
var b= a.charAt(a.length-1)
document.write("<br>last Character of input : "+b)
//question 18
var a ="the quick brown fox jumps over the lazy dog"
document.write("there are "+a.match(/the/g).length+" occurences of word the")
*/