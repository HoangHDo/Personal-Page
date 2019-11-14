/*
Name: Hoang Do
Email: Hoang_Do@student.uml.edu
Major:Computer Science, School : UMass Lowell, Class:   91.61 GUI Programming I
Date created: Nov 11,2019
A6: Creating an Interactive Dynamic Table
Description: create a multiplication table dynamically given user input
for width and length
Copyright [2019] by Hoang Do. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
*/
// learnt a lot from
// https://www.sitepoint.com/basic-jquery-form-validation-tutorial/


function generateTable() {
    var row_start = Number(document.getElementById('row_start').value);
    var row_finish = Number(document.getElementById('row_end').value);
    var col_start = Number(document.getElementById('col_start').value);
    var col_finish = Number(document.getElementById('col_end').value);
    //console.log(row_start + " " + row_finish + " " + col_start + " " + col_finish);
    var table = '<table>';
    //table variable to display
    var col_header_value = col_start; //storing data for header value
    var row_header_value = row_start;

    for (var i = col_start; i <= col_finish + 1; i++) {
        table += '<tr>'; //opening up one row of table
        for (var j = row_start; j <= row_finish + 1; j++) {
            if (i == col_start && j == row_start) {
                //corner element is empty
                table += '<td>' + '' + '</td>'; //each of these is a cell
            } else if (i == col_start) {
                //horizontal row header value
                table += "<td class ='header'>" + row_header_value++ + '</td>';
            } else if (j == row_start) {
                // vertical column header value
                table += '<td >' + col_header_value++ + '</td>';
            } else {
                // console.log("i ="+ i+"  j ="+j+"\n");
                // contents of the rest of the table
                //as name suggests, both i j is even or odd
                if (i % 2 === 0 && j % 2 === 0 || (i % 2 !== 0 && j % 2 !== 0)) {
                    table += "<td class = 'both_even_or_odd'>" + ((i - 1) * (j - 1)) + '</td>';
                } else {
                    //as name suggest, either is odd or even
                    table += "<td class = 'either_even_or_odd'>" + ((i - 1) * (j - 1)) + '</td>';
                }
            }
        }
        table += '</tr>'; // close out one row of table
    }
    table += '</table>'; // close out table tag
    console.log(table);
    document.getElementById('tableout').innerHTML = table; //push table content into element
}
