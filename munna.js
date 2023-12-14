


// //formvalidation exam one
// function validateform() {
//     const form = document.forms["myForm"]
//     const inputform = form["fname"]
//     console.log(inputform)
//     let inputvalue = inputform.value;
//     if(inputvalue === ""){
//         alert("Please input your valid name");
//         return false
//     }   
// };

// validateform()



//exam two

// function myFunction() {
//     const valueinput = document.querySelector("#txt");
//     const takeValue = valueinput.value;
//     document.querySelector("#print").innerHTML = takeValue;
// }

// const element = document.querySelector("#txt")

// element.addEventListener("keyup", myFunction)






// // exam number four
// function show() {
//     const inputvalue = document.getElementById("num").value
    
//     document.querySelector("#showHere").innerHTML = inputvalue;

//     let txt;
//     if (isNaN(inputvalue) || inputvalue < 1 || inputvalue > 10) {
//         txt = "Input Not valid"
//     } else {
//         txt = "congratulations, Input Valid"
//     }
//     document.querySelector("#showHereSms").innerHTML = txt
// }


// const element = document.querySelector("#button");
// element.addEventListener("click", show)





// //javascript can control css exam five
// setTimeout(function () {
//     let pElement = document.querySelector("#demo")
// pElement.style.color = "red";
// pElement.style.fontSize = "30px";
// }, 3000)




    // function move() {
    //     let childElement = document.querySelector("#child")
    //     let movefunction = setInterval(show,20)
    //     let pos = 0;

    //     function show() {
    //         if(pos < 350){
    //             pos++
    //             childElement.style.top = pos + 'px';
    //             childElement.style.left = pos + 'px';
    //         }else
    //         clearInterval(movefunction);
    //     }
    // }




    //Event Bubbling or Event Capturing
    // const container = document.querySelector("#container");
    // const btn = document.querySelector("#btn");

    // btn.addEventListener('click', function () {
    //     console.log('I am btn element')  
    //   }, true)
    
    // container.addEventListener('click', function () {
    // console.log('i am container')
    // }, true);



    //removeEventListener এর ব্যবহার
    // const myDiveElement = document.querySelector("#myDiv");
    // const btn = document.querySelector("#btn");

    // function myFunction(){
    //     document.querySelector("#show").innerHTML = Math.random()
    // }
    // myDiveElement.addEventListener('mousemove', myFunction);

    // function stop() {
    //     myDiveElement.removeEventListener('mousemove', myFunction)
    // }

    // btn.addEventListener("click", stop);


    


    //three way to get innerHTML value
    // const p = document.querySelector("#txt")

    // const wayOne = p.innerHTML
    // const wayTwo = p.firstChild.nodeValue

    // const waythree = p.childNodes[0].nodeValue
    // console.log(waythree)
    // console.log(wayTwo)

    // console.log(wayOne);

    

    // //creating new HTML Element
    // const addElement = document.createElement('p')
    // const addNode = document.createTextNode('I am new added from js')
    // const addNew = addElement.appendChild(addNode)
    // const element = document.querySelector('#parent')
    // element.appendChild(addNew)


   





    // //syntex insertBefor method
    // const add = document.querySelector('#add')
    // const child = document.querySelector('#child')

    // const Element = document.createElement('p');
    // const childElement = document.createTextNode("I am new Element from js")

    // Element.appendChild(childElement)
    // console.log(Element)

    // add.insertBefore(Element, child)

    // console.log(childElement.nodeName)



    // //replaceChild method
    // const parent = document.querySelector('#parent')
    // const childOne = document.querySelector('#childOne')

    // const newElement = document.createElement('p');
    // const newTextNode = document.createTextNode("I am new node from js")

    // newElement.appendChild(newTextNode);

    // parent.replaceChild(newElement, childOne)


    //   const value = document.getElementsByClassName('txt')

    //   console.dir(value['three'].innerHTML)





// //windo object settimeout and setinterval use
// let btn = document.getElementById("btn")
// console.log(btn);
// let show = document.getElementById("show")
// let x;
// function clickHere() {    
//          x =  setInterval(function () {
//               show.innerHTML = new Date().toLocaleTimeString()
//         }, 1000)        
// }

// function stopHere() {
//         clearInterval(x)
// }





// Wab API 
//Wab API এর forms API এর ব্যবহার এটা খুব  একটা ব্যবহার হয় না । এই সকল কাজের জন্য libary ব্যবহার করা হয় ।





// function validation() {
//     const inputNum = document.querySelector("#num");
//     const show = document.querySelector("#show");

//     if (inputNum.validity.rangeOverflow) {

//         inputNum.setCustomValidity("!error you value is overflow ")
        
//     } else if (inputNum.validity.rangeUnderflow){
//         inputNum.setCustomValidity("!error, your  value is underflow")
        
//     }else if(inputNum.validity.valueMissing){
//         inputNum.setCustomValidity("!error, your number is emry")
//     }

//     if(!inputNum.checkValidity()){
//         show.innerHTML = inputNum.validationMessage
//     }
// }








    //Wap API  storage API Use localstorage টা স্থায়ী sessionstorage টা অস্থায়ী কিন্তু দুইটাই window object এর under এ থাকে

    // function setLocalStorage(key, value) {
    //     localStorage.setItem(key, value)
    // }


    // function getLocalStorage(key) {
    //     alert(localStorage.getItem(key))
    // }



    // function removeLocalStorage(key){
    //     localStorage.removeItem(key)
    // }


    // function clearLocalStorage() {
    //     localStorage.clear()
    // }






    
    //workers API এটা খুবই প্রয়োজনীয়, এই কাজটি করার জন্য আমাকে আর একটা .JS ফাইল নেয়া হয়েছে


//     let work;

//     function startWorker() {
//         if(typeof Worker !== "undefind"){  //browser support করে কিনা দেখা হয়েছে
//             if (typeof work == 'undefined') {
//                 work = new Worker('worker.js')      //worker create
//             }


//             work.onmessage = function (event) {         //যখন worker এর কাজ শেষ হবে তখন onmessage listening করছে সে ফলাফল টা পাবে আর কথন কাজ করা শুরু করবে এবং event.data এর মধ্যে result টা আছে।
//                 document.querySelector("#show").innerHTML = event.data;
//             }

//         }else{
//             alert("your browser does not support web worker!");
//         }
        
//     }


// function stopWork() {
//     if (typeof Worker !== "undefined") {
//         work.terminate();
//         work = undefined;
//     } 
// }



// workers API এটা আমি নিজে করেছি
// function start() {
//     let worker = new Worker('worker.js');
//     worker.onmessage = function (event) {
//         document.getElementById("show").innerHTML = event.data        
//     }
// }







//fetch API important

// const show = document.getElementById('show')

// async function getData() {

//     // const reg = await fetch("http://127.0.0.1:5500/data.txt") //async function behaviars way two and it's better নিজের কোনো file বা folder থেকে data নিয়ে আসার জন্য fetch API ব্যবহার করা হয়ে থাকে
//     // const data = await reg.text()
//     // show.innerText = data


//     // fetch('http://127.0.0.1:5500/data.txt')      //promise function behaviars way one
//     //     .then(function (reg) {
//     //     return reg.text()
//     // })
//     //     .then(function (data) {
//     //         show.innerText = data
//     //     });
// }









//Geolocation API not importace


// const display = document.getElementById('display')

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
        
//     }else{
//         display.innerHTML("Geolocation is not available in your device")
//     }
// }

// function showPosition(position) {
//  display.innerHTML = "Latituda: " + "<br/>Logitude: " + position.coords.latitude + "<br/>Longitude: " + position.coords.logitude;    
// }







        // XMLhttp series
//XMLhttp request this is more important




// function getData() {            //server থেকে কোনো data নিয়ে আসা ডাটা পাঠানো বা আপডেট করা কাজে XMLhttp request ব্যবহার করা হয়

//     //create new request
//     const xhr = new XMLHttpRequest()
    

//     //what to do response arrives
//     xhr.onload =function () {
//         const show = document.getElementById('show')
//         show.innerHTML = xhr.responseText;
//     }


//     //premare request - methods: GET, POST, PUT, PATCH. DELETE, OPTIONS

//     xhr.open("GET", "http://127.0.0.1:5500/DOM-FILE/xhr/xhrdata.txt");


//     // request send করা 
//     xhr.send();
// }

