const ans=document.querySelector('button');

const change =document.querySelector('h1');
let count =0;
ans.addEventListener('click',() => {
    count++;
    change.innerText=` > ${count}`;
});
ans.nextElementSibling.addEventListener('click',() => {
    count = 0;
    change.innerText='   count..';
});