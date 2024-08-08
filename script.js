// const insert= document.getElementById('insert')
// window.addEventListener('keydown',(e)=>{
//     insert.innerHTML=`
//     <div class="color">
//     <table>
//   <tr>
//     <th>Key</th>
//     <th>KeyCode</th>
//     <th>Code</th>
//   </tr>
//   <tr>
//     <td> ${e.key}</td>
//     <td> ${e.KeyCode}</td>
//     <td> ${e.code}</td>
//   </tr>
  
// </table>
// </div>
    
    
//     `
// });
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="project">
            <table>
                <tr>
                    <th>Enter-Key</th>
                    <th>KeyCode</th>
                    <th>Key-Name</th>
                </tr>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.key}</td>
                </tr>
            </table>
        </div>
    `;
});