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
    for(let i= tot_rows - 1; i >= tot_rows - length; i--){
        $(".cell_"+i+"_"+position).addClass("cellselect");
    }
    for(let i= 0; i < tot_rows - length; i++){
        $(".cell_"+i+"_"+position).removeClass("cellselect");
    }
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
                wait(100);
            }
        }
    }
}

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}