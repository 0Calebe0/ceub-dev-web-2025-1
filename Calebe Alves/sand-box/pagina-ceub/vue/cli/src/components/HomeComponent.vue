<template>
    <div>
        <footer id="footer">
            <p>Dono da Empresa: {{ nome }} Olá rapaziada <b>Vue com CLI</b> </p>
        </footer>
    </div>
</template>

<script>
  export default {
    name : "HomeComponent",
    data() {
        return {
            nome : "Calebe Alves"
        }
    }
  }
</script>