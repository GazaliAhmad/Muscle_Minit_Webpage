function showSection(id) {
  fetch(`sections/${id}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-container").innerHTML = html;
    });
}

// Load Home section by default
document.addEventListener("DOMContentLoaded", () => showSection("home"));
