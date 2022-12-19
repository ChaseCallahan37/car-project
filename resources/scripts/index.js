let app = document.getElementById("root");

let cars = [];

if (localStorage.getItem("cars_storage")) {
  cars = JSON.parse(localStorage.getItem("cars_storage"));
}

// let cars = [
//   {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     year: 2018,
//   },
//   {
//     make: "Ford",
//     model: "F-250",
//     year: 2019,
//   },
// ];

const saveCars = (make, model, year) => {
  const car = {
    make,
    model,
    year,
  };

  cars.push(car);
  localStorage.setItem("cars_storage", JSON.stringify(cars));
  render();
};

const handleOnLoad = () => {
  render();
};

const render = () => {
  app.innerHTML = "";
  app.appendChild(makeTable());
  app.appendChild(makeForm());
};

const makeTable = () => {
  let table = document.createElement("table");
  //   table.setAttribute("class", "table");

  let thead = document.createElement("thead");
  table.appendChild(thead);

  let tr = document.createElement("tr");

  let th1 = document.createElement("th");
  th1.innerHTML = "Make";
  tr.appendChild(th1);

  let th2 = document.createElement("th");
  th2.innerHTML = "Model";
  tr.appendChild(th2);

  let th3 = document.createElement("th");
  th3.innerHTML = "Year";
  tr.appendChild(th3);

  thead.appendChild(tr);

  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  cars.forEach((car) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = car.make;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = car.model;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = car.year;
    tr.appendChild(td3);

    tbody.appendChild(tr);
  });

  return table;
};

const makeForm = () => {
  let form = document.createElement("form");

  let label = document.createElement("label");
  label.innerHTML = "Make";
  form.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "make");
  form.appendChild(input);

  let label2 = document.createElement("label");
  label2.innerHTML = "Model";
  form.appendChild(label2);

  let input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("name", "model");
  form.appendChild(input2);

  let label3 = document.createElement("label");
  label3.innerHTML = "Year";
  form.appendChild(label3);

  let input3 = document.createElement("input");
  input3.setAttribute("type", "text");
  input3.setAttribute("name", "year");
  form.appendChild(input3);

  let button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  form.appendChild(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let make = e.target.make.value;
    let model = e.target.model.value;
    let year = e.target.year.value;
    saveCars(make, model, year);
  });

  return form;
};
