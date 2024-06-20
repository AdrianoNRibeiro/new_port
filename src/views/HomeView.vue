<script setup></script>

<template>
  <div class="principal">
    <main class="main-describe">
      <section class="section-title">
        <h2>HI, I'M ADRIANO RIBEIRO</h2>
        <h3>A FULLSTACK DEVELOPER</h3>
      </section>
      <section class="section-content">
        <p>Passionate about programming and creating content for all types of audiences.</p>
        <div class="interation">
          <p>
            To find out more about my work
            <span style="color: #99e051; cursor: pointer">click here...</span>
          </p>
        </div>
        <p style="font-size: 0.9em">This button will go out in: {{ count }}</p>
      </section>
    </main>
    <aside class="aside-perfil">
      <img src="/img/pt5.png" alt="My Perfil" width="200" class="img-fluid img-perfil" />
    </aside>
  </div>
</template>

<style scoped>
:root {
  --color_letters: #99e051;
  --color-background: #010f00;
}

body {
  width: 100%;
  height: 100vh;
}

.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

h2,
h3,
p {
  color: #fff;
}

h2 {
  font-family: 'Jersey 25 Charted', sans-serif;
  font-weight: 400;
  font-size: 4.1em;
  font-style: normal;
}

h3 {
  font-family: 'Silkscreen', sans-serif;
  font-weight: 700;
  font-size: 2em;
}

p {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  text-align: start;
  line-height: 1.5;
  letter-spacing: 2px;
}

.img-perfil {
  border-radius: 8px;
}

.main-describe {
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.aside-perfil {
  width: 50%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.aside-perfil img {
  width: 600px;
}

.section-content {
  width: 80%;
  margin-left: 16%;
  padding: 12px;
}

.interation {
  display: flex;
}
</style>
