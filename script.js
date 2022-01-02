//title author ISBN Submit
let title = document.getElementById('title-input');
let author = document.getElementById('author-input');
let isbn = document.getElementById('isbn-input');
let bookList = document.querySelector('table');

document.addEventListener('DOMContentLoaded',getList);
function getList(){
    let form = [];
    if (localStorage.getItem('form') === null) {
        form = [];
    }
    else {
        form = JSON.parse(localStorage.getItem('form'));    
     }
     form.forEach(element => {        
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = element.titleP;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = element.authorP;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = element.isbnP;
    tr.appendChild(td3);

    let btn = document.createElement('button');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerHTML = 'Delete item';
    btn.appendChild(a);
    tr.appendChild(btn);

    bookList.appendChild(tr);
    });
}

//add book list
document.getElementById('submit-btn').addEventListener('click', submitForm);
function submitForm() {

    if (title.value === '' || author.value === '' || isbn.value === '') {
        window.alert('Complete the form');
    }
    else {

        let form = [];
        if (localStorage.getItem('form') === null) {
            form = [];
        }
        else {
            form = JSON.parse(localStorage.getItem('form'));    
         }

         let object = {
            titleP: title.value,
            authorP: author.value,
            isbnP: isbn.value
        }
        form.push(object);
        localStorage.setItem('form', JSON.stringify(form));

        console.log(form);
        getList();
    }
}

//delete booklist bug!! = {delete also form local strorage}
document.getElementById('delete-all-btn').addEventListener('click', deleteList);
function deleteList() {
    if (confirm('Are you sure?')) {
        let c = 0;
        while (bookList.firstChild) {
            // if(c === 0){continue;}
            bookList.removeChild(bookList.firstChild);
            c = 1;
        }
        localStorage.clear();
    }

}

bookList.addEventListener('click', removeList);
function removeList(e) {

    if (e.target.hasAttribute('href')) {
        console.log('gotcha');
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}

function storeData(e) {

    let table = {
    };
    if (localStorage.getItem('table') === null) {
        table = [];
    }
    else {
        table = JSON.parse(localStorage.getItem('table'));
    }
    table.push(e);
    let str = JSON.stringify(table);
    //console.log(table);
    //localStorage.setItem('table', JSON.stringify(table));
}


// //Search
// let search = document.getElementById('search-input');
// search.addEventListener("keyup", findBook);
// function findBook(e){
//     let filterBy = e.target.value.toLocaleLowerCase();
//     console.log(filterBy);
    
//     let list = document.querySelector('table');
//     let filterWith = list.rows[1].firstElementChild.innerText.toLocaleLowerCase();

//     console.log(filterBy.length);
    
//     // list.forEach(book => {
//     //     let item = book.firstChild.textContent;
//     //     book.style.display = 'none';
//     // })
// }