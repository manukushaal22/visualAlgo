function create_table(rows,cols){
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++){
        let tr = document.createElement('tr');   
        for (var j = 0; j < cols; j++){
            let td = document.createElement('td');
            td.classList.add("cell_"+i+"_"+j);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function create_histogram(arr){
    let histogram = document.createElement('div');
    histogram.classList.add("histogram");
    for (let i = 0; i < arr.length; i++){
        let bar = document.createElement('div');
        bar.classList.add("histobar");
        bar.classList.add("bar_index_"+i);
        histogram.appendChild(bar);
    }
    document.body.appendChild(histogram);
    for(let i=0; i < arr.length; i++){
        put_bar(arr[i], i);
    }
}

function swap_bars(position1, position2){
    let tmp = current_list_data[position1];
    current_list_data[position1] = current_list_data[position2];
    current_list_data[position2] = tmp;
    put_bar(current_list_data[position1], position1);
    put_bar(tmp, position2);
}

function initialize_table_classes(){
    $("table,td,tr").addClass("borderset");
    $("tr").addClass("row");
    $("td").addClass("cell");
}

function put_bar(length, position){
    $(".bar_index_"+position).css("width", (length)+"px");
}

function make_histogram(arr){
    for(let i=0; i<arr.length; i++){
        put_bar(arr[i],i);
    }
}

function bubbleSort(inputArr){
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                swap_bars(j, j+1);
                wait(1);
            }
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create_random_array(size, min, max){
    let ar = [];
    for(let i=0; i < size; i++){
        ar.push(getRandomInt(min,max));
    }
    return ar;
}

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}