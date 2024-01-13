let screen = document.querySelector(".input p");

let equal = document.querySelector(".equal");

// let ans = document.querySelector(".ans p");

let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");



let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".back");


///// dot /////
let dot = document.querySelector(".dot");





let nums_name = [one, two, three, four, five, six, seven, eight, nine];

let nums_value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let first = null;

let second;
let previous_first_value;
let operator = "";
let result;
let a = 0;
let equal_and_none_opertaor_select = null;
//// for equal count ////
let equal_count = 0;


//////// clear/////////
clear.addEventListener("click", () => {
    screen.innerHTML = ""
    first = null
    second = null
    result = null
    previous_first_value = null
})



//////// plus ////////

plus.addEventListener("click", () => {
    equal_count = 0


    //// operator checker////
    function is_operator_selected_before() {
        if (operator == "-") {
            if (operator == "-") {
                if (first == null) {
                    first = Number(screen.textContent)

                    console.log(first);
                 
                }




                else if (first != null) {

                   
                    first -= Number(screen.textContent);

                    console.log(first);
                }
            }
        }
        if (operator == "*") {
            if (operator == "*") {
                if (first == null) {
                    first = Number(screen.textContent)
                    screen.innerHTML = "";
                    console.log(first);
                }

                else if (first != null) {
                    first *= Number(screen.textContent);
                    screen.innerHTML = "";
                    console.log(first);
                }
            }
        }

        if (operator == "/") {
            if (operator == "/") {
                if (first == null) {
                    first = Number(screen.textContent)
                    screen.innerHTML = "";
                    console.log(first);
                }

                else if (first != null) {
                    first /= Number(screen.textContent);
                    screen.innerHTML = "";
                    console.log(first);
                }
            }
        }
    }
    is_operator_selected_before()



    if (operator == "" || operator == "+") {

        console.log("clicked");
        if (first == null) {
            first = Number(screen.textContent)

            // console.log(first);

       
        }


        else if (first != null) {
           

            first += Number(screen.textContent);


        }
      
    }



    a = 1
    equal_and_none_opertaor_select = null;
    operator = "+"

    console.log(operator);
})


//////// minus ////////

minus.addEventListener("click", () => {
    equal_count = 0

    //// operator checker////
    function is_operator_selected_before() {
        if (operator == "+") {
            if (operator == "+") {
                if (first == null) {
                    first = Number(screen.textContent)


                }




                else if (first != null) {
                    
                    first += Number(screen.textContent);


                }
            }
        }
        if (operator == "*") {
            if (operator == "*") {
                if (first == null) {
                    first = Number(screen.textContent)

                }

                else if (first != null) {
                    first *= Number(screen.textContent);

                }
            }
        }

        if (operator == "/") {
            if (operator == "/") {
                if (first == null) {
                    first = Number(screen.textContent)

                }

                else if (first != null) {
                    first /= Number(screen.textContent);

                }
            }
        }
    }
    is_operator_selected_before()

    if (operator == "" || operator == "-") {


        if (first == null) {
            console.log("one");
            first = Number(screen.textContent)


        }


        else if (first != null) {

           

            first -= Number(screen.textContent);


        }
    }

    a = 1
    equal_and_none_opertaor_select = null;
    operator = "-"
})



//////// multiply ////////

multiply.addEventListener("click", () => {
    equal_count = 0
    console.log(operator);


    //// operator checker////
    function is_operator_selected_before() {

        if (operator == "+") {
            if (operator == "+") {
                if (first == null) {
                    first = Number(screen.textContent)

                }

                else if (first != null) {
                    first += Number(screen.textContent);

                }
            }
        }
        if (operator == "-") {
            if (operator == "-") {
                if (first == null) {
                    first = Number(screen.textContent)


                   
                }




                else if (first != null) {
                   
                    first -= Number(screen.textContent);


                }
            }
        }
        if (operator == "/") {
            if (operator == "/") {
                if (first == null) {
                    first = Number(screen.textContent)


                }

                else if (first != null) {
                    first /= Number(screen.textContent);


                }
            }
        }
    }
    is_operator_selected_before()


    if (operator == "" || operator == "*") {

        if (first == null) {
            first = Number(screen.textContent)
        
        }

        else if (first != null) {
        ;
            first *= Number(screen.textContent);
        }

    }

    a = 1
    equal_and_none_opertaor_select = null;
    operator = "*"
    console.log("right");
})


//////// divide ////////

divide.addEventListener("click", () => {
    equal_count = 0
    /// operator checker///
    function is_operator_selected_before() {
        if (operator == "+") {
            if (operator == "+") {
                if (first == null) {
                    first = Number(screen.textContent)

                    console.log(first);
                
                }

                else if (first != null) {
                
                    first += Number(screen.textContent);

                    console.log(first);
                }
            }
        }
        if (operator == "*") {
            if (operator == "*") {
                if (first == null) {
                    first = Number(screen.textContent)

                }

                else if (first != null) {
                    first *= Number(screen.textContent);

                }
            }
        }

        if (operator == "-") {
            if (operator == "-") {
                if (first == null) {
                    first = Number(screen.textContent)

                }

                else if (first != null) {
                    first -= Number(screen.textContent);

                }
            }
        }
    }
    is_operator_selected_before()


    if (operator == "" || operator == "/") {


        if (first == null) {
            first = Number(screen.textContent)

        
        }

        else if (first != null) {
        ;


            first /= Number(screen.textContent);
        }

    }


    a = 1
    equal_and_none_opertaor_select = null;
    operator = "/"
})





equal.addEventListener("click", () => {
    equal_and_none_opertaor_select = 0;
    console.log(operator);
    // if (first != null) {

    if (!screen.textContent == "") {
        if (equal_count == 0) {

            first = Number(first)


            second = screen.textContent;
            second = Number(second);
            console.log("first" + first);
            console.log("second" + second);

            screen.innerHTML = "";


            if (operator == "+") {

                result = Number(first + second);
                console.log("plus");
            }

            if (operator == "-") {
                console.log(typeof first);
                result = Number(first - second);
                console.log("minus");
            }

            if (operator == "*") {
                console.log("multiply");
                result = Number(first * second);
                console.log(result);
            }

            if (operator == "/") {
                result = Number(first / second);

            }
            // result = Number(result)
            // console.log(typeof result);
            let confirm = String(result)

            let ind;
            if (confirm.includes(".")) {
                ind = confirm.indexOf(".")
                confirm = confirm.slice(0, ind + 3)
                screen.innerHTML = confirm
            }
            else {
                screen.innerHTML = result
            }

            previous_first_value = second
        }

        /// if equal to is press more than one time before slecting an other value////
        else if (equal_count >= 1) {


            second = previous_first_value
            first = Number(screen.textContent)


            // current_value = screen.textContent;
            // second = Number(second);

            screen.innerHTML = "";


            if (operator == "+") {

                result = Number(first + second);
                console.log(result);
                console.log("helo");
            }

            if (operator == "-") {
                console.log(typeof first);
                result = Number(first - second);
                console.log("minus");
            }

            if (operator == "*") {
                console.log("multiply");
                result = Number(first * second);
                console.log(result);
            }

            if (operator == "/") {
                result = Number(first / second);

            }
            console.log(result);
            screen.innerHTML = result
        }

    }

    equal_count++

    // }
    first = null

})



////  Numbers ////

dot.addEventListener("click", () => {
    
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null

    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "."
    }
    else if (a > 1) {
        screen.innerHTML += "."

        a++
    }
})

zero.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "0"
    }
    else if (a > 1) {
        screen.innerHTML += "0"

        a++
    }
})
one.addEventListener("click", () => {

    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }


    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "1"
    }
    else if (a > 1) {
        screen.innerHTML += "1"

        a++
    }
})
two.addEventListener("click", () => {
    // if (result != null) {
    //     screen.innerHTML = ""
    // }

    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null

    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "2"
    }
    else if (a > 1) {
        screen.innerHTML += "2"

        a++
    }
})
three.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null

    }


    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "3"
    }
    else if (a > 1) {
        screen.innerHTML += "3"

        a++
    }
})
four.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null

    }
    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "4"
    }
    else if (a > 1) {
        screen.innerHTML += "4"

        a++
    }
})
five.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "5"
    }
    else if (a > 1) {
        screen.innerHTML += "5"

        a++
    }
})
six.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "6"
    }
    else if (a > 1) {
        screen.innerHTML += "6"

        a++
    }
})
seven.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "7"
    }
    else if (a > 1) {
        screen.innerHTML += "7"

        a++
    }
})
eight.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }

    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "8"
    }
    else if (a > 1) {
        screen.innerHTML += "8"

        a++
    }
})
nine.addEventListener("click", () => {
    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select=null
    }
    //// if any operator is clicked then clear screen /////////
    if (a == 1) {
        screen.innerHTML = ""
        a++
    }
    if (a == 0) {

        screen.innerHTML += "9"
    }
    else if (a > 1) {
        screen.innerHTML += "9"

        a++
    }
})
