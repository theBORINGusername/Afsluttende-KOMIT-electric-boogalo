const html = document.querySelector('html');
const nav = document.querySelector('.nav');
const first_section = document.querySelector('#section-first');

var height = nav.clientHeight;
console.log(height);

first_section.style = `padding-top: ${height}px;`;

html.style = `scroll-padding-top: ${height}px;`;