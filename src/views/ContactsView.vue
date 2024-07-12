<script setup></script>

<template>
  <div class="container">
    <div class="form-contact">
      <div class="photo-character">
        <img src="/img/pt4.jpg" alt="Meu perfil" />
      </div>
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
        <div class="form-containername">
          <div class="form-name">
            <span>E-mail</span>
            <input type="text" class="input-form" placeholder="Seu endereço de e-mail" />
          </div>
          <div class="form-lastname">
            <span>Telefone</span>
            <input type="text" class="input-form" placeholder="Seu número de telefone" />
          </div>
        </div>
        <div class="form-containermsg">
          <div class="form-msg">
            <span>Mensagem</span>
            <input type="text" class="input-form" placeholder="Sua mensagem aqui" />
          </div>
        </div>
        <div class="button-container">
          <button class="submit-button">
            SUBMIT
            <span class="arrow-line"></span>
            <span class="arrow-head">→</span>
          </button>
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
  border-radius: 5px 0px 0px 5px;
}

.photo-character img {
  width: 100%;
  height: 100%;
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

.form-containermsg {
  display: flex;
  width: 78%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  padding-left: 5px;
}

.form-msg {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.input-form:focus {
  border-bottom: 3px solid #0f2422;
}

.submit-button {
  border: none;
  background-color: transparent;
  color: #cc0000;
  font-family: sans-serif;
}

.submit-button .arrow-line {
  display: inline-block;
  width: 100px;
  height: 45px;
  border-bottom: 2px solid #cc0000;
}

.submit-button .arrow-head {
  display: inline-block;
  color: #cc0000;
  font-size: 2.5em;
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
