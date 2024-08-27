// 1#

// {
//     let a = +prompt("son kiriting")
//     if(a >= 0){
//         console.log(a + 1)
//     }else{
//         console.log(a);
//     }
// }


// 2#

// {
//     let a = +prompt("son kiriting")
//     if(a >= 0){
//         console.log(a + 1)
//     }else{
//         console.log(a - 2);
//     }
// }


// 3#


// {
//     let a = +prompt("son kiriting")
//     if (a == 0) {
//         console.log(`${a + 10} teng`)
//     } else if (a >= 0) {
//         console.log(`${a + 1} musbat son`);
//     } else {
//         console.log(`${a - 2} manfiy son`);
//     }
// }


// 4#

// {
//     let a = 15 // promt shart emas kod tug'ri ishlasa buldi dedilar ustoz.
//     let b = -10
//     let d = 20

//     let musbat = 0
//     let manfiy = 0

//     if (a >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (b >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (d >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     console.log(`musbat: ${musbat}`)
// }


// 5#

// {
//     let a = 15
//     let b = -33
//     let d = -28

//     let musbat = 0
//     let manfiy = 0

//     if (a >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (b >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (d >= 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     console.log(`musbat: ${musbat} manfiy: ${manfiy}`)
// }


// 6#

// {
//     let a = 3
//     let b = 9

//     if (a > b) {
//         console.log(`${a} dan ${b} kichig`)
//     } else {
//         console.log(`${a} dan ${b} katta`)
//     }
// }


// 7#

// {
//     let a = 35;
//     let b = 25;

//     if (a < b) {
//         console.log(`${a} kichig ${b} dan`);
//     } else if (a > b) {
//         console.log(`${b} kichig ${a} dan`);
//     } else {
//         console.log(`Ikkala son ham teng.`);
//     }
// }


// 8#

// {
//     let a = 10;
//     let b = 120;

//     if (a > b) {
//         console.log(`Katta son: ${a}`);
//         console.log(`Kichik son: ${b}`);
//     } else if (a < b) {
//         console.log(`Katta son: ${b}`);
//         console.log(`Kichik son: ${a}`);
//     } else {
//         console.log(`Ikkala son teng: ${a}`);
//     }
// }


// 9#

// {
//     let a = 12;
//     let b = 10;

//     if (a > b) {
//         let son = a;
//         a = b;
//         b = son;
//     } else {
//         console.log(`Notug'ri`);
//     }

//     console.log(`${b} katta`);
//     console.log(`${a} kichig`);
// }


// 10#

// {
//     let a = 3;
//     let b = 5;

//     if (a !== a) {
//         let num = a + b;
//         a = num;
//         b = num;
//     } else {
//         a = 0;
//         b = 0;
//     }

//     console.log(`${a} A qiymati`);
//     console.log(`${b} B qiymati`);
// }



const password = document.querySelector('.input_pasword');
const eyeOpenIcon = document.querySelector('.iye_icons_open');
const eyeClosedIcon = document.querySelector('.iye_icons_close');

eyeOpenIcon.addEventListener('click', () => input('open'));
eyeClosedIcon.addEventListener('click', () => input('closed'));

function input(state) {
    switch (state) {
        case 'open':
            password.type = 'text';
            eyeOpenIcon.style.display = 'none';
            eyeClosedIcon.style.display = 'inline';
            break;
        case 'closed':
            password.type = 'password';
            eyeOpenIcon.style.display = 'inline';
            eyeClosedIcon.style.display = 'none';
            break;
        default:
            console.error('Unknown state:', state);
    }
}