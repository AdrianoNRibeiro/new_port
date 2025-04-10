<script setup></script>

<template>
  <footer class="footer-port">
    <div class="links">
      <div class="box-link">
        <img src="/icons/github.png" alt="GitHub" />
      </div>
      <div class="box-link">
        <img src="/icons/linkedinnn.png" alt="Linkedin" />
      </div>
      <div class="box-link">
        <img src="/icons/instagram.png" alt="Instagram" />
      </div>
    </div>
    <div class="enterprise">
      <p>
        <span style="font-family: 'Sixtyfour', sans-serif; font-size: 0.9em">AR_DIGITAL</span> -
        Developer
      </p>
    </div>
    <div class="current-year">
      <p>
        <i>@ {{ new Date().getFullYear() }} - Adriano Ribeiro</i>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-port {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000300;
  color: #fff;
  font-family: 'Allerta Stencil', sans-serif;
  padding: 5px;
}

.links {
  display: flex;
  justify-content: space-around;
  width: 5%;
}

.box-link {
  margin-bottom: 5px;
}

.box-link img {
  cursor: pointer;
  width: 70%;
}

.box-link img:hover {
  transform: scale(1.1);
}

.enterprise {
  height: 30px;
}

.enterprise p {
  font-size: 0.7em;
}

.current-year {
  height: 18px;
}

.current-year p {
  font-size: 0.7em;
}

@media (min-width: 361px) and (max-width: 425px) {
  .footer-port {
    height: 8vh;
  }

  .links {
    display: flex;
    justify-content: space-around;
    width: 45%;
    height: 26px;
    margin-bottom: 3px;
  }

  .links img {
    width: 70%;
  }

  .enterprise {
    display: none;
  }

  .current-year {
    height: 18px;
  }

  .current-year p {
    font-size: 0.5em;
  }
}
</style>
