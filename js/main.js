let btnGenerateNumbers = $('#btnGenerateNumbers')
let btnselectionSort = $('#btnselectionSort')
let btnBubbleSort = $('#btnBubbleSort')
let btnInerstionSort = $('#btnInerstionSort')
let btnmergeSort = $('#btnmergeSort')
let btnquickSort = $('#btnquickSort')
let arrBars = [];

function disableBtns(){
    btnGenerateNumbers.attr('disabled',true);
    btnselectionSort.attr('disabled',true);
    btnBubbleSort.attr('disabled',true);
    btnInerstionSort.attr('disabled',true);
    btnmergeSort.attr('disabled',true);
    btnquickSort.attr('disabled',true);
}

function enableBtns(){
    btnGenerateNumbers.attr('disabled',false);
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

btnBubbleSort.click(async function(){
    disableBtns()
    arrBars = generateRandomNumber();
    await bubbleSort(arrBars);
    enableBtns();
});

btnselectionSort.click(async function(){
    disableBtns()
    arrBars = generateRandomNumber();
    await selectionSort(arrBars);
    enableBtns();
});

btnInerstionSort.click(async function(){
    disableBtns()
    arrBars = generateRandomNumber();
    await insertionSort(arrBars);
    enableBtns();
});

btnmergeSort.click(async function(){
    disableBtns()
    arrBars = generateRandomNumber();
    await mergeSort(arrBars,0,arrBars.length-1);
    enableBtns();
});

btnquickSort.click(async function(){
    disableBtns()
    arrBars = generateRandomNumber();
    await quickSort(arrBars,0,arrBars.length-1);
    enableBtns();
});