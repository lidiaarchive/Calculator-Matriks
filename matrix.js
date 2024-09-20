document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
}
// document.addEventListener(
//     'contextmenu', e => {
//         e.preventDefault();
//     }
// )

const pilihOperasi = document.querySelectorAll('.aritmatika');
const back = document.querySelector('.pilih-lagi');
const db = document.querySelector('.dashboard');
const indikasi = document.querySelector('.used-operator');
back.addEventListener(
    'click', function() {
        db.classList.remove('hilang');
    }
)
pilihOperasi.forEach(e => {
    e.addEventListener(
        'click', function() {
            const nowOperasi = document.querySelector('.aksi');
            nowOperasi.classList.remove('aksi');
            e.classList.add('aksi');
            db.classList.add('hilang');

            indikasi.textContent = e.id;

            const mB = document.querySelector('.matrix-B');
            mB.classList.remove('hide');
            indikasi.classList.remove('hide');

            if(e.id == 'D') {
                mB.classList.add('hide');
                indikasi.classList.add('hide');
            };
        }
    )
});

const tampilHasil = document.querySelector('.tampil-hasil');
const tutupHasil = document.querySelector('.tutup-hasil');
tutupHasil.addEventListener(
    'click', function() {
        tampilHasil.classList.add('sembunyikan');
    }
)

function cekOrdo() {
    const ordoDipilih = document.querySelector('.dipakai');
    const tempatInput = document.querySelectorAll('.inputan-matriks');
    const halaman = document.querySelector('.main');
    tempatInput.forEach(e => {
        e.innerHTML = '';
        for(let i = 0; i < parseInt(ordoDipilih.id) * parseInt(ordoDipilih.id); i++) {
            const forInput = document.createElement('input');
            forInput.setAttribute('type','number');
            e.appendChild(forInput);

            e.style.gridTemplateColumns = 'repeat(' + ordoDipilih.id + ',40px)';
            e.style.gridTemplateRows = 'repeat(' + ordoDipilih.id + ',40px)';
        }
    });
}
window.addEventListener('load', cekOrdo, false);
const pilihOrdo = document.querySelectorAll('header button');
pilihOrdo.forEach(e => {
    e.addEventListener('click', function() {
        const used = document.querySelector('.dipakai');
        used.classList.remove('dipakai');
        e.classList.add('dipakai');
        cekOrdo();
    })
});

const hitung = document.querySelector('.kirim');
hitung.addEventListener(
    'click', function() {
        tampilHasil.classList.remove('sembunyikan');
        const operasinya = document.querySelector('.aksi');
        const matriksA = document.querySelectorAll('.matrix-A input');
        const matriksB = document.querySelectorAll('.matrix-B input');
        const matriksHasil = document.querySelectorAll('.tampil-hasil .inputan-matriks input');
        const ordoDipilih = document.querySelector('.dipakai');
        const jmlOrdo = parseInt(ordoDipilih.id);
        matriksHasil[0].parentElement.classList.remove('det');
        matriksHasil.forEach(output => {
            output.classList.remove('hide');
        });

        function nilaiA() {
            if(jmlOrdo == 2) {
                let matriksABaru = [];
                matriksABaru[0] = [matriksA[0].value, matriksA[1].value];
                matriksABaru[1] = [matriksA[2].value, matriksA[3].value];
                return matriksABaru;
            } else if(jmlOrdo == 3) {
                let matriksABaru = [];
                matriksABaru[0] = [matriksA[0].value, matriksA[1].value, matriksA[2].value];
                matriksABaru[1] = [matriksA[3].value, matriksA[4].value, matriksA[5].value];
                matriksABaru[2] = [matriksA[6].value, matriksA[7].value, matriksA[8].value];
                return matriksABaru;
            } else if(jmlOrdo == 4) {
                let matriksABaru = [];
                matriksABaru[0] = [matriksA[0].value, matriksA[1].value, matriksA[2].value, matriksA[3].value];
                matriksABaru[1] = [matriksA[4].value, matriksA[5].value, matriksA[6].value, matriksA[7].value];
                matriksABaru[2] = [matriksA[8].value, matriksA[9].value, matriksA[10].value, matriksA[11].value];
                matriksABaru[3] = [matriksA[12].value, matriksA[13].value, matriksA[14].value, matriksA[15].value];
                return matriksABaru;
            } else if(jmlOrdo == 5) {
                let matriksABaru = [];
                matriksABaru[0] = [matriksA[0].value, matriksA[1].value, matriksA[2].value, matriksA[3].value, matriksA[4].value];
                matriksABaru[1] = [matriksA[5].value, matriksA[6].value, matriksA[7].value, matriksA[8].value, matriksA[9].value];
                matriksABaru[2] = [matriksA[10].value, matriksA[11].value, matriksA[12].value, matriksA[13].value, matriksA[14].value];
                matriksABaru[3] = [matriksA[15].value, matriksA[16].value, matriksA[17].value, matriksA[18].value, matriksA[19].value];
                matriksABaru[4] = [matriksA[20].value, matriksA[21].value, matriksA[22].value, matriksA[23].value, matriksA[24].value];
                return matriksABaru;
            }
        }
        function nilaiB() {
            if(jmlOrdo == 2) {
                let matriksBBaru = [];
                matriksBBaru[0] = [matriksB[0].value, matriksB[1].value];
                matriksBBaru[1] = [matriksB[2].value, matriksB[3].value];
                return matriksBBaru;
            } else if(jmlOrdo == 3) {
                let matriksBBaru = [];
                matriksBBaru[0] = [matriksB[0].value, matriksB[1].value, matriksB[2].value];
                matriksBBaru[1] = [matriksB[3].value, matriksB[4].value, matriksB[5].value];
                matriksBBaru[2] = [matriksB[6].value, matriksB[7].value, matriksB[8].value];
                return matriksBBaru;
            } else if(jmlOrdo == 4) {
                let matriksBBaru = [];
                matriksBBaru[0] = [matriksB[0].value, matriksB[1].value, matriksB[2].value, matriksB[3].value];
                matriksBBaru[1] = [matriksB[4].value, matriksB[5].value, matriksB[6].value, matriksB[7].value];
                matriksBBaru[2] = [matriksB[8].value, matriksB[9].value, matriksB[10].value, matriksB[11].value];
                matriksBBaru[3] = [matriksB[12].value, matriksB[13].value, matriksB[14].value, matriksB[15].value];
                return matriksBBaru;
            } else if(jmlOrdo == 5) {
                let matriksBBaru = [];
                matriksBBaru[0] = [matriksB[0].value, matriksB[1].value, matriksB[2].value, matriksB[3].value, matriksB[4].value];
                matriksBBaru[1] = [matriksB[5].value, matriksB[6].value, matriksB[7].value, matriksB[8].value, matriksB[9].value];
                matriksBBaru[2] = [matriksB[10].value, matriksB[11].value, matriksB[12].value, matriksB[13].value, matriksB[14].value];
                matriksBBaru[3] = [matriksB[15].value, matriksB[16].value, matriksB[17].value, matriksB[18].value, matriksB[19].value];
                matriksBBaru[4] = [matriksB[20].value, matriksB[21].value, matriksB[22].value, matriksB[23].value, matriksB[24].value];
                return matriksBBaru;
            }
        }

        let m1 = new nilaiA();
        let m2 = new nilaiB();

        if(operasinya.id == '+' || operasinya.id == '-') {
            let mA = [];
            let mB = [];
            matriksA.forEach(a => {
                mA.push(parseInt(a.value));
            });
            matriksB.forEach(b => {
                mB.push(parseInt(b.value));
            });

            let hasil = [];
            hasil.push(mA);
            hasil.push(mB);
            const operasi = array => {
                const tampung = [];
                array.forEach(sub => {
                    sub.forEach((num, index) => {
                        if ( tampung[index] ){
                            if ( operasinya.id == '+' ) {
                                tampung[index] += num;
                            } else if ( operasinya.id == '-' ) {
                                tampung[index] -= num;
                            }
                        } else {
                            tampung[index] = num;
                        }
                    });
                });
                for(let i = 0; i < matriksHasil.length; i++) {
                    matriksHasil[i].value = tampung[i];
                }
                return tampung;
            }
            operasi(hasil);
        } else if(operasinya.id == 'x') {
            function multiply(m1, m2, m3)
            {
                let a, b, c;
                for (a = 0; a < jmlOrdo; a++) {
                    for (b = 0; b < jmlOrdo; b++) {
                        m3[a][b] = 0;
                        for (c = 0; c < jmlOrdo; c++)
                            m3[a][b] += m1[a][c] * m2[c][b];
                    }
                }
            }
            let m3 = new Array(jmlOrdo);
            for (let c = 0; c < jmlOrdo; c++) {
                m3[c] = new Array(jmlOrdo);
            }
            
            multiply(m1, m2, m3);

            const perkalian = hasil => {
                const final = [];
                hasil.forEach(element => {
                    element.forEach(num => {
                        final.push(num);
                    });
                });
                for(y = 0; y < matriksHasil.length; y++) {
                    matriksHasil[y].value = final[y];
                }
                return final;
            }
            perkalian(m3);
        } else {
            matriksHasil[0].parentElement.classList.add('det');

            matriksHasil.forEach(output => {
                output.classList.add('hide');
            });

            function det(m1) {
                if (m1.length == 2) {
                    return (m1[0][0] * m1[1][1]) - (m1[0][1] * m1[1][0]);
                }
                let result = 0;
                for (let i = 0; i < m1.length; i++) { 
                    result += Math.pow(-1, i) * m1[0][i] * det(deleteRowAndColumn(m1, i)); 
                }
                return result;
            }
                
            function deleteRowAndColumn(m1, index) {
                let temporary = [];
                for (let i = 0; i < m1.length; i++) {
                    temporary.push(m1[i].slice(0));
                } 
                temporary.splice(0, 1); 
                for (let i = 0; i < temporary.length; i++) {
                    temporary[i].splice(index, 1);
                } 
                return temporary;
            }

            matriksHasil[0].classList.remove('hide');
            matriksHasil[0].value = det(m1);
        }
    }
)