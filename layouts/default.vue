<template>
  <div>
    <Nuxt class="page" />
    <footer class="footer">
      &copy; 2020 Microsoft
    </footer>
  </div>
</template>

<style>
:root {
  --footer-height: 5rem;
  --footer-margin-top: 2rem;

  --color-primary: #0078d4;
  --color-primary-light: #50e6ff;
  --color-secondary: #505050;
  --color-secondary-dark: #2f2f2f;
  --color-secondary-light: #737373;
}

html {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000;
}

body {
  background-color: #11100f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
</style>

<style scoped>
.footer {
  height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  text-align: center;
  color: var(--color-secondary-light);
  font-size: 0.8rem;
  margin-top: var(--footer-margin-top);
}

.page {
  min-height: calc(100vh - (var(--footer-height) + var(--footer-margin-top)));
}
</style>
