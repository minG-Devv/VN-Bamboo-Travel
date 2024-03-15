var arr = [
    "./access/img/top-banner8.jpg",
    "./access/img/top-banner.jpg",
    "./access/img/top-banner14.jpg"
];

var index = 0;

function prev()
{
    index--;
    if(index < 0) index = arr.length - 1;
    document.getElementById("hinh").src = arr[index];
}

function next()
{
    index++;
    if(index >= arr.length) index = 0;
    document.getElementById("hinh").src = arr[index];
}