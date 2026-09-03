// 1. Dark / Light Mode Toggle
const btn = document.querySelector("#toggleTheme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Mengubah ikon tombol berdasarkan mode yang aktif
    const isLight = document.body.classList.contains("light-mode");
    btn.textContent = isLight ? "☀️" : "🌙";
});


// 2. Render Skill Badge dari Array
const skills = ["HTML", "CSS", "JavaScript", "MySQL"];
const container = document.querySelector("#skill-container");

skills.forEach((skill) => {
    const badge = document.createElement("span");
    badge.className = "skill-badge";
    badge.textContent = skill;
    container.appendChild(badge);
});


// 3. Form Kontak & Validasi
const form = document.querySelector("#formKontak");
const namaInput = document.querySelector("#namaInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = namaInput.value.trim();

    if (nama === "") {
        alert("Nama wajib diisi!");
    } else {
        alert("Pesan terkirim, " + nama + "!");
        namaInput.value = ""; // Mengosongkan input setelah sukses
    }
});