//Minggu, 14 Juli 2019

// >, <, >==, <==, ==, !=, !==, ===

//console.log('Apakah sama ? '. 1 === '1');
//1 === '1' //false
//1 == '1' //true

//1. if
if(1 > 0) {
    console.log('[IF] satu lebih dari o');
};

//2. if - else
if (1 != 1) {
    console.log('[IF ELSE] 1 tidak sama dengan 1');
} else {
    console.log('[IF ELSE] 1 sama dengan 1');
}

//3. if - else - if
if (1 != 1) {
    console.log('[IF ELSE IF] 1 tidak sama dengan 1');
} else if (1 > 1) {
    console.log('[IF ELSE IF] tapi 1 lebih dari 0');
}

//4. if - else - if - else
if (2 != 2) {
    console.log('[IF ELSE IF] 1 tidak sama dengan 1');
} else if (1 > 1) {
    console.log('[IF ELSE IF] tapi 1 lebih dari 0');
} else {
    console.log('[IF ELSE IF ELSE] ambil semua cuy');
}

//5. if - if
if (1 > 0) {
    console.log('ternyata benar');
        if (2 > 1) {
        console.log('2 lebih dari 1');
    }
        console.log('yg 2 > 1 bisa jadi salah bro');
}

//6. if bersarang
if (1 > 0) {
    console.log('ternyata benar');
    if (2 > 1) {
        console.log('2 lebih dari 1');
        if (3 > 2) {
            if (4 > 5) {
                if (5 > 4) {

                } else {

                }
            } else if (6 > 5) {

            }
        } else {
            
        }
    }
    console.log('yang 2 > 1 bisa jadi salah');
}

//Minggu, 28 Juli 2019

//switch - case
//mirip if else tapi cuma bisa cek persamaan aja atau kecocokan sebuah data

var peserta = "yayang";

switch (peserta) {
    case "yayang":
        console.log("Pesertanya si Yayang!");
        break;
    case "ibnu":
        console.log("Pesertanya si Ibnu!");
        break;
    default:
        console.log("Oh ternyata Burhan!");
}












