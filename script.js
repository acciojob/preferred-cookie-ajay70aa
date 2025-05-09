//your JS code here. If required.
const fontsize = document.getElementById("fontsize")
const fontcolor = document.getElementById("fontcolor")
const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.cookie = `fontsize=${fontsize.value}; path=/`;
  document.cookie = `fontcolor=${fontcolor.value}; path=/`;
  applyPreferences();
});
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}
function applyPreferences() {
  const size = getCookie("fontsize");
  const color = getCookie("fontcolor");

  if (size) {
    document.documentElement.style.setProperty("--fontsize", `${size}px`);
    fontsize.value = size;
  }

  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
    fontcolor.value = color;
  }
}
applyPreferences();