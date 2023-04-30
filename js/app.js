const html = document.querySelector('html');
const nav = document.querySelector('.nav');

var height = nav.clientHeight;

first_section.style = `padding-top: ${height}px;`;
html.style = `scroll-padding-top: ${height}px;`;