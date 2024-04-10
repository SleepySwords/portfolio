function setTheme(theme) {
  theme ??= localStorage.getItem("theme") || "auto";
  document.documentElement.dataset.theme = theme;
}
setTheme();
