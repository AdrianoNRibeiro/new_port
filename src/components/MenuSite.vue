<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg new-color">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><h4>AR_DIGITAL</h4></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
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
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ADRIANO RIBEIRO</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/contacts"
                  >Contact</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
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
  background-color: #010701 !important;
}

h4 {
  font-family: 'Sixtyfour', sans-serif;
  font-weight: 400;
  font-size: 1em;
}
</style>
