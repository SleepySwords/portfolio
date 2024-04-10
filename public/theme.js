function setTheme(theme) {
  theme ??= localStorage.getItem("theme") || "auto";
  document.documentElement.dataset.siteTheme = theme;
}
setTheme();
