//et lille fetch eksempel
fetch('http://localhost:3000/data').then((response) => response.json()).then((data) => {
    console.log(data);
    document.querySelector('body').innerHTML = data;
})