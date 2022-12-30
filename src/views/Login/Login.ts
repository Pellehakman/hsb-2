import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Login",
    setup(){

        const username = ref('')
        const password = ref('')
        

         function handleSubmit(){
            console.log(username.value, password.value)
           
    }
        return {
            username,
            password,
            handleSubmit
        }
    }
})