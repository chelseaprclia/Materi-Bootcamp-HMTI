//deklarasi nama variable
var name;

//set nilai variable name
name = "HMTI";

//tampilkan di console
console.log("Pelatihan: " + name);

//tipe data number
var angka1 = 10; //integer
var angka2 = 5.5; //double / float

//tipe data boolean
var sudahNikah = true; //atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

//tipe data string
var names = ["Fardan", "Ica", "Chelsea", "Denny", "Kemal", "Ega", "Ibnu"];

console.log(names);
console.log(names[1]);
console.log("", names.length);  
console.log("Data Terakhir :", names[names.length - 1]);
console.log("Total :", names.length);

//array pake []
//object pake {}

//Object
var biodata = ["Fardan", 25, "Bekasi"];

var biodata = {
    name: "Chelsea",
    age: 12,
    address: "Bekasi",
    "sudah nikah": false,
    hobbies: ["Coding", "Singing", "Sepak Bola", "Nyuci Baju"],
    ucapKata: function() {
        console.log("Ada ibu ibu gaes!");
    }
};

console.log(biodata);

//cara akses data object
console.log("Namanya: ", biodata.name);
console.log("Umurnya: ", biodata['age']);
console.log("Hobi ke-2 ", biodata.hobbies[1]);
console.log("Hobi ke-3: ", biodata["hobbies"][2]);
console.log("Hobi terakhir: ", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapKata();

//array of object
var peserta = [
    {
        name: "Fardan",
        age: 20

    },
    {
        name: "Ibnu",
        age: 20,
        address: "Bekasi"
    }
];

console.log(peserta);
console.log("Peserta Pertama: ", peserta[0]["name"]);
console.log("Umur Peserta Pertama:", peserta[0].age);

console.log(2 === '2');











