<script setup></script>

<template>
  <div class="container">
    <div class="form-contact">
      <div class="photo-character"></div>
      <div class="contacts">
        <div class="title-contact">
          <h3>Contate-me</h3>
        </div>
        <div class="form-containername">
          <div class="form-name">
            <span>Nome</span>
            <input type="text" class="input-form" placeholder="Seu primeiro nome" />
          </div>
          <div class="form-lastname">
            <span>Sobrenome</span>
            <input type="text" class="input-form" placeholder="Seu segundo nome" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 5%;
  height: 100vh;
  width: 100%;
}

.form-contact {
  height: 650px;
  width: 100%;
  display: flex;
}

.photo-character {
  background-color: gray;
  width: 40%;
  height: 650px;
  background-image: url('./img/pt4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 5px 0px 0px 5px;
}

.contacts {
  background-color: rgb(236, 241, 241);
  width: 60%;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.title-contact {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}

.title-contact h3 {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 2.8em;
  text-align: center;
  border-bottom: 2px solid #0f2422;
}

.form-containername {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.form-name,
.form-lastname {
  display: flex;
  flex-direction: column;
  width: 45%;
}

span {
  font-family: 'Allerta Stencil', sans-serif;
  margin-bottom: 5px;
}

.input-form {
  border: none;
  border-bottom: 1px solid black;
  height: 40px;
  background-color: transparent;
  font-size: 1em;
  outline: none;
}

@media (min-width: 361px) and (max-width: 425px) {
  .container {
    overflow: auto;
    overflow: auto;
  }

  .form-contact {
    flex-direction: column;
    width: 95%;
    margin: 15% auto auto auto;
  }

  .photo-character {
    width: 100%;
    height: 210px;
    margin-left: auto;
    margin-right: auto;
    background-position: top center;
    background-size: cover;
    border-radius: 5px 5px 0px 0px;
  }

  .contacts {
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    height: 400px;
  }

  .title-contact h3 {
    font-size: 2em;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .form-containername {
    width: 100%;
    flex-direction: column;
  }

  .form-name,
  .form-lastname {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }
}
</style>
