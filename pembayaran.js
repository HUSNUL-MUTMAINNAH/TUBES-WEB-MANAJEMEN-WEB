
let pembayaran = JSON.parse(localStorage.getItem('pembayaran')) || [];

function saveBayar(){ localStorage.setItem('pembayaran',JSON.stringify(pembayaran)); }

function addBayar(){
 let nama=document.getElementById('bayarNama').value;
 let jumlah=document.getElementById('bayarJumlah').value;
 let metode=document.getElementById('bayarMetode').value;
 pembayaran.push({nama,jumlah,metode});
 saveBayar(); renderBayar();
}

function deleteBayar(i){ pembayaran.splice(i,1); saveBayar(); renderBayar(); }

function renderBayar(){
 let t=document.getElementById('tableBayar');
 if(!t)return;
 t.innerHTML='';
 pembayaran.forEach((p,i)=>{
   t.innerHTML+=`<tr>
     <td>${i+1}</td><td>${p.nama}</td><td>${p.jumlah}</td><td>${p.metode}</td>
     <td><button class='btn btn-sm btn-danger' onclick='deleteBayar(${i})'>Hapus</button></td>
   </tr>`;
 });
}
