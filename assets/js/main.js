alert("welcome to typescript");
var form = document.getElementById("form");
var tbody = document.getElementById("tbody");
var count = 0;
form.addEventListener("submit", function (e) {
    count++;
    e.preventDefault();
    var goal = document.getElementById("goal");
    var date = document.getElementById("date");
    addDo(goal.value, date.value);
});
function addDo(goal, date) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.setAttribute("class", "text-center");
    var i1 = document.createElement("i");
    i1.className = "fa fa-close";
    i1.addEventListener("click", function () {
        i1.parentElement.parentElement.remove();
    });
    td1.append(i1);
    tr.append(td1);
    var td2 = document.createElement("td");
    td2.setAttribute("class", "text-center");
    var i2 = document.createElement("i");
    i2.className = "fa fa-edit";
    i2.addEventListener("click", function () {
        var parent = this.parentElement.parentElement;
        var gloaa = parent.querySelector(".goal");
        var datee = parent.querySelector(".date");
        var new_goal = prompt("Enter you goal", gloaa.innerHTML);
        var new_date = prompt("Enter you date", datee.innerHTML);
        gloaa.innerText = new_goal;
        datee.innerText = new_date;
    });
    td2.append(i2);
    tr.append(td2);
    var td3 = document.createElement("td");
    td3.setAttribute("class", "text-center");
    td3.innerHTML = "" + count;
    tr.append(td3);
    var td4 = document.createElement("td");
    td4.setAttribute("class", "text-center goal");
    td4.innerHTML = goal;
    tr.append(td4);
    var td5 = document.createElement("td");
    td5.setAttribute("class", "text-center date");
    td5.innerHTML = date;
    tr.append(td5);
    tbody.append(tr);
}
//# sourceMappingURL=main.js.map