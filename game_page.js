function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    var question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    var input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    var row = actual_answer + question_number + input_box;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}