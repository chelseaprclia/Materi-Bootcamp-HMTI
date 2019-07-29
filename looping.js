//operator == membandingkan isi saja
//operator === membandingkan isi dan tipe data

//Minggu, 7 Juli 2019

//1. While
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;

}

//2. Do While
var x = 0;
do {
    console.log('Do While', x);
    x++;
} while(x < 1);


var f = 0;
while (f <= 10) {
    console.log(f);
    f = f + 2;
}

//Minggu, 28 Juli 2019

//Operator ternary - Simple if else in set variable
var aa = "A";
var bb = (aa.toLowerCase() === "a") ? 10 : 11;

console.log('B', bb);

var names = ["Fardan", "Ibnu", "Ega", "Asep"];

//3. For
    //Angka Genap
    for (var i = 0; i <= 10; i = i + 2) {
        console.log('Chelsi', i);
    }

    //Angka Ganjil
    for (var i = 1; i <= 10; i = i + 2) {
        console.log('Chelsi', i);
    }

//4. For Each

//For in = looping indexnya
//For of = looping valuenya

var students = ["Ibnu", "Yayang", "Denny", "Chelsea", "Icha"];

for (student of students) {
    console.log("student",student);
} 

var participants = [
    {
        name: "Denny",
        score: 10,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Ibnu Jamil",
        score: 5,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Mumun",
        score: 7,
        hobbies: ["Nakutin orang"]
    }
];

//For of
//Contoh 1
    for (p of participants) {
        console.log("Contoh Pertama")
        console.log("Name nya :", p.name);
        for (hobby of p.hobbies) {
            console.log("Hobi nya: ", hobby);
        }
        console.log("========================================================");
    }

//Contoh 2
    for (p of participants) {
        console.log("Contoh Kedua");
        console.log("Name nya :", p.name);
        console.log("Hobi2nya :", p.hobbies.join(" - "));
        console.log("========================================================");
    }

//1. Map
//Map fungsinya kayak foreach, panggil array sama function map
participants.map(function(p, index) {
    console.log("[map] valuenya: ", p);
    console.log("[map] indexnya: ", index);
    console.log("========================================================");
});

//2. For Each
participants.forEach(function(p, index) {
    console.log("[forEach] valuenya: ", p);
    console.log("[forEach] indexnya: ", index);
    console.log("========================================================");
});

//3. Filter
//3.1 filter score < 10
var filteredScore = participants.filter(function(p) {
    return p.score < 10;
});

console.log("Filter score :", filteredScore);
console.log("========================================================");

//3.2 filter hobbi > 1
var filteredHobbies = participants.filter(function(p) {
    return p.hobbies.length > 1 ;
});

console.log("Filter hobbies :", filteredHobbies);
console.log("========================================================");

//3.3 filter huruf pertamanya d
var filteredNames = participants.filter(function(p) {
    return p.name[0].toLowerCase() === "d";
});

console.log("Filter names :", filteredNames);
console.log("========================================================");

//3.4 filter huruf tengah m untuk yang namanya hanya 1 kata
var filteredMiddleName = participants.filter(function(p) {

    //ambil total huruf
    var totalHuruf = p.name.length;

    //cari nilai tengah
    var nilaiTengah = totalHuruf / 2;

    //jika nilai tengah genap set bahwa dia genap, jika tidak berarti ganjil
    var isGenap = (nilaiTengah % 2 === 0) ? true : false;
    
    //set nilai index, jika nilai genap langsung kasih dari var nilai Tengah
    //jika ganjil bulatkan kek atas nilai tengah
    var index = isGenap ? nilaiTengah : Math.ceil(nilaiTengah);

    //gunakan variable index -1 untuk mengetahui index tengahnya
    return p.name[index  - 1].toLowerCase() === "m";
});

console.log("Filter Middle Name :", filteredMiddleName);
console.log("========================================================");


//4. Find Index
//Berfungsi untuk menemukan index ke berapa
var index = participants.findIndex(function(p) {
    return p.name.toLowerCase() == "denny";
});

//jika data ditemukan maka akan muncul 0-n
//jika data tidak ditemukan yang muncul -1
console.log("Index yang didapat: ", index);


//5. Find
//Berfungsi untuk menemukan value 
var foundValue = participants.find(function(p) {
    return p.name.toLowerCase() == "denny";
});

//jika data ditemukan maka akan return datanya
//jika data tidak ditemukan maka akan return undefined
console.log("Value yang didapat: ", foundValue);

//Contoh join dan split
//1. Split
var words = "aku suka makan nasi padang";
var splittedWord = words.split(" ");

//2. Join
var joinedWord = splittedWord.join(" - ");

//Print
console.log("Kata asli: ", words);
console.log("Kata hasil split :", splittedWord);
console.log("Kata hasil join: ", joinedWord);

/*
PR dikerjain yaaaaa...

1. Buatlah sebuah filter function untuk menyaring nama participants yang huruf tengahnya mengandung huruf "bebas"
tapi namanya harus lebih dari 1 kata

2. var kata = "aku suka makan nasi padang"
percahlah variable tersebut menjadi array dengan ekspektasi output seperti berikut:
[
    "aku suka",
    "aku suka makan",
    "aku suka makan nasi",
    "aku suka makan nasi padang"
]

3. Buatlah 1 contoh penggunaan array function 
-> map, filter, foreach, find, findIndex
notes : tidak boleh sama dengan contoh

*/