document.addEventListener("DOMContentLoaded", function () {
    updateWelcome(); // Panggil fungsi langsung saat halaman selesai dimuat
});

function updateWelcome() {
    const userName = prompt("Please enter your name:", "Guest").trim();
    const hiText = document.querySelectorAll("#hi-text");
    hiText.forEach((text) => {
        text.textContent = userName ?
            `Hi ${userName}! \u{1F60A}` :
            "Hi Guest \u{1F60A}";
    });
}

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 2000); // Pindah slide setiap 2 detik
}

setTimeout(() => {
    const greeting = document.getElementById("greeting");
    greeting.textContent = "👋Hello I'm Dinda Zulfa Fitria";
}, 5000);

showSlides();

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah scroll default
        const targetId = this.getAttribute('href'); // Ambil ID tujuan
        const targetElement = document.querySelector(targetId);

        // Scroll dengan offset (header height 100px, sesuaikan jika perlu)
        const offset = 100;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth', // Scroll smooth
        });
    });
});


// function formValidation() {
//     // console.log('form validation has been clicked!');

//     let nameInput = document.getElementById('name').value;

//     // condition for validate form
//     if (nameInput == '') {
//         alert('Name must be filled out!');
//     } else {
//         // display result form
//         document.getElementById('result').innerHTML = nameInput;
//     }

//     let radioBtns = document.querySelectorAll("input[name='jk']");
//     let result = document.getElementById("result");
//     let findSelected = () => {
//         let selected = document.querySelector("input[name ='jk']:checked").value;
//         result.textContent = `${selected}`
//     }

//     radioBtns.forEach(radioBtn => {
//         radioBtn.addEventListener("change", findSelected);
//     })
//     console.log(selected);
// }


// carakedua untuk melihat formnya terhubung dengan button dengan pakai id
document.getElementById('submitForm').addEventListener('click', function () {
    // Ambil data dari form
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (!name || !birthdate || !gender) {
        alert('Semua field wajib diisi!');
        return;
    }

    // Format output
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>The Result</h3>
        <p class="p"><strong>Name:</strong> ${name}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;
});