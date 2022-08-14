let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let selection_sort_btn = document.getElementById("selection_sort_btn");
let merge_sort_btn = document.getElementById("merge_sort_btn");
let bars_container = document.getElementById("bars_container");
let speed = document.getElementById("speed");
let submit_btn = document.getElementById("submit_btn");
let minRange = 10;
let maxRange = 20;
let numOfBars = 20;
let unsorted_array = new Array(numOfBars);
let speedFactor = 100;
let bubbleSortContent = "<h1>BUBBLE SORT</h1> <p>Initially, points to the first two elements and swaps if first element is greater than second element.</p> <p>Next, the pointer moves to next elements.</p> <p>After, each iteration the largest element in that iteration goes to the last.</p>";
let selectionSortContent = "<h1>SELECTION SORT</h1> <p>Initially places the the smallest element in the first position by swapping and goes on to the next smallest position and so on until the array is sorted</p>";
function randomNum(min, max){
    return Math.floor((Math.random() * max) + min);
}

function createRandomArray() {
    for(let i = 0; i < numOfBars; i++){
        unsorted_array[i] = randomNum(minRange, maxRange);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createRandomArray();
    renderBars(unsorted_array);
})

randomize_array.addEventListener("click", function () {
    createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
})

function renderBars(array){
    for(let i = 0; i < array.length; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (array[i] * 10) + "px";
        bar.textContent = array[i];
        bars_container.appendChild(bar);
    }
}



function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}





async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j + 1]){
                for(let k = 0; k < bars.length; k++){
                    bars[k].style.backgroundColor = "#D4F6CC";
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "lightgreen";
                bars[j].textContent = array[j];
                // bars[j].innerText = array[j];
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "lightgreen";
                bars[j + 1].textContent = array[j + 1];
                // bars[j + 1].innerText = array[j + 1];
                await sleep(speedFactor);
            }

        }
        await sleep(speedFactor);
    }
    for(let k = 0; k < bars.length; k++){
        bars[k].style.backgroundColor = "#D4F6CC";
    }
    return array;
}

async function selectionSort(array) {
    let bars = document.getElementsByClassName("bar");
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            for(let k = 0; k < bars.length; k++){
                bars[k].style.backgroundColor = "#D4F6CC";
            }
            if(array[j] < array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                bars[i].style.height = array[i] * 10 + "px";
                bars[i].style.backgroundColor = "lightgreen";
                bars[i].textContent = array[i];
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "lightgreen";
                bars[j].textContent = array[j];
                await sleep(speedFactor);
            }
        }
        for(let k = 0; k < bars.length; k++){
            bars[k].style.backgroundColor = "#D4F6CC";
        }
        await sleep(speedFactor);
    }
}


sort_btn.addEventListener("click", function (){
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
})

sort_btn.addEventListener("click", function () {
    document.querySelector(".content").innerHTML = bubbleSortContent;
})

submit_btn.addEventListener("click", function () {
    speedFactor = (10 - parseInt(speed.value)) * 100;
})

selection_sort_btn.addEventListener("click", function () {
    let sorted_array = selectionSort(unsorted_array);
    console.log(sorted_array);
})

selection_sort_btn.addEventListener("click", function () {
    document.querySelector(".content").innerHTML = selectionSortContent;
})




