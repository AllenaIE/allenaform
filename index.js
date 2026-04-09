document.getElementById('tampilkanBTN').onclick = function() {
    var nama = document.getElementById('nama').value.trim();
    if (nama === "") {
        nama = "(tidak diisi)";
    }  

    var Kelas = document.getElementById('Kelas').value.trim();
	if (Kelas === "") {
        Kelas = "(tidak diisi)";
    }

    var gender = "";
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }
    if (gender === "") {
        gender = "(belum dipilih)";
    }
	
	var Extra = "";
    var Checkbox = document.getElementsByName('Extra');
    for (var i = 0; i < Checkbox.length; i++) {
        if (Checkbox[i].checked) {
            Extra = Checkbox[i].value;
            break;
		}
	}
		 if (Extra === "") {
        Extra = "(belum dipilih)";
}
	var time = "";
    var radios = document.getElementsByName('time');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            time = radios[i].value;
            break;
		}
	}
		 if (time === "") {
        time = "(belum dipilih)";
}
		 
    var hasilText = "Nama Lengkap: " + nama + "\nJenis Kelamin: " + gender + "\nEkstrakurikuler yang diminati: " + Extra+ "\nPilih Jadwal Belajar *wajib: " + time +"\nKelas atau Tingkatan: " + Kelas;
    document.getElementById('hasil').innerText = hasilText;
};

      

