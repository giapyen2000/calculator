function over_value() {
    return document.getElementById("oldValue").innerText;
}

function print_old_values(so) {
    document.getElementById("oldValue").innerText = so;
}


function get_results() {
    return document.getElementById("exportValue").innerText;
}

function print_result(so) {
    if (so == "") {
        document.getElementById("exportValue").innerText = so;
    } else {
        document.getElementById("exportValue").innerText = format(so);
    }

}

function format(so) {
    if (so == "-") {
        return "";
    }
    var n = Number(so);
    var value = n.toLocaleString("en");
    return value;
}

function delete_format(so) {
    return Number(so.replace(/,/g, ''))
}


var system = document.getElementsByClassName('system');
for (var i = 0; i < system.length; i++) {
    system[i].addEventListener('click', function () {
        if (this.id == "delete_all") {
            print_result("");
            print_old_values("");
        } else if (this.id == "delete") {
            let result = delete_format(get_results()).toString();
            if (result) {
                result = result.substr(0, result.length - 1);
                print_result(result);
            }
        } else {
            var result = get_results();
            var old_Results = over_value();
            if (result != "") {
                dele = delete_format(result);
                old_Results = old_Results + result;
                if (this.id == "=") {
                    var final_results = eval(old_Results);
                    print_result(final_results);
                    print_old_values("");
                } else {
                    old_Results = old_Results + this.id;
                    print_old_values(old_Results)
                    print_result("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var result = delete_format(get_results())
        if (result != NaN) {
            result = result + this.id;
            print_result(result)
        }
    })
}