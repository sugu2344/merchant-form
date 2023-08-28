let list = [];
let newData = true;
let record = {};
let index;
// let cellno;
document.getElementById("myButton").addEventListener("click", function (event) {
  event.preventDefault();
  AddRow(event);
});

function AddRow() {
  if (newData == true) insertNewRecord();
  else updateRecord();
  formFeed(emptyData);
}
function insertNewRecord() {
  let temp = localStorage.getItem("data");
  if (temp) list = JSON.parse(temp);
  list.push(getData());
  localStorage.setItem("data", JSON.stringify(list));
  sessionStorage.setItem("data", JSON.stringify(list));
  intoTable(list.length - 1);
}
function updateRecord() {
  list = JSON.parse(localStorage.getItem("data"));
  list[index] = getData();
  editDataTable(list[index]);
  localStorage.setItem("data", JSON.stringify(list));
  sessionStorage.setItem("data", JSON.stringify(list));
  newData = true;
}
function getData() {
  record.name = document.getElementById("fname").value;
  record.mail = document.getElementById("email").value;
  record.phone = document.getElementById("phone").value;
  record.website = document.getElementById("website").value;
  record.contactname = document.getElementById("contactname").value;
  record.contactphone = document.getElementById("contactphone").value;
  record.contactemail = document.getElementById("contactemail").value;
  record.notes = document.getElementById("notes").value;
  // console.log(Type());
  record.type = Type();
  record.category = category();
  record.commisionpercentage = document.getElementById(
    "commisionpercentage"
  ).value;
  record.activeform = document.getElementById("activeform").value;
  record.myfile = document.getElementById("myfile").value;
  record.criticalaccount = CriticalAccount();
  record.paymentoptions = Paymentoption();
  console.log(record);
  return record;
}
function Type() {
  let radio = document.getElementsByName("Type");
  let selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}
function Paymentoption() {
  let transaction = document.getElementsByName("Paymentoptions");
  let selectedType = [];
  for (i = 0; i < transaction.length; i++) {
    if (transaction[i].checked) selectedType.push(transaction[i].value);
  }
  return selectedType;
}

function CriticalAccount() {
  let radio = document.getElementsByName("CriticalAccount");
  let selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}
function category() {
  let transaction = document.getElementsByName("category");
  let selectedType = [];
  for (i = 0; i < transaction.length; i++) {
    if (transaction[i].checked) selectedType.push(transaction[i].value);
  }
  return selectedType;
}
function intoTable(i) {
  let list = JSON.parse(localStorage.getItem("data"));
  let AddRow = document.getElementById("dataTable");
  let NewRow = AddRow.insertRow();

  let cel1 = NewRow.insertCell(0);
  let cel2 = NewRow.insertCell(1);
  let cel3 = NewRow.insertCell(2);
  let cel4 = NewRow.insertCell(3);
  let cel5 = NewRow.insertCell(4);
  let cel6 = NewRow.insertCell(5);
  let cel7 = NewRow.insertCell(6);
  let cel8 = NewRow.insertCell(7);
  let cel9 = NewRow.insertCell(8);
  let cel10 = NewRow.insertCell(9);
  let cel11 = NewRow.insertCell(10);
  let cel12 = NewRow.insertCell(11);
  let cel13 = NewRow.insertCell(12);
  let cel14 = NewRow.insertCell(13);
  let cel15 = NewRow.insertCell(14);
  let cel16 = NewRow.insertCell(15);

  cel1.innerHTML = list[i].name;
  cel2.innerHTML = list[i].mail;
  cel3.innerHTML = list[i].phone;
  cel4.innerHTML = list[i].website;
  cel5.innerHTML = list[i].contactname;
  cel6.innerHTML = list[i].contactphone;
  cel7.innerHTML = list[i].contactemail;
  cel8.innerHTML = list[i].notes;
  cel9.innerHTML = list[i].type;
  cel10.innerHTML = list[i].category;
  cel11.innerHTML = list[i].commisionpercentage;
  cel12.innerHTML = list[i].activeform;
  cel13.innerHTML = list[i].myfile;
  cel14.innerHTML = list[i].criticalaccount;
  cel15.innerHTML = list[i].paymentoptions;
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    newData = false;
    editBtn(i);
  });
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function () {
    deleteRow(list[i]);
  });
  cel16.appendChild(editButton);
  cel16.appendChild(deleteButton);
}
function editBtn(i) {
  index = i;
  list = JSON.parse(localStorage.getItem("data"));
  formFeed(list[i]);
  localStorage.setItem("data", JSON.stringify(list));
}
function formFeed(dataFeed) {
  document.getElementById("fname").value = dataFeed.name;
  document.getElementById("email").value = dataFeed.mail;
  document.getElementById("phone").value = dataFeed.phone;
  document.getElementById("website").value = dataFeed.website;
  document.getElementById("contactname").value = dataFeed.contactname;
  document.getElementById("contactphone").value = dataFeed.contactphone;
  document.getElementById("contactemail").value = dataFeed.contactemail;
  document.getElementById("notes").value = dataFeed.notes;
  document.getElementById("commisionpercentage").value =
    dataFeed.commisionpercentage;
  document.getElementById("activeform").value = dataFeed.activeform;
  if (dataFeed.name != "") {
    findBusinessType(dataFeed.type);
    findCategory(dataFeed.category);
    findCriticalAccount(dataFeed.criticalaccount);
    findPaymentMethod(dataFeed.paymentoptions);
  } else {
    resetBussinessType();
    resetCategory();
    resetAccount();
    resetPaymentMethod();
  }
}
function findBusinessType(dataFeed) {
  let fnType = document.getElementsByName("Type");
  for (let i = 0; i < fnType.length; i++) {
    if (fnType[i].value == dataFeed) {
      fnType[i].checked = true;
    }
  }
}
function findCategory(dataFeed) {
  let fnCategory = document.getElementsByName("category");
  for (let i = 0; i < fnCategory.length; i++) {
    for (let j = 0; j < dataFeed.length; j++) {
      if (fnCategory[i].value == dataFeed[j]) {
        fnCategory[i].checked = true;
      }
    }
  }
}
function findCriticalAccount(dataFeed) {
  let fnCritical = document.getElementsByName("CriticalAccount");
  for (let i = 0; i < fnCritical.length; i++) {
    if (fnCritical[i].value == dataFeed) {
      fnCritical[i].checked = true;
    }
  }
}

function findPaymentMethod(dataFeed) {
  let fnPayment = document.getElementsByName("Paymentoptions");
  for (let i = 0; i < fnPayment.length; i++) {
    for (let j = 0; j < dataFeed.length; j++) {
      if (fnPayment[i].value == dataFeed[j]) {
        fnPayment[i].checked = true;
      }
    }
  }
}
var emptyData = {};
emptyData.name = "";
emptyData.mail = "";
emptyData.phone = "";
emptyData.website = "";
emptyData.contactname = "";
emptyData.contactphone = "";
emptyData.contactemail = "";
emptyData.notes = "";
emptyData.commisionpercentage = "";
emptyData.activeform = "";
emptyData.myfile = "";

function resetBussinessType() {
  let Type = document.getElementsByName("Type");
  for (let i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function resetCategory() {
  let transaction = document.getElementsByName("category");
  for (let i = 0; i < transaction.length; i++) {
    transaction[i].checked = false;
  }
}
function resetAccount() {
  let radio = document.getElementsByName("CriticalAccount");
  for (let i = 0; i < radio.length; i++) {
    radio[i].checked = false;
  }
}
function resetPaymentMethod() {
  let Type = document.getElementsByName("Paymentoptions");
  for (let i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function editDataTable(newData) {
  // console.log(index)
  let table = document.getElementById("dataTable");
  let editRow = table.rows[index + 1];
  editRow.cells[0].innerHTML = newData.name;
  editRow.cells[1].innerHTML = newData.mail;
  editRow.cells[2].innerHTML = newData.phone;
  editRow.cells[3].innerHTML = newData.website;
  editRow.cells[4].innerHTML = newData.contactname;
  editRow.cells[5].innerHTML = newData.contactphone;
  editRow.cells[6].innerHTML = newData.contactemail;
  editRow.cells[7].innerHTML = newData.notes;
  editRow.cells[8].innerHTML = newData.type;
  editRow.cells[9].innerHTML = newData.category;
  editRow.cells[10].innerHTML = newData.commisionpercentage;
  editRow.cells[11].innerHTML = newData.activeform;
  editRow.cells[12].innerHTML = newData.myfile;
  editRow.cells[13].innerHTML = newData.criticalaccount;
  editRow.cells[14].innerHTML = newData.paymentoptions;
}
// .....delete...
function deleteRow(edit) {
  let getData = JSON.parse(localStorage.getItem("data"));
  var ind = getData.findIndex(function (item) {
    return item.mail == edit.mail;
  });
  if (ind != -1) {
    // console.log(ind);
    getData.splice(ind, 1);
    let table = document.getElementById("dataTable");
    table.deleteRow(ind + 1);
    localStorage.setItem("data", JSON.stringify(getData));
  }
}
// filter data
// type
function filterType() {
  var filterType = getSelectedFilterType();
  // cellno=8;
  filterData(filterType, 8);
}
function getSelectedFilterType() {
  var filterRadios = document.getElementsByName("filterType");
  for (var i = 0; i < filterRadios.length; i++) {
    if (filterRadios[i].checked) {
      return filterRadios[i].value;
    }
  }
}

function filterData(Type, cellno) {
  var table = document.getElementById("dataTable");

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];

    const cell = row.cells[cellno];
    const cellText = (cell.textContent || cell.innerText).toLowerCase();
    if (cellText.includes(Type.toLowerCase())) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
// clear filter for all  common
function clearFilter() {
  var table = document.getElementById("dataTable");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].style.display = "";
  }
}
// critical account
function filteraccount() {
  var filteraccount = getSelectedFilterAccount();
  // console.log(filteraccount)
  //   // cellno=8;
  filterData(filteraccount, 13);
}

function getSelectedFilterAccount() {
  var filterRadios = document.getElementsByName("filteraccount");
  for (var i = 0; i < filterRadios.length; i++) {
    if (filterRadios[i].checked) {
      return filterRadios[i].value;
    }
  }
}

function filterData(Type, cellno) {
  var table = document.getElementById("dataTable");

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];

    const cell = row.cells[cellno];
    const cellText = (cell.textContent || cell.innerText).toLowerCase();
    if (cellText.includes(Type.toLowerCase())) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
// filter payment
function filterPayment() {
  var filterPayment = getSelectedFilterPayment();
  filterData(filterPayment, 14);
}
function getSelectedFilterPayment() {
  var filterRadios = document.getElementsByName("filterPayment");
  for (var i = 0; i < filterRadios.length; i++) {
    if (filterRadios[i].checked) {
      return filterRadios[i].value;
    }
  }
}

function filterData(Type, cellno) {
  var table = document.getElementById("dataTable");

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];

    const cell = row.cells[cellno];
    const cellText = (cell.textContent || cell.innerText).toLowerCase();
    if (cellText.includes(Type.toLowerCase())) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
// catogeries
function filtercategory() {
  var filtercategory = getSelectedFilterCategory();

  filterData(filtercategory, 9);
}
function getSelectedFilterCategory() {
  var filterRadios = document.getElementsByName("filtercategory");
  for (var i = 0; i < filterRadios.length; i++) {
    if (filterRadios[i].checked) {
      return filterRadios[i].value;
    }
  }
}

function filterData(Type, cellno) {
  var table = document.getElementById("dataTable");

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];

    const cell = row.cells[cellno];
    const cellText = (cell.textContent || cell.innerText).toLowerCase();
    if (cellText.includes(Type.toLowerCase())) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

//filter by name

function filterByName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("nameFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// filter by phone number

function filterByPhoneNumber() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("phoneFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
// search by email

function filterByEmail() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("emailFilter");
  filter = input.value.toLowerCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      txtValue = txtValue.toLowerCase();
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
