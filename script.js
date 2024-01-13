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
    operator = ""

    // operator box//

    op1_reverse()


    op2_reverse()


    op3_reverse()


    op4_reverse()

})


//// backspace ////
backspace.addEventListener("click", () => {
    let value = screen.textContent;
    value = value.slice(0, -1)
    screen.innerHTML = value
})



//////// plus ////////

plus.addEventListener("click", () => {

    if (screen.textContent != "") {
        equal_count = 0
        if (operator != "+") {
            console.log("zdbfhzsi");
            op1();
        }

        if (operator == "-") {
            op2_reverse()
        }

        if (operator == "*") {
            op3_reverse()
        }

        if (operator == "/") {
            op4_reverse()
        }





        //// operator checker////
        function is_operator_selected_before() {
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


        if (operator == "" || operator == "+") {

            if (first == null) {
                first = Number(screen.textContent)

            }


            else if (first != null) {
                first += Number(screen.textContent);

            }

        }



        a = 1
        equal_and_none_opertaor_select = null;
        operator = "+"

    }
})


//////// minus ////////

minus.addEventListener("click", () => {
    if (screen.textContent != "") {
        equal_count = 0
        if (operator != "-") {
            op2();
        }

        if (operator == "+") {
            op1_reverse()
        }

        if (operator == "*") {
            op3_reverse()
        }

        if (operator == "/") {
            op4_reverse()
        }




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
                first = Number(screen.textContent)
            }

            else if (first != null) {
                first -= Number(screen.textContent);
            }
        }

        a = 1
        equal_and_none_opertaor_select = null;
        operator = "-"
    }

    if (screen.textContent == "") {
        if (equal_and_none_opertaor_select == 0) {
            screen.innerHTML = ""
            b = null
            first = null
            second = null
            result = null
            previous_first_value = null
            equal_and_none_opertaor_select = null

        }

        //// if any operator is clicked then clear screen /////////
        if (a == 1) {
            screen.innerHTML = ""
            a++
        }
        if (a == 0) {

            screen.innerHTML += "-"
        }
        else if (a > 1) {
            screen.innerHTML += "-"

            a++
        }
    }
})



//////// multiply ////////

multiply.addEventListener("click", () => {
    if (screen.textContent != "") {
        equal_count = 0

        if (operator != "*") {
            op3();
        }

        if (operator == "+") {
            op1_reverse()
        }

        if (operator == "-") {
            op2_reverse()
        }

        if (operator == "/") {
            op4_reverse()
        }


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
    }
})


//////// divide ////////

divide.addEventListener("click", () => {
    if (screen.textContent != "") {
        equal_count = 0

        if (operator != "/") {
            op4();
        }


        if (operator == "+") {
            op1_reverse();
        }
        if (operator == "-") {
            op2_reverse()
        }

        if (operator == "*") {
            op3_reverse()
        }


        /// operator checker///
        function is_operator_selected_before() {
            if (operator == "+") {
                if (operator == "+") {
                    if (first == null) {
                        first = Number(screen.textContent);
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
                first /= Number(screen.textContent);
            }

        }


        a = 1
        equal_and_none_opertaor_select = null;
        operator = "/";
    }
})



equal.addEventListener("click", () => {
    equal_and_none_opertaor_select = 0;

    if (first != null || previous_first_value!=null) {
        if (!screen.textContent == "") {
            if (equal_count == 0) {

                first = Number(first)

                second = screen.textContent;
                second = Number(second);


                screen.innerHTML = "";


                if (operator == "+") {

                    result = Number(first + second);

                }

                if (operator == "-") {

                    result = Number(first - second);

                }

                if (operator == "*") {

                    result = Number(first * second);

                }

                if (operator == "/") {

                    result = Number(first / second);

                }

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

                }

                if (operator == "-") {

                    result = Number(first - second);

                }

                if (operator == "*") {

                    result = Number(first * second);

                }

                if (operator == "/") {
                    result = Number(first / second);

                }

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

                // screen.innerHTML = result
            }

        }
    }

    equal_count++

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
        equal_and_none_opertaor_select = null

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
        equal_and_none_opertaor_select = null
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
        equal_and_none_opertaor_select = null
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


    if (equal_and_none_opertaor_select == 0) {
        screen.innerHTML = ""
        b = null
        first = null
        second = null
        result = null
        previous_first_value = null
        equal_and_none_opertaor_select = null

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
        equal_and_none_opertaor_select = null

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
        equal_and_none_opertaor_select = null

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
        equal_and_none_opertaor_select = null
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
        equal_and_none_opertaor_select = null
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
        equal_and_none_opertaor_select = null
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
        equal_and_none_opertaor_select = null
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
        equal_and_none_opertaor_select = null
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










function op1() {
    gsap.to(".op1", {
        x: -82,
        ease: "elastic.out",
        duration: .6
    })
}
function op2() {
    gsap.to(".op2", {
        x: -82,
        ease: "elastic.out",
        duration: .6
    })
}
function op3() {
    gsap.to(".op3", {
        x: -82,
        ease: "elastic.out",
        duration: .6
    })
}
function op4() {
    gsap.to(".op4", {
        x: -82,
        ease: "elastic.out",
        duration: .6
    })
}




// reverse//
function op1_reverse() {
    gsap.to(".op1", {
        x: 0,
        ease: "elastic.out",
        duration: .6
    })
}
function op2_reverse() {
    gsap.to(".op2", {
        x: 0,
        ease: "elastic.out",
        duration: .6
    })
}
function op3_reverse() {
    gsap.to(".op3", {
        x: 0,
        ease: "elastic.out",
        duration: .6
    })
}
function op4_reverse() {
    gsap.to(".op4", {
        x: 0,
        ease: "elastic.out",
        duration: .6
    })
}


let dark_btn = document.querySelector(".button div");
let input = document.querySelector(".input div");
let btn = document.querySelectorAll(".btn");
let special_btn = document.querySelectorAll(".special-btn")
let body =document.querySelector("main");
let operators_div=document.querySelectorAll(".operator div")


dark_btn.addEventListener("click", () => {
    special_btn.forEach(element => {
        element.classList.toggle("dark-special-btn")
    });
    btn.forEach(element => {
        element.classList.toggle("dark-btn")
    });
    body.classList.toggle("body")
    input.classList.toggle("dark-input-div")
    operators_div.forEach(element=>{
        element.classList.toggle("dark-operator")
    })
})
