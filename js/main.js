
let btnGenerateNumbers = $('#btnGenerateNumbers')
let btnselectionSort = $('#btnselectionSort')
let btnBubbleSort = $('#btnBubbleSort')
let btnInerstionSort = $('#btnInerstionSort')
let btnmergeSort = $('#btnmergeSort')
let btnquickSort = $('#btnquickSort')
let arrBars = [];
function disableBtns(){
    btnselectionSort.attr('disabled',true);
    btnBubbleSort.attr('disabled',true);
    btnInerstionSort.attr('disabled',true);
    btnmergeSort.attr('disabled',true);
    btnquickSort.attr('disabled',true);
}


function enableBtns(){
    btnselectionSort.attr('disabled',false);
    btnBubbleSort.attr('disabled',false);
    btnInerstionSort.attr('disabled',false);
    btnmergeSort.attr('disabled',false);
    btnquickSort.attr('disabled',false);
}

btnGenerateNumbers.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    enableBtns();
})

btnBubbleSort.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    bubbleSort(arrBars);
    enableBtns();
});
btnselectionSort.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    selectionSort(arrBars);
    enableBtns();
});
btnInerstionSort.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    insertionSort(arrBars);
    enableBtns();
});
btnmergeSort.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    mergeSort(arrBars,0,arrBars.length-1);
    enableBtns();
});
btnquickSort.click(function(){
    disableBtns()
    arrBars = generateRandomNumber();
    quickSort(arrBars,0,arrBars.length-1);
    enableBtns();
});