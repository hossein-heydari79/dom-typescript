alert("welcome to typescript");
let form: HTMLElement = document.getElementById("form");
let tbody: HTMLElement = document.getElementById("tbody");
let count: number = 0;

form.addEventListener("submit", (e): void => {
  count++;
  e.preventDefault();
  let goal = <HTMLInputElement>document.getElementById("goal");
  let date = <HTMLInputElement>document.getElementById("date");

  addDo(goal.value, date.value);
});

function addDo(goal: string, date: string): void {
  let tr = document.createElement("tr") as HTMLTableRowElement;

  let td1 = document.createElement("td") as HTMLTableDataCellElement;
  td1.setAttribute("class", "text-center");

  let i1 = document.createElement("i");
  i1.className = "fa fa-close";
  i1.style.cursor = "pointer";
  i1.addEventListener("click", (): void => {
    i1.parentElement.parentElement.remove();
  });

  td1.append(i1);
  tr.append(td1);

  let td2 = <HTMLTableDataCellElement>document.createElement("td");
  td2.setAttribute("class", "text-center");

  let i2 = document.createElement("i");
  i2.className = "fa fa-edit";
  i2.style.cursor = "pointer";
  i2.addEventListener("click", function (): void {
    let parent: HTMLElement = this.parentElement.parentElement;

    let gloaa: HTMLElement = parent.querySelector(".goal");
    let datee: HTMLElement = parent.querySelector(".date");

    let new_goal: string = prompt("Enter you goal", gloaa.innerHTML);
    let new_date: string = prompt("Enter you date", datee.innerHTML);

    gloaa.innerText = new_goal;
    datee.innerText = new_date;
  });

  td2.append(i2);
  tr.append(td2);

  let td3 = <HTMLTableDataCellElement>document.createElement("td");
  td3.setAttribute("class", "text-center");

  td3.innerHTML = `${count}`;

  tr.append(td3);

  let td4 = <HTMLTableDataCellElement>document.createElement("td");
  td4.setAttribute("class", "text-center goal");

  td4.innerHTML = goal;
  tr.append(td4);

  let td5 = <HTMLTableDataCellElement>document.createElement("td");
  td5.setAttribute("class", "text-center date");

  td5.innerHTML = date;
  tr.append(td5);

  tbody.append(tr);
}
