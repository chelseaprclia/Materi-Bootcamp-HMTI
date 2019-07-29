//tambahkan score masing2 participant dengan angka 10
//Denny = 20, Ibnu = 15
//kerjain pake while/for/foreach

var participants = [
    {
        name: "Denny",
        score: 10,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Ibnu",
        score: 5,
        hobbies: ["Ngoding", "Ngising", "Makan"]
    },
    {
        name: "Mumun",
        score: 7,
        hobbies: ["Nakutin orang"]
    }
];

//Jawabannya
for (index in participants) {
    participants[index].score += 10;
    console.log(participants[index]);
    console.log("========================================================");
}

for (p of participants) {
    p.score += 10;
    console.log(p);
    console.log("========================================================");
}

