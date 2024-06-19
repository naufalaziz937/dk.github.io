
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:1200,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)


document.querySelector('.btn-explore').addEventListener('click', () => {

    window.location.href = 'index2.html';
});


function anggota() {
    alert('Kelompok 8')
    alert('Adhyasta')
    alert('Dimas')
    alert('Nazwan')
}

function beliTiket() {
    const nama = document.getElementById('nama').value;
    const jumlahTiket = parseInt(document.getElementById('jumlah_tiket').value);
    const hargaPerTiket = 50000; // Harga per tiket (misalnya)
    const totalHarga = jumlahTiket * hargaPerTiket;

    // Generate random ticket number (e.g., 123456)
    const nomorSeri = Math.floor(Math.random() * 900000) + 100000;

    // Display ticket details
    const ticketElement = document.getElementById('ticket');
    ticketElement.innerHTML = `
        <h2>Tiket Anda</h2>
        <p>Nama: ${nama}</p>
        <p>Jumlah Tiket: ${jumlahTiket}</p>
        <p>Total Harga: Rp.${totalHarga}</p>
        <p>Nomor Seri Tiket: ${nomorSeri}</p>
    `;
}

function beliTiket2() {
    const nama2 = document.getElementById('nama2').value;
    const jumlahTiket2 = parseInt(document.getElementById('jumlahTiket2').value);
    const hargaPerTiket2 = 70000; // Harga per tiket (misalnya)
    const totalHarga2 = jumlahTiket2 * hargaPerTiket2;

    // Generate random ticket number (e.g., 123456)
    const nomorSeri2 = Math.floor(Math.random() * 900000) + 100000;

    // Display ticket details
    const ticketElement = document.getElementById('ticket2');
    ticketElement.innerHTML = `
        <h2>Tiket Anda</h2>
        <p>Nama: ${nama2}</p>
        <p>Jumlah Tiket: ${jumlahTiket2}</p>
        <p>Total Harga: Rp.${totalHarga2}</p>
        <p>Nomor Seri Tiket: ${nomorSeri2}</p>
    `;
}