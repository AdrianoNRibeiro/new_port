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
        <p>
          To find out more about my work
          <router-link class="nav-link" to="/works">click here...</router-link>
        </p>
        <p>This button will go out in:</p>
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
  border: 1px solid blue;
}
</style>
