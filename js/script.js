document.addEventListener('DOMContentLoaded', function() {
    var namaElement = document.getElementById('nama');
    var nama = 'Perusahaan Ketna'; 
    namaElement.textContent = nama;
});

document.addEventListener('DOMContentLoaded', function() {
    var namaElement = document.getElementById('nama');
    var nama = 'Perusahaan Ketna'; 
    namaElement.textContent = nama;

    // Auto-slide banner
    var slides = document.querySelectorAll('.banner-slider .slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function(slide, i) {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

//formulir
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var nama = document.getElementById('form_nama').value;
    var tanggal_lahir = document.getElementById('tanggal_lahir').value;
    var jenis_kelamin = document.getElementById('jenis_kelamin').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    if (nama && tanggal_lahir && jenis_kelamin && email && pesan) {
        document.getElementById('output_nama').textContent = nama;
        document.getElementById('output_tanggal_lahir').textContent = tanggal_lahir;
        document.getElementById('output_jenis_kelamin').textContent = jenis_kelamin;
        document.getElementById('output_email').textContent = email;
        document.getElementById('output_pesan').textContent = pesan;

        document.getElementById('output').style.display = 'block';
        alert('Pesan Anda telah terkirim!');

        document.getElementById('contact-form').reset();
    } else {
        alert('Mohon lengkapi semua kolom!');
    }
});

//senyembunyiin
document.getElementById('output').style.display = 'none';

// hover
document.querySelectorAll('.profile-banner img, .office-image .image').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});

// scroll
document.querySelectorAll('nav ul li a').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// waktu di footer
function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(updateTime, 1000);
});

// hamburger list
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});
