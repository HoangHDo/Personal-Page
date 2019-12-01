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
// learnt from
//https://www.webtrickshome.com/faq/how-to-display-error-message-in-html-form-with-javascript-form-validation-without-using-alert
//https://www.w3resource.com/javascript/form/non-empty-field.php
//http://stackoverflow.com/questions/14347177/how-can-i-validate-that-the-max-field-is-greater-than-the-min-field

$(document).ready(function () {

    $.validator.addMethod("greaterThan", function(value, element, param) {
      var $max = $(param);
      if (this.settings.onfocusout) {
          //once focus is on different element,execute validation
          $max.off(".validate-greaterThan").on("blur.validate-greaterThan", function() {
              $(element).valid();
              //switch back to valid color if return valid
          });
      }
      //determine if valid number before comparison
      //this was done after value been ran thru number and float check
      //however max hasnt gotten ran thru those tests for
      //return true if min is smaller than max
      return isNaN(parseInt($max.val())) || parseInt(value) >= parseInt($max.val());
    }, "Ending value cannot be smaller than Starting value. Please try again.");

    $.validator.addMethod("lessThan", function(value, element, param) {
        var $min = $(param);
        if (this.settings.onfocusout) {
              $min.off(".validate-lessThan").on("blur.validate-lessThan", function() {
                  $(element).valid();
              });
          }
          //if the min input is a valid number, determine if max(value) is smaller than min
          return isNaN(parseInt($min.val())) || parseInt(value) <= parseInt($min.val());
          //console.log(value + " " + $min.val());
      }, "Starting value cannot be greater than Ending value. Please try again.");


      $.validator.addMethod("isInt", function(value, element) {
          // calling function to check for float
          return (isInt(Number(value))); //return true if is int and false if not
      }, "Float detected. Please only use integers.");

      //customized method for detecting oversized table, mainly to prevent browser freezing
      $.validator.addMethod("tooBig", function(value, element, param) {
          var $max = $(param);
          if (this.settings.onfocusout) {
              //once focus is on different element,execute validation
              $max.off(".validate-tooBig").on("blur.validate-tooBig", function() {
                  $(element).valid();
                  //switch back to valid color if return valid
              });
          }
          return isNaN(parseInt(value))|| isNaN(parseInt($max.val())) || (Math.abs(parseInt($max.val())) - Math.abs((parseInt(value)) > 100));
      });


    $('#input_form').validate({ // initialize the plugin
        rules: {
          row_start: {
              required: true, //required input
              number: true, //has to be number
              isInt: true, // has to be integer
              lessThan: '#row_end', // min has to be smaller than max
          },
          col_start: {
              required: true,
              number: true,
              isInt: true,
              lessThan: '#col_end',
          },
          row_end: {
              required: true,
              number: true,
              isInt: true,
              greaterThan: '#row_start', //max has to be bigger than min
              tooBig: '#row_start',
          },
          col_end: {
              required: true,
              number: true,
              isInt: true,
              greaterThan: '#col_start',
              tooBig: '#col_start',
          }
        },

        messages: {
            row_start: {
                required: "Please enter the starting value for the horizontal axis.", //if no input,show this
                number: "Characters not allowed. Please enter an integer." //if detect char input, show this
            },
            row_end: {
                required: "Please enter the ending value for the horizontal axis",
                number: "Characters not allowed. Please enter an integer.",
                tooBig: "The table is too big. Please choose a smaller range."
            },
            col_start: {
                required: "Please enter the starting value for the vertical axis",
                number: "Characters not allowed. Please enter an integer."
            },
            col_end: {
                required: "Please enter the ending value for the vertical axis",
                number: "Characters not allowed. Please enter an integer.",
                tooBig: "The table is too big. Please choose a smaller range."
            },
        },
        // Once the form is valid, take action i.e draw table
        submitHandler: function (form) { // for demo
            generateTable();
        }
    });
});


function generateTable() {

    var table = '<table>';
    //table variables
    var col_header_value = col_start;
    var row_header_value = row_start;

    for (var i = col_start; i <= col_end + 1; i++) {
        table += '<tr>'; //create one row for table
        for (var j = row_start; j <= row_end + 1; j++) {
            if (i == col_start && j == row_start) {
                //1 corner is empty
                table += '<td>' + '' + '</td>'; //create a cell for table
            } else if (i == col_start) {
                //row header value
                table += "<td class ='header'>" + row_header_value++ + '</td>';
            } else if (j == row_start) {
                // column header value
                table += '<td >' + col_header_value++ + '</td>';
            } else {
                // The rest of the table items
                if (i % 2 === 0 && j % 2 === 0 || (i % 2 !== 0 && j % 2 !== 0)) {
                    table += "<td class = 'both_even_or_odd'>" + ((i - 1) * (j - 1)) + '</td>';
                } else {
                    table += "<td class = 'either_even_or_odd'>" + ((i - 1) * (j - 1)) + '</td>';
                }
            }
        }
        table += '</tr>'; // close tab for row of table
    }
    table += '</table>'; // close out table tag

   document.getElementById('tableout').innerHTML = table; //push table content into html
   return false;
  }
