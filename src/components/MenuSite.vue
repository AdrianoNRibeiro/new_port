<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg new-color">
      <div class="container-fluid">
        <router-link class="navbar-brand centralize" to="/"><h4>AR_DIGITAL</h4></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title font-text-h5" id="offcanvasNavbarLabel">ADRIANO RIBEIRO</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link class="nav-link text-change" aria-current="page" to="/contacts"
                  >Contatos</router-link
                >
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link class="nav-link text-change" to="/about">Sobre</router-link>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link class="nav-link text-change" to="/works">Trabalhos</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.new-color {
  background-color: #000300 !important;
}

h4 {
  font-family: 'Sixtyfour', sans-serif;
  font-weight: 400;
  font-size: 1em;
}

h4:hover {
  color: #99e051;
}

.text-change {
  color: #fff;
}

.text-change:hover {
  color: #99e051 !important;
}

li {
  font-size: 1.1em;
  font-family: 'Silkscreen', sans-serif;
}

.centralize {
  width: 200px;
  height: 40px;
}

.font-text-h5 {
  font-family: 'Allerta Stencil', sans-serif;
}

@media (max-width: 360px) {
  h4 {
    font-size: 0.8em;
  }

  .new-color {
    height: 8%;
    width: 100%;
  }
}
</style>
