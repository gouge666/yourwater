<template>
    <p>{{myAge}}</p>
</template>

<script>

    export default {
        name: "iAm1-1",
        data() {
            return {
                  age: 12,
            }
        },
        components: {},
        mounted() {
            setInterval(()=>{
                this.age++;
            },1000)
        },
        methods: {

        },
        computed: {
            myAge() {
                return this.age+10;
            },
        },
    }
</script>