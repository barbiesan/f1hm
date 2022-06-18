// console.log('Hello this is testing to make sure that we are connected!');

// console.dir(document);

// let body = document.body;
// console.log(body);

// let children = body.children;
// console.log(children);

// let navBar = children[0];
// console.log(navBar);



// // Popular Methods with the Document Object

// // Document get methods

// // document.getElementById('id')
// // return the first element with an id that matches the string id
// let myHeader = document.getElementById('top-header');
// console.log(myHeader);


// // document.getElementsByTagName('tagName')
// // return an HTMLCollection (Array-like) of all elements that match that tag name
// let myButtons = document.getElementsByTagName('button');
// console.log(myButtons)


// // document.getElementsByClassName('className')
// // return an HTMLCollection (Array-like) of all elements that match that class name
// let myRows = document.getElementsByClassName('row');
// console.log(myRows);


// // document.querySelector('selector');
// // return the FIRST element that matches the specified selector
// let firstCol = document.querySelector('.col-2'); // simple selector
// console.log(firstCol);

// let divInNav = document.querySelector('nav > div'); // combinator selector
// console.log(divInNav);


// // document.querySelectorAll('selector')
// // return a NodeList (Array-like) of elements that match the specified selector
// let allTwoCols = document.querySelectorAll('.col-2');
// console.log(allTwoCols);

// let allDivsInNav = document.querySelectorAll('nav > div');
// console.log(allDivsInNav);



// // Create Elements with document method

// // document.createElement('tagName')
// // Create an element with the given tag name
// let newHeader = document.createElement('h4');
// newHeader.innerHTML = 'Header created by JavaScript'
// newHeader.className = 'text-center text-primary'
// newHeader.style.backgroundColor = 'red';
// console.log(newHeader);
// console.dir(newHeader);


// // Add our new header to the end of the body
// // body.append(newHeader);

// // Add to container instead
// let myContainer = document.querySelector('.container');
// myContainer.append(newHeader);