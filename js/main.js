tailwind.config = {
    theme: {
    extend: {
        colors: {
        ink: "#111111",
        muted: "#6b7280",
        line: "#e7e5e4",
        soft: "#fafaf9",
        accent: "#1f2937"
        }
    }
    }
}

function togglePinStats() {
  const el = document.getElementById("pinstats-screen");
  el.classList.toggle("hidden");
}
function openScreenshot() {
  document.getElementById("screenshot-modal").classList.remove("hidden")
}
function closeScreenshot() {
  document.getElementById("screenshot-modal").classList.add("hidden")
}