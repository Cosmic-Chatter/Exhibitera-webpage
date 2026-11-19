// Exhibitera theme: match Bootstrap's color mode to the system setting, and
// follow changes while the page is open. Load in <head> to avoid a flash of
// the wrong theme.
(function () {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  function applyColorMode () {
    document.documentElement.setAttribute('data-bs-theme', darkQuery.matches ? 'dark' : 'light')
  }
  applyColorMode()
  darkQuery.addEventListener('change', applyColorMode)
})()
