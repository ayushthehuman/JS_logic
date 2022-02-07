function myfunction() {
    var a = document.getElementById("age").value
    var w = document.getElementById("weight").value // linking to html.
    n = document.getElementById('name').value
    check(a, w, n)
    function check(a, w, n) {
        if (a == "") {
            dis = "Please Enter values"
            display(dis)
        }
        else if (a >= 5 && a <= 7) {
            if (w >= 15 && w <= 20) {
                dis = "Hello!!! " + n + " Your weight is perfect"
                display(dis)
            }
            else if (w < 15) {
                dis = "Hello!!! " + n + " Your weight is less than recommended value of " + w + "at an age of " + a +".";
                display(dis)
            }
            else if (w > 20) {
                dis = "Hello!!!" + n + " Your weight is over than recommended value of " + w + "kg " + "at an age of " + a+".";
                display(dis)
            }
        }
        else if (a >= 8 && a <= 10) {
            if (w >= 21 && w <= 25) {
                dis = "Hello!!!" + n + " Your weight is perfect"
                display(dis)
            }
            else if (w < 21) {
                dis = "Hello!!! " + n + " Your weight is less than recommended value of " + w + "kg" + "at an age of " + a+".";
                display(dis)
            }
            else if (w > 25) {
                dis = "Hello!!! " + n + " Your weight is over than recommended value of " + w + "kg " + "at an age of " + a+".";
                display(dis)
            }
        }
        else if (a >= 11 && a <= 15) {
            if (w >= 26 && w <= 30) {
                dis = "Hello!!! " + n + " Your weight is perfect"
                display(dis)
            }
            else if (w < 26) {
                dis = "Hello!!! " + n + " Your weight is less than recommended value of " + w + "at an age of " + a+".";
                display(dis)
            }
            else if (w > 30) {
                dis = "Hello!!! " + n + " Your weight is over than recommended value of " + w + "kg " + "at an age of " + a+".";
                display(dis)
            }
        }
        else if (a >= 16 && a <= 20) {
            if (w >= 31 && w <= 40) {
                dis = "Hello!!! " + n + " Your weight is perfect"
                display(dis)
            }
            else if (w < 31) {
                dis = "Hello!!! " + n + " Your weight is less than recommended value of " + w + "at an age of " + a+".";
                display(dis)
            }
            else if (w > 40) {
                dis = "Hello!!! " + n + " Your weight is over than recommended value of " + w + "kg " + "at an age of " + a+".";
                display(dis)
            }
        }
        function display(dis) {
            document.getElementById('result').innerHTML = dis
        }
    }
}