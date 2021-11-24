let barContainer = $('#barContainer');

export function swap(arr, i, j) {
    return new Promise((resolve, reject) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        let t = barContainer.children()[i].style.height;
        barContainer.children()[i].style.height = barContainer.children()[j].style.height;
        barContainer.children()[j].style.height = t;
      
        resolve();
    });
}
export function barSwap(arr, i, j) {
    return new Promise((resolve,reject)=>{
        console.log(i,j);
        let t = barContainer.children()[i].style.height;
        barContainer.children()[i].style.height = barContainer.children()[j].style.height;
        barContainer.children()[j].style.height = t;
        resolve();
    });
}
export function mark(arr, i) {
    return new Promise((resolve, reject) => {
       
        barContainer.children()[i].style.backgroundColor = 'green';
       
        resolve();
    });
}
export function unmark(arr, i) {
    console.log(i);
    return new Promise((resolve, reject) => {
        barContainer.children()[i].style.backgroundColor = 'red';
        // await pause();
        resolve();
    });
}
export function done(arr, i) {
   
    return new Promise((resolve, reject) => {
        barContainer.children()[i].style.backgroundColor = 'grey';
     
        resolve();
    });
}
export function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}


