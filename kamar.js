
let kamar = JSON.parse(localStorage.getItem('kamar')) || [];

function saveKamar(){ localStorage.setItem('kamar',JSON.stringify(kamar)); }

function addKamar(){
  let nomor=document.getElementById('kamarNomor').value;
  let tipe=document.getElementById('kamarTipe').value;
  let harga=document.getElementById('kamarHarga').value;
  kamar.push({nomor,tipe,harga,status:'Kosong'});
  saveKamar(); renderKamar();
}

function deleteKamar(i){ kamar.splice(i,1); saveKamar(); renderKamar(); }

function renderKamar(){
  let t=document.getElementById('tableKamar');
  if(!t)return;
  t.innerHTML='';
  kamar.forEach((k,i)=>{
    t.innerHTML+=`<tr>
      <td>${i+1}</td><td>${k.nomor}</td><td>${k.tipe}</td>
      <td>${k.harga}</td><td>${k.status}</td>
      <td><button class='btn btn-sm btn-danger' onclick='deleteKamar(${i})'>Hapus</button></td>
    </tr>`;
  });
}
