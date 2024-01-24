// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { collection, getDocs, query, orderBy, addDoc, updateDoc, getDoc, doc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tableBody = document.querySelector('#users-table tbody');

const q = query(collection(db, "usuarios"), orderBy("inclusao"));

var index = 0

try {
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    index += 1;

    var date = doc.data().inclusao.toDate();

    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'America/Sao_Paulo'};
    const dateFormatted = date.toLocaleString('pt-BR', options);

    var data = `      
    <tr>    
        <td>${index}</td>
        <td>${doc.data().nome}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().estado}</td>
        <td>${doc.data().cidade}</td>
        <td>${doc.data().categoria}</td>
        <td>${dateFormatted}</td>
    </tr>
    `;

    tableBody.innerHTML += data;
  });
} catch (error) {
  console.log("Error getting documents: ", error);
}

// Export

document.querySelector(".js-export").addEventListener("click", function(){

  const fileName = document.getElementById("name-file-export").value

  if(fileName == ""){
    alert("Insira o nome do arquivo")
    return false
  }

  // Get all rows of the table
  const rows = document.querySelector("table").getElementsByTagName("tr");

  const csvData = [];

  for(let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowData = [];

    // Get all cells in the row and push their data to the rowData array
    const cells = row.getElementsByTagName("td");
    for(let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      rowData.push(cell.innerText);
    }

    // Combine the rowData array into a single string and add it to the csvData array
    const csvRow = rowData.join(";");
    csvData.push(csvRow);
  }

  // Add header row to CSV data
  const headerRow = [];
  const headerCells = document.querySelector("table").getElementsByTagName("th");
  for(let i = 0; i < headerCells.length; i++) {
    const cell = headerCells[i];
    headerRow.push(cell.innerText);
  }

  csvData.unshift(headerRow.join(";"));

  // Join all the rows into a single string and create a Blob object with the data
  const csvString = csvData.join("\n");

  // Create a Blob object with the data
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

  // Create a link and click it to trigger the download
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(blob));
  link.setAttribute("download", `${fileName}.csv`);
  link.click();
});