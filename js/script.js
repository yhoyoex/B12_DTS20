send_email = () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  if(nama === '') {
    alert("Nama wajib diisi");
  } else if(email === '') {
    alert("Alamat email wajib diisi");
  } else if(pesan === '') {
    alert("Pesan wajib diisi");
  } else {
    alert( `Terimakasih ${nama} telah menghubungi kami`);
  }

}
