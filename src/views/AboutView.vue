<script setup></script>

<template>
  <div class="container-about">
    <div class="header-perfil">
      <div class="perfil-icon">
        <img src="/img/icone_perfil2.png" alt="" />
      </div>
      <div class="title-perfil"><h5>PERFIL</h5></div>
    </div>
    <div class="about-me">
      <div class="my-image"></div>
      <div class="name-developer">
        <h4 class="my-name">
          Adriano <br />
          Ribeiro
        </h4>
        <p class="my-profession">
          <i
            >Fullstack Developer <br />
            Since 2022</i
          >
        </p>
      </div>
      <div class="register">
        <div class="input-group mb-3 w-100 shadow">
          <span class="input-group-text p-1 fw-bold field-name" id="inputGroup-sizing-default"
            >Nome:
          </span>
          <input
            type="text"
            class="form-control p-2 w-75 content-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Adriano Neves Ribeiro"
            readonly
          />
        </div>
        <div class="input-group mb-3 w-100 shadow">
          <span class="input-group-text p-1 fw-bold field-name" id="inputGroup-sizing-default"
            >Idade:
          </span>
          <input
            type="text"
            class="form-control p-2 w-75 content-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="38 anos"
            readonly
          />
        </div>
        <div class="input-group mb-3 w-100 shadow">
          <span class="input-group-text p-1 fw-bold field-name" id="inputGroup-sizing-default"
            >Endereço:
          </span>
          <input
            type="text"
            class="form-control p-2 content-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Contagem(MG)-Brasil"
            readonly
          />
        </div>
        <div class="input-group mb-3 w-100 shadow">
          <span class="input-group-text p-1 fw-bold field-name" id="inputGroup-sizing-default"
            >Família:
          </span>
          <input
            type="text"
            class="form-control p-2 content-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Esposa e dois filhos"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="header-resume">
      <div class="perfil-icon">
        <img src="/img/icon-book.png" alt="" class="w-75" />
      </div>
      <div class="title-perfil"><h5>CURRÍCULO</h5></div>
    </div>
    <div class="resume shadow p-2">
      <div class="experience h-100 d-flex aling-items-center flex-column">
        <div class="grade-title w-50 p-1">
          <h4 class="text-center text-shadow-lg font-title-graduation">Graduações</h4>
        </div>
        <div class="university w-100 m-1 mt-3 mb-3 shadow-sm">
          <p class="text-center font-principal">
            Bacharelado em Sistema de Informação na Faculdade Estácio de Sá
          </p>
          <p class="text-center font-principal">em 2022</p>
        </div>
        <div class="grade-title w-50 p-1">
          <h4 class="text-center text-shadow-lg font-title-graduation">Experiências</h4>
        </div>
        <div class="university w-100 m-1 mt-3 mb-2 shadow-sm">
          <p class="text-center p-1 font-principal">
            MCDONALD'S - Gerente de Plantão e de depósito - 2005 a 2010
          </p>
        </div>
        <div class="university w-100 m-1 mt-1 mb-3 shadow-sm">
          <p class="text-center font-principal">
            LOJAS REDE - Subgerente de Loja até 2022 e Desenvolvedor de Software de 2022 até o
            momento.
          </p>
        </div>
      </div>
      <div class="my-skills h-100 d-flex align-itens-center flex-column">
        <div class="grade-title w-50 p-1">
          <h4 class="text-center text-shadow-lg font-title-graduation">Skills</h4>
        </div>
        <div class="skills-content w-75">
          <div class="skill-one w-100">
            <label for="">HTML/CSS</label>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 20px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                style="width: 95%; background-color: #6d8786"
              >
                95%
              </div>
            </div>
          </div>
          <div class="skill-one w-100">
            <label for="">JAVASCRIPT</label>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 20px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                style="width: 75%; background-color: #6d8786"
              >
                75%
              </div>
            </div>
          </div>
          <div class="skill-one w-100">
            <label for="">C#/.NET/APS.NET</label>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 20px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                style="width: 70%; background-color: #6d8786"
              >
                70%
              </div>
            </div>
          </div>
          <div class="skill-one w-100">
            <label for="">SQL-ORACLE</label>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 20px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                style="width: 85%; background-color: #6d8786"
              >
                85%
              </div>
            </div>
          </div>
          <div class="skill-one w-100">
            <label for="">VUE.JS 3</label>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 20px"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                style="width: 70%; background-color: #6d8786"
              >
                70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.about-me {
  display: flex;
  align-items: center;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  transform: translateY(-17px);
  height: 240px;
  padding: 8px;
}

.my-skills {
  width: 50%;
}

.my-image {
  background-image: url('../img/photoperfil0.jpg');
  width: 200px;
  height: 190px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
}

.name-developer {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.my-name {
  font-size: 3em;
  font-family: 'Allerta Stencil', sans-serif;
  text-align: center;
}

.field-name {
  width: 100px;
}

.my-profession {
  font-family: 'Allerta Stencil', sans-serif;
  text-align: center;
  font-size: 0.8em;
}

.resume {
  height: 300px;
  background-color: white;
  width: 88%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grade-title {
  background-color: #8cede8;
  height: 35px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
}

.university {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: 5px;
}

label {
  font-size: 0.7em;
  font-weight: bold;
  font-family: 'Allerta Stencil', sans-serif;
}

.font-principal {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 0.9em;
}

.font-title-graduation {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 1.4em;
}

.header-perfil,
.header-resume {
  width: 20%;
  height: 8%;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 3px;
  transform: translateX(-65px);
}

.perfil-icon {
  margin-right: 2px;
  background-color: #6d8786;
  width: 30%;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-perfil img {
  width: 100%;
  border-radius: 8px 0px 0px 8px;
}

.title-perfil {
  background-color: #6d8786;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 0px 8px 8px 0px;
}

.header-perfil h5,
.header-resume h5 {
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 1.7em;
  text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.container-about {
  width: 60%;
  height: 70vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
  /* background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */
  background: #4ecdc4;
  background: -webkit-linear-gradient(to right, #556270, #4ecdc4);
  background: linear-gradient(to right, #556270, #4ecdc4);
  border-radius: 5px;
}

.grade-title {
  background-color: #8cede8;
  height: 35px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

.skills-content {
  margin-left: 50px;
}

.register {
  width: 55%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2%;
}

.experience {
  width: 50%;
}

@media (min-width: 361px) and (max-width: 425px) {
  .container-about {
    width: 90%;
    height: 100vh;
    margin-top: 75px;
    overflow-y: auto;
  }

  .header-perfil,
  .header-resume {
    width: 60%;
    height: 6%;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-radius: 3px;
    transform: translateX(0px);
  }

  .header-resume {
    margin-top: -25px;
  }

  .perfil-icon {
    width: 22%;
  }

  .header-perfil h5,
  .header-resume h5 {
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 1.3em;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
  }

  .about-me {
    flex-direction: column;
    width: 100%;
    transform: translateY(0px);
    height: 630px;
    overflow-y: auto;
  }

  .my-image {
    width: 200px;
    height: 200px;
  }

  .name-developer {
    width: 100%;
    height: 150px;
  }

  .register {
    width: 100%;
    height: 290px;
    margin-left: 0px;
    padding-left: 2%;
  }

  .field-name {
    width: 65px;
    font-size: 0.8em;
  }

  .resume {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    height: 800px;
  }

  .experience {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .grade-title {
    width: 100% !important;
  }

  .university {
    width: 100% !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .my-skills {
    width: 100%;
    margin-top: -100px;
  }

  .skills-content {
    margin-left: 0px;
    width: 100% !important;
  }
}
</style>
