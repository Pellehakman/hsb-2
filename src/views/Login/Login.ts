import { defineComponent, ref } from "vue";
import type { Credentials } from '../../models/data'

export default defineComponent({
    name: "Login",
    setup(){
        
        
         async function handleSubmit(){
            // console.log(username.value, password.value)

            const username = ref('')      
            const password = ref('')

            let user: Credentials = {
                username: username.value,
                password: password.value,
            };
          
              //skickar user till /api/credentials
              const sendingCredentials = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
              };
          
              const credentialsResult = await fetch(
                "/api/credentials",
                sendingCredentials
              );
              if (credentialsResult.status === 200) {
                localStorage.setItem("user", JSON.stringify(credentialsResult));
                
              } else {
                //visar användaren om den skrivit in fel användarnamn/lösenord
                
              }




           
    }
        return {
            username,
            password,
            handleSubmit
        }
    }
}