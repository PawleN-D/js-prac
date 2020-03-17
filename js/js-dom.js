// const articles =document.getElementsByTagName('article');
// const paragraphs =document.getElementsByTagName('p');

// const firstArticle = articles[0];
// const secondParagraph = paragraphs[1];
// const sidebar = document.getElementsById('sidebar');

// const mainHeading = document.getElementById('main-heading');
// mainHeading.textContent = 'Manipulate the DOM';

// const header = document.getElementById('page-header').style= 'align-center';
// header.innerHTML = '<h2>Manipulate the Dom</h2>';
// header.classList.add('text-center');

// sidebar.classList.remove



// Event Listeners
const paragraph = document.getElementById('example');

function colorChangeRed(){
    paragraph.classList.add('text-danger');
}

function colorChangeBlue(){
    paragraph.classList.remove('text-danger');
    paragraph.classList.add('text-primary');
}