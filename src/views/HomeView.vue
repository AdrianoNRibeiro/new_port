<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const counter = ref(10)

function decrementCounter() {
  if (counter.value > 0) {
    counter.value--
  }
}

onMounted(() => {
  const intervalId = setInterval(decrementCounter, 1000)

  onUnmounted(() => clearInterval(intervalId))
})
</script>

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
            To find out more about my work:
            <span style="color: #99e051; cursor: pointer" v-if="counter > 0">click here...</span>
            <span style="color: #99e051" v-if="counter == 0"
              >atualize a página para recomeçar...</span
            >
          </p>
        </div>
        <p style="font-size: 0.9em">
          This button will go out in:
          <span style="font-size: 1.8em" id="spanCountdown">{{ counter }}</span>
        </p>
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

@media (max-width: 365px) and (max-height: 776px) {
  h2 {
    font-size: 2em !important;
  }

  h3 {
    font-size: 1em !important;
  }

  p {
    font-size: 0.8em !important;
  }

  .aside-perfil img {
    width: 250px !important;
  }
}

@media (max-width: 397px) and (max-height: 830px) {
  h2 {
    font-size: 1.9em;
  }

  h3 {
    font-size: 1em;
  }

  p {
    font-size: 1em;
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 1.3em;
  }

  p {
    font-size: 1em;
    line-height: 1.7;
    letter-spacing: 1.8px;
    text-align: center;
  }

  .principal {
    flex-direction: column;
    margin-top: 0;
  }

  .main-describe {
    width: 90%;
    height: 55vh;
  }

  .section-content {
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
    padding: 0;
  }

  .aside-perfil {
    width: 100%;
    height: 30vh;
    display: flex;
    padding: 5px;
  }

  .aside-perfil img {
    width: 320px;
  }
}

@media (max-width: 991px) {
  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
    line-height: 1.6;
    letter-spacing: 1.6px;
  }

  .aside-perfil img {
    width: 450px;
  }

  .section-content {
    width: 100%;
    margin-left: 20px;
    margin-top: 30px;
    padding: 5px;
  }
}
</style>
