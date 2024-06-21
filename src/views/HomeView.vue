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
        <div class="description">
          <p>Passionate about programming and creating content for all types of audiences.</p>
        </div>
        <div class="interation">
          <p>
            To find out more about my work:
            <span style="color: #99e051; cursor: pointer" v-if="counter > 0">click here...</span>
            <span style="color: #99e051" v-if="counter == 0"
              >atualize a página para recomeçar...</span
            >
          </p>
        </div>
        <p class="p-countdown">
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

@media (max-width: 360px) and (max-height: 715px) {
  .principal {
    flex-direction: column;
  }

  .main-describe {
    width: 100%;
    height: 40vh;
  }

  .main-describe h3 {
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
  }

  .interation p {
    text-align: center;
  }

  .description {
    border: 1px solid #fff;
    width: 90%;
  }

  .description p {
    text-align: center;
  }
}
</style>
