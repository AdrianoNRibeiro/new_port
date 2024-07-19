<script setup>
import { ref } from 'vue'

let name = ref('')
let lastname = ref('')
let email = ref('')
let telephone = ref('')
let txtMessage = ref('')
let errors = ref([])

const clearErrors = () => {
  errors.value = []
}

const checkForm = () => {
  clearErrors()

  if (!name.value || !lastname.value || !email.value || !telephone.value || !txtMessage.value) {
    errors.value.push('Preencha todos os campos.')
  }

  // Adicione mais verificações específicas conforme necessário

  if (errors.value.length === 0) {
    console.log('Formulário válido')
    // Aqui você pode adicionar a lógica para enviar o formulário ou realizar outras ações
  }
}
</script>

<template>
  <div class="container">
    <div class="form-contact">
      <div class="photo-character">
        <img src="/img/pt1.jpg" alt="Meu perfil" />
      </div>
      <div class="contacts">
        <div class="title-contact">
          <h3>Contate-me</h3>
        </div>
        <div class="form-containername">
          <div class="form-name">
            <span>Nome</span>
            <input
              type="text"
              name="name"
              class="input-form"
              placeholder="Seu primeiro nome"
              @input="name.value = $event.target.value"
            />
          </div>
          <div class="form-lastname">
            <span>Sobrenome</span>
            <input
              type="text"
              name="lastname"
              class="input-form"
              placeholder="Seu segundo nome"
              @input="lastname.value = $event.target.value"
            />
          </div>
        </div>
        <div class="form-containername">
          <div class="form-name">
            <span>E-mail</span>
            <input
              type="text"
              name="email"
              class="input-form"
              placeholder="Seu endereço de e-mail"
              @input="email.value = $event.target.value"
            />
          </div>
          <div class="form-lastname">
            <span>Telefone</span>
            <input
              type="text"
              name="telephone"
              class="input-form"
              placeholder="Seu número de telefone"
              @input="telephone.value = $event.target.value"
            />
          </div>
        </div>
        <div class="form-containermsg">
          <div class="form-msg">
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              id="txtMessage"
              rows="3"
              placeholder="Sua mensagem aqui"
              class="input-textarea"
              maxlength="150"
              @input="txtMessage.value = $event.target.value"
            ></textarea>
          </div>
        </div>
        <div class="button-container">
          <button class="submit-button" @click.prevent="checkForm" type="sumbmit">
            <span class="arrow-head">Enviar<span class="arrow-line">→</span></span>
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
  background-color: gray;
  border-radius: 9px;
}

.photo-character {
  background-color: gray;
  width: 45%;
  height: 650px;
  border-radius: 10px 0px 0px 10px;
}

.photo-character img {
  width: 100%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
}

.contacts {
  background: #4ecdc4;
  background: -webkit-linear-gradient(to right, #556270, #4ecdc4);
  background: linear-gradient(to right, #556270, #4ecdc4);
  width: 55%;
  border-radius: 0px 10px 10px 0px;
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
  color: black;
  border-bottom: 2px solid #0f2422;
}

.form-containername {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.form-containermsg {
  display: flex;
  width: 86%;
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
  color: black;
  font-size: 1.2em;
}

::-webkit-input-placeholder {
  color: #0f2422;
  font-family: 'Allerta Stencil', sans-serif;
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

.input-textarea {
  border: none;
  border-bottom: 1px solid black;
  height: 70px;
  background-color: transparent;
  font-size: 1em;
  outline: none;
}

.input-textarea:focus {
  border-bottom: 3px solid #0f2422;
}

.submit-button {
  border: none;
  background-color: transparent;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0px auto;
  animation: point 0.5s infinite ease-in;
}

.submit-button .arrow-line {
  width: 100px;
  height: 45px;
}

@keyframes point {
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

.submit-button .arrow-head {
  display: inline-block;
  font-size: 1.8em;
}

textarea {
  resize: none;
}

@media (min-width: 426px) and (max-width: 800px) {
  .container {
    overflow: auto;
    overflow: auto;
  }

  .form-contact {
    flex-direction: column;
    width: 85%;
    margin: 13% auto 0px auto;
    height: 1020px;
    overflow: auto;
  }

  .photo-character {
    width: 100%;
    height: 230px;
  }

  .contacts {
    width: 100%;
  }

  .form-containername {
    flex-direction: column;
    width: 100%;
  }

  .form-name,
  .form-lastname {
    width: 100%;
    margin-bottom: 10px;
  }

  .form-containermsg {
    width: 100%;
  }

  .form-msg {
    width: 100%;
  }

  .input-textarea {
    width: 100%;
  }

  .form-containername .input-form {
    width: 100%;
  }

  .title-contact h3 {
    font-size: 1.9em;
  }
}

@media (min-width: 361px) and (max-width: 425px) {
  .container {
    overflow: auto;
    overflow: auto;
  }

  .form-contact {
    flex-direction: column;
    width: 95%;
    margin: 15% auto 5px auto;
    height: 1000px;
    border-radius: 8px 8px 0px 0px;
  }

  .photo-character {
    width: 100%;
    height: 270px;
    margin-left: auto;
    margin-right: auto;
    background-position: top center;
    background-size: cover;
  }

  .photo-character img {
    border-radius: 8px 8px 0px 0px;
  }

  .contacts {
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    height: 1000px;
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

  .form-containermsg {
    display: flex;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    padding-left: 5px;
  }
}
</style>
