<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToMyWorksView() {
  router.push('/works')
}
</script>

<template>
  <div class="principal">
    <main class="main-describe">
      <section class="section-title">
        <h2>OLÁ, EU SOU ADRIANO RIBEIRO</h2>
        <h3>UM DESENVOLVEDOR FULLSTACK</h3>
      </section>
      <section class="section-content">
        <div class="description">
          <p>Apaixonado por programação e criação de conteúdos para todos os tipos de públicos.</p>
        </div>
        <div class="interation">
          <p>Para saber mais:</p>
          <div class="box-button">
            <button
              type="button"
              class="btn btn-warning btn-size-adjust"
              @click="navigateToMyWorksView"
            >
              Clique aqui
            </button>
          </div>
        </div>
      </section>
    </main>
    <aside class="aside-perfil">
      <img
        src="/img/pt5.png"
        alt="My Perfil"
        width="200"
        class="img-fluid img-perfil"
        style="border-radius: 40%; box-shadow: 3px 3px 3px #fff"
      />
    </aside>
  </div>
</template>

<style scoped>
.remove {
  display: none;
}
:root {
  --color_letters: #99e051;
  --color-background: #010f00;
}

body {
  width: 100%;
  height: 100vh;
}

.p-restart {
  color: #99e051;
  margin-left: 12px;
}

.p-countdown {
  font-size: 0.9em;
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
  text-shadow: 2px 2px 2px #99e051;
}

p {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  text-align: start;
  line-height: 1.8;
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
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-top: 6%;
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

.btn-size-adjust {
  margin-left: 12px;
  height: 40px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: bold;
  font-size: 1em;
}

.btn-size-adjust:hover {
  animation: pulse 0.5s infinite ease-in;
}

@keyframes pulse {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}

@media (max-width: 360px) {
  .principal {
    flex-direction: column;
  }

  .main-describe {
    width: 100%;
    height: 40vh;
  }

  .aside-perfil {
    width: 100%;
    height: 35vh;
  }

  h2 {
    font-size: 2.2em;
  }

  h3 {
    font-size: 1.1em;
  }

  p {
    font-size: 0.8em;
  }

  .aside-perfil img {
    width: 63%;
  }

  .section-content {
    width: 100%;
  }

  .p-countdown {
    font-size: 0.7em;
    text-align: center;
    width: 90%;
  }

  .interation {
    width: 90%;
    flex-direction: column;
  }

  .interation p {
    text-align: center;
  }

  .description {
    width: 90%;
  }

  .description p {
    text-align: center;
  }

  .box-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-size-adjust {
    width: 50%;
    height: 15%;
    margin-bottom: 15px;
  }
}

@media (min-width: 361px) and (max-width: 425px) {
  .principal {
    flex-direction: column;
  }

  .main-describe {
    width: 100%;
    height: 42vh;
  }

  .main-describe h3 {
    text-align: center;
  }

  .section-title {
    margin-left: auto;
    margin-right: auto;
  }

  .section-title h2 {
    font-size: 2.5em;
    text-align: center;
  }

  .aside-perfil {
    width: 100%;
    height: 35vh;
  }

  h2 {
    font-size: 2.2em;
  }

  h3 {
    font-size: 1.1em;
  }

  p {
    font-size: 0.9em;
  }

  .aside-perfil img {
    width: 62%;
  }

  .section-content {
    width: 100%;
  }

  .interation {
    width: 90%;
    flex-direction: column;
    transform: translateX(-10px);
  }

  .interation p {
    text-align: center;
    flex-direction: column;
  }

  .p-countdown {
    width: 90%;
    text-align: center;
    font-size: 0.7em;
  }

  .box-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-size-adjust {
    width: 60%;
    height: 30%;
    margin-bottom: 15px;
  }

  .description {
    width: 90%;
    transform: translateX(-10px);
  }

  .description p {
    text-align: center;
  }
}

@media (min-width: 426px) and (max-width: 779px) {
  .principal {
    flex-direction: column;
  }

  .main-describe {
    width: 100%;
    height: 450px;
  }

  .aside-perfil {
    width: 100%;
    height: 200px;
  }

  .section-content {
    overflow: auto;
  }

  .section-title h2 {
    font-size: 2.9em;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-size: 1.8em;
  }

  p {
    font-size: 0.8em;
  }

  .aside-perfil {
    width: 62%;
  }

  .section-content {
    width: 100%;
  }

  .interation {
    width: 90%;
    flex-direction: column;
  }

  .interation p {
    text-align: center;
    flex-direction: column;
  }

  .p-countdown {
    width: 90%;
    text-align: center;
    font-size: 0.7em;
  }

  .box-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-size-adjust {
    width: 50%;
    height: 30%;
    margin-bottom: 15px;
  }

  .description {
    width: 90%;
  }

  .description p {
    text-align: center;
    font-size: 0.9em;
  }

  .img-perfil {
    width: 80% !important;
  }
}

@media (min-width: 780px) and (max-width: 900px) {
  .main-describe {
    width: 100%;
    height: 60vh;
    border: 1px solid #fff;
  }

  .section-title h2 {
    font-size: 2.6em;
    text-align: center;
  }

  .section-title h3 {
    font-size: 1.4em;
    text-align: center;
  }

  .aside-perfil {
    width: 100%;
    height: 40vh;
  }

  .section-content {
    border: 1px solid yellow;
    width: 100%;
    margin-left: -10px;
  }

  .section-content p {
    font-size: 0.9em;
    text-align: center;
  }

  .box-button .btn-size-adjust {
    width: 111px;
    height: 26px;
  }

  .interation {
    border: 1px solid red;
    justify-content: center;
  }

  .interation p {
    font-size: 0.9em;
    text-align: center;
  }
}
</style>
