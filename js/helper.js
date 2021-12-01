let barContainer = $('#barContainer');

function swap(arr, i, j) {
    return new Promise((resolve, reject) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        let t = barContainer.children()[i].style.height;
        barContainer.children()[i].style.height = barContainer.children()[j].style.height;
        barContainer.children()[j].style.height = t;
        // await pause(1000);
        resolve();
    });
}
function barSwap(arr, i, j) {
    return new Promise((resolve,reject)=>{
        console.log(i,j);
        let t = barContainer.children()[i].style.height;
        barContainer.children()[i].style.height = barContainer.children()[j].style.height;
        barContainer.children()[j].style.height = t;
        resolve();
    });
}
function mark(arr, i) {
    return new Promise((resolve, reject) => {
        // console.log(barContainer.children());
        barContainer.children()[i].style.backgroundColor = 'green';
        // await pause();
        resolve();
    });
}
function unmark(arr, i) {
    return new Promise((resolve, reject) => {
        barContainer.children()[i].style.backgroundColor = 'red';
        // await pause();
        resolve();
    });
}
function done(arr, i) {
    // console.log(i);
    return new Promise((resolve, reject) => {
        barContainer.children()[i].style.backgroundColor = 'grey';
        // await pause();
        resolve();
    });
}
function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 50);
    });
}


