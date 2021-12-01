let arr = [];
let time = 500;
document.getElementById('Range').addEventListener('change', () => {
    time = 1000-document.getElementById('Range').value;
});
function generateRandomNumber() {
    arr = [];
    barContainer.empty();
    let t = document.querySelector('.container').getBoundingClientRect()
    console.log(t);
    let wid = Math.floor(t.width-t.left);
    for (let i = 0; i < (wid/35); i++) {
        arr.push(Math.floor(Math.random() * 300) + 5);
        let bar = $('<div>', {
            class: 'bar',
            display: 'inline-block',
            style: `height: ${arr[i].toString()}px; width:20px;display:inline-block;margin:2px;background-color:red;`,
            id: i
        })
        barContainer.append(bar);
    }
    return arr;
}

async function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                await mark(arr, i);
                await mark(arr, j);
                await pause(time);
                await swap(arr, i, j);
                await pause(time);
                await unmark(arr, j);
            }

        }
        await done(arr, i);
    }
}

async function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                await mark(arr, j);
                await mark(arr, j + 1);
                await pause(time);
                await swap(arr, j, j + 1);
                await pause(time);
                await unmark(arr, j);
                await unmark(arr, j + 1);
            }
        }
        await done(arr, arr.length - i - 1);
    }
}

async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                await mark(arr, j);
                await mark(arr, j - 1);
                await pause(time);
                await swap(arr, j, j - 1);
                await pause(time);
                await unmark(arr, j - 1);
            }
        }
        for (let k = 0; k <= i; k++) {
            await done(arr, k);
        }
    }
}
async function partition(arr,start,end){
    let i =start-1;
    let pivot = arr[end];
    barContainer.children()[end].style.backgroundColor = "orange";
    for(let j = start;j<end;j++)
    {
        if(arr[j]<pivot){
            i++;
            await mark(arr,i);
            await mark(arr,j);
            await pause(time);
            await swap(arr,i,j);
            await unmark(arr,i);
            await unmark(arr,j);
            await pause(time);
        }
    }
    await mark(arr,i+1)
    await mark(arr,end);
    await pause(time);
    await swap(arr,end,i+1);
    await pause(time);
    await unmark(arr,i+1)
    await unmark(arr,end);
    await done(arr,i+1);
    return i+1;
}
async function quickSort(arr,start,end){
    if(start == end)
        await done(arr,start);
    if(start<end){
        let k= await partition(arr,start,end);
        await quickSort(arr,start,k-1),
        await quickSort(arr,k+1,end);
        
    }
}
async function merge(arr,low,mid,end){
    let left = [];
    let right = [];
    let i = 0;
    let j =0;
    for(let k = low;k<=mid;k++)
    {
        left[i++] = arr[k];
    }
    for(let k= mid+1;k<=end;k++)
    {
        right[j++] = arr[k]
    }
    i = 0;
    j = 0;
    let k =low;
    for(;i<left.length && j<right.length;k++){
        if(left[i]<right[j]){    
            arr[k] =left[i++]
        }else{
            arr[k] = right[j++]
        }
    }
    for(;i<left.length;k++,i++){
        arr[k]=left[i];
    }
    for(;j<right.length;k++,j++){
        arr[k] = right[j]
    }
    for(let i = low;i<=end;i++)
    {
        await pause(time);
        barContainer.children()[i].style.height=arr[i].toString()+'px';
    }
}


async function mergeSort(arr,start,end)
{
    if(start<end)
    {
        let mid = Math.floor((start+end)>>1);
        await mergeSort(arr,start,mid);
        await mergeSort(arr,mid+1,end);
        await merge(arr,start,mid,end);
    }
}
