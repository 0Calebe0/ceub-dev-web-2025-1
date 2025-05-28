const meuAppVue = {
  data() {
    return {
      nome: "Calebe Alves",
      idade: 22,
      inputText: "",
    };
  },
};

Vue.createApp(meuAppVue).mount("#app");
