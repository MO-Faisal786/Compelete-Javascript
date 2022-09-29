


const tempLoad = () => {
    setTimeout(() =>{
        let temp = document.getElementById("temp");
        temp.innerHTML = `<i class="fas fa-thermometer-empty"></i>`;
        temp.style.color = '#f8b627';
    }, 1000);


    setTimeout(() =>{
        temp.innerHTML = `<i class="fas fa-thermometer-quarter"></i>`;
    }, 2000);


    setTimeout(() =>{
        temp.innerHTML = `<i class="fas fa-thermometer-half"></i>`;
    }, 3000);


    setTimeout(() =>{
        temp.innerHTML = `<i class="fas fa-thermometer-three-quarters"></i>`;
    }, 4000);



    setTimeout(() =>{
        temp.innerHTML = `<i class="fas fa-thermometer-full"></i>`;
        temp.style.color = 'red';
    }, 5000);
}

tempLoad();

setInterval(tempLoad, 5000)

