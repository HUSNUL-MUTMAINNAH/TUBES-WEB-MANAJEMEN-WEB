
let penyewa = JSON.parse(localStorage.getItem('penyewa')) || [];

function savePenyewa(){ localStorage.setItem('penyewa',JSON.stringify(penyewa)); }

function addPenyewa(){
 let nama=document.getElementById('penNama').value;
 let kamar=document.getElementById('penKamar').value;
 let telp=document.getElementById('penTelp').value;
 penyewa.push({nama,kamar,telp});
 savePenyewa(); renderPenyewa();
}

function deletePenyewa(i){ penyewa.splice(i,1); savePenyewa(); renderPenyewa(); }

function renderPenyewa(){
 let t=document.getElementById('tablePenyewa');
 if(!t)return;
 t.innerHTML='';
 penyewa.forEach((p,i)=>{
   t.innerHTML+=`<tr>
     <td>${i+1}</td><td>${p.nama}</td><td>${p.kamar}</td>
     <td>${p.telp}</td>
     <td><button class='btn btn-sm btn-danger' onclick='deletePenyewa(${i})'>Hapus</button></td>
   </tr>`;
 });
}
