// Task-1
// function recursive(num) {
//     let number =num
//     if (number > 1)
//     {

//       return   number + recursive(number-1)
//     }
//     else{
//         return 1
//     }
// }

// let Sum =recursive(5)
//  console.log("Sum Recursion Function is ==>==>",Sum)


//Task-2
// function recursive(num, myarray) {
//     console.log("myarray ==>",myarray)
//     if (myarray.length === 0) {
//       return false;
//     } else if (myarray[0] === num) {
//       return true;
//     } else {
//       return recursive(num, myarray.slice(1));
//     }
//   }

//   let myarray = [2, 4, 5, 6];
//   let isFound = recursive(6, myarray);
//   console.log("Result:", isFound); //true
//   let notFound = recursive(10, myarray);
//   console.log("Result:", notFound); //false

//Task-3
//   function addParagraph(text) {
//     const paragraph = document.createElement('p');
//     paragraph.innerHTML = text; 
//     document.body.appendChild(paragraph); 
//   }
//   addParagraph('I am Ahmed ILyas Student of Sir IShaq');

//Task-4
// function addListItem(text) {
//     const list = document.getElementById("myList");
//     console.log("hello",list)
//     const newItem = document.createElement("li");
//     newItem.innerHTML = text;
//     list.appendChild(newItem);
//   }
//   addListItem("Ahmed")

//Task-5
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }
// const myElement = document.getElementById("myElement");
// changeBackgroundColor(myElement, "red");

//Task-6

// function StoreValueToLocalStorage (userkey,data){
//      let datastringify=JSON.stringify(data)
//     localStorage.setItem(userkey,datastringify);
// }

// let student1 ={
//     name:"ahmed",
//     age:23
// }

// StoreValueToLocalStorage("mytoken",student1)

//Task-7

// function retrievesValueToLocalStorage (userkey){
//    return  localstorageobject=JSON.parse(localStorage.getItem(userkey)) 
// }
 
// let retriveData=  retrievesValueToLocalStorage("mytoken")

// console.log("getData",retriveData)

//Task-8

// function LocalStorageObject (data){

//     console.log("data",data)
//  let setData=localStorage.setItem("studentDetail",JSON.stringify( data)) 

//  return JSON.parse(localStorage.getItem("studentDetail"))

// } 

// let student ={
//     name:"ahmed",
//     age:23,
//     student:"student of Sir Ishaq"
// }

// let StudentDetail = LocalStorageObject(student)
// console.log("get STudentDetail from localStorage",StudentDetail)

