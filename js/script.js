// ini javasccript

function validateluas(){
    let panjangalas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;
    
    if(panjangalas == '' || tinggi == ''){
        alert('Form Masih Kosong')
    }
    console.log(panjangalas);
    console.log(tinggi);
}