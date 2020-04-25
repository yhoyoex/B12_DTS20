send_email = () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  if(nama === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Nama wajib diisi";
  } else if(email === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Alamat email wajib diisi";
  } else if(pesan === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Pesan wajib diisi";
  } else {
    document.getElementById("alert_kontak").style.backgroundColor="#2ecc71";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = `Terimakasih ${nama} telah menghubungi kami`;
  }

}
