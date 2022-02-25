;(() => {
  const saved = localStorage.getItem('theme-appearance')
  if (
    !saved || saved === 'auto'
      ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
      : saved === 'dark'
  ) {
    document.documentElement.classList.add('dark')
  }
})()
