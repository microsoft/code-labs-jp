<template>
  <div>
    <Nuxt class="page" />
    <footer class="footer">
      <div class="footer__content">
        <div class="disclaimer">
          当社は、外部のリンク先ウェブサイトの内容に関していかなる責任も負うものではありません。お客様は、自らの責任においてこれらのリンクをご利用ください。なお、お客様によるリンクご利用の結果、ないしはリンクご利用に関連して、お客様が被るいかなる損害または損失について当社は、責任を負うものではありません。
        </div>
      </div>
      <div class="footer__content">
        <a href="https://github.com/microsoft/code-labs-jp" target="_blank">https://github.com/microsoft/code-labs-jp</a>
      </div>
      <div class="footer__content">
        &copy; 2020 Microsoft
      </div>     
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
  background-color: #232323;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  text-align: center;
  color: var(--color-secondary-light);
  font-size: 0.8rem;
  padding: 20px 0;
}

.footer__content {
  width: 90vw;
  max-width: 70rem;
}

.disclaimer {
  text-align: left;
  font-size: 0.7rem;
  margin-bottom: 10px;
}

.page {
  min-height: calc(100vh - var(--footer-height));
}
</style>
