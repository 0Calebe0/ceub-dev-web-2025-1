<template>
    <div class="container">
        <img :src="pathImagem" :alt="banner">
        <button @click="apareceEsconde(), segundometodo()">Aparece/Esconde</button>
    </div>
 </template>
<script>
    export default{
        name:"ImagemComponent",
        data() {
            return {
                imageVisivel : true,
                banner: "valor do alt",
                pathImagem :"https://www.lalamove.com/hubfs/Header_Blog_Bela_Tintas.jpg"
            }
        },
        methods: {
            apareceEsconde() {
                this.imageVisivel = !this.imageVisivel;
            },
            segundometodo(){
                setTimeout(()=>{
                    alert('Segundo Metodo Acionado');
                },2000);
            }

        }
    }
</script>

<style>
    img{
        width: 300px;
        height: auto;
        border: solid 5px darkblue;
        margin: 15px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkgoldenrod;
        
    }
    button{
        padding: 14px;
        font-weight: bold;
        color: darkgreen;
        background: azure;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
    }
    buttton:hover{
        background-color:darkcyan;
        color: aqua;
    }
    .container{
        display: flex;
        flex-direction: column;
        width: 50%;   
        align-items: center;
        margin: 16px;
        padding: 16px;
    }


</style>