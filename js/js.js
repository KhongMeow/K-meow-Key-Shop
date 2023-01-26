const cc_number = document.getElementById('cc-number.value ===');
const errorElement = document.getElementById('error');
function cardspace() {
    var carddigit = document.getElementById('cc-number').value;
    if (carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14) {
        document.getElementById('cc-number').value = carddigit + ' ';
        document.getElementById('cc-number').max = 1;
    }
}

function addSlashes() {
    var expire_date = document.getElementById('cc-exp').value;
    if (expire_date.length == 4) {
        document.getElementById('cc-exp').value = expire_date + '/';
        document.getElementById('cc-exp').max = 1;
    }
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


// function Alert() {
//     alert("Thank You!!!!!!!!!");
// }
