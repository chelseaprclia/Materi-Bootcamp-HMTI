var names = ["Fardan", "Ibnu", "Ega", "Asep"];

//1. While
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;

}

//operator == membandingkan isi saja
//operator === membandingkan isi dan tipe data

//2. Do While
var x = 0;
do {
    console.log('Do While', x);
    x++;
} while(x < 1);

//Dikerjain gaes
//1. Buat masing-masing 2 variable untuk tipe data Boolean, Array, Object dan Array of Object
//2. Buat code looping dengan menggunakan Array of Object (Bebas pake while atau do while)
    // [
    //     {
    //         name,
    //         age,
    //         gender
    //     }
    // ]
    // di dalam fungsi loopingnya, tampilkan dalam 1 baris "Fardan - Umur 20 - Laki-laki"

//Jawaban No. 1
//Boolean
var status = "Jomblo";
var kampus = "Bansal";

 if(status == "Jomblo" || kampus == "Unisma" ) {
    console.log("Maka: " + true);
}   else {
    console.log("Maka: " + false);
}

//Array
var nama_jomblo = ["Kemal", "Daus", "Fardan", "Chelsea", "Denny"]
console.log(nama_jomblo);

//Object
var pelanggan = {
    name: "Adi",
    age: 20,
    address: "Jakarta",
    "Sudah pesan": true,
    pesanan : ["Kasur", "Bantal", "Guling"],
    
};

console.log("Nama Pelanggan :", pelanggan.name);
console.log("Umur Pelanggan: ", pelanggan.age);
console.log("Alamat Pelanggan: ", pelanggan.address);
console.log("Pesanan Pertama: ", pelanggan.pesanan[1]);

//Array of Object
var mahasiswa = [
    {
        name: "Chelsea",
        age: 20,
        class: "TI/6B/Malam"
    },
    {
        name: "Kemal",
        age: 25,
        address: "Jogja"
    }
];

console.log(mahasiswa);

//Jawaban No. 2
var hmti = [
    {
        name: "Denny Septiady",
        address: "Pondok Ungu",
        gender: "Male"
    },
    {
        name: "Nafisah Azizah",
        address: "Tambun Selatan",
        gender: "Female"
    }
];

//console.log([hmti[0].name + " - " + hmti[0].address + " - " + hmti[0].gender]);

var i = 0;
while(i < hmti.length) {
    var no = i+1;
    console.log(no++ + " " + hmti[i].name + " - " + hmti[i].address + " - " + hmti[i].gender);
    i++;
};



