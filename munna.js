





function show() {
    const show = document.getElementById("show");
    const myForm = document.getElementById("myform").value;


show.innerHTML = myForm

}


const btn = document.getElementById('btn')


btn.addEventListener('click', show)


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







