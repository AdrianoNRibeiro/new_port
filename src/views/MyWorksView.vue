<script setup></script>

<template>
  <div class="container-myworks">
    <div class="content-works">
      <div class="title-works">
        <h1>MEUS TRABALHOS</h1>
      </div>
      <div class="section-works">
        <div class="comments">
          <h3>Abaixo alguns de meus estudos e trabalhos, se divirta!</h3>
        </div>
        <div class="grid-works">
          <div class="grid-item">
            <a href="https://pokevit-adriano.netlify.app/" target="tela"
              ><img src="/img/Pokevit.png" alt=""
            /></a>
            <p>Pokevit</p>
          </div>
          <div class="grid-item">Item 2</div>
          <div class="grid-item">Item 3</div>
          <div class="grid-item">Item 4</div>
          <div class="grid-item">Item 5</div>
          <div class="grid-item">Item 6</div>
          <div class="grid-item">Item 7</div>
          <div class="grid-item">Item 8</div>
          <div class="grid-item">Item 9</div>
          <div class="grid-item">Item 10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-myworks {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-works {
  width: 90%;
  height: 700px;
  margin-bottom: 80px;
  border-radius: 9px;
  background: #4ecdc4;
  background: -webkit-linear-gradient(to right, #556270, #4ecdc4);
  background: linear-gradient(to right, #556270, #4ecdc4);
  display: flex;
  flex-direction: column;
}

.title-works {
  border-bottom: 1px solid #fff;
  width: 98%;
  margin: 0px auto 15px auto;
}

.title-works h1 {
  font-family: 'Silkscreen', sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 2.5em;
  text-shadow: 2px 2px 2px #99e051;
  text-align: center;
  padding: 5px;
  height: 60px;
}

.comments {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 45%;
  height: 45px;
  margin: -15px auto 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.comments h3 {
  font-family: 'Allerta Stencil', sans-serif;
  color: #0f2422;
  font-size: 1.5em;
  text-align: center;
}

.grid-works {
  width: 98%;
  height: 550px;
  border: 1px solid #fff;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  flex: 1 0 20%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 10px;
}

.grid-item img {
  width: 90%;
}

@media (min-width: 361px) and (max-width: 425px) {
  .content-works {
    height: 710px;
    margin-top: 15%;
    margin-bottom: 0px;
  }

  .title-works {
    width: 90%;
  }

  .title-works h1 {
    font-size: 1.5em;
    height: 40px;
  }
}
</style>
