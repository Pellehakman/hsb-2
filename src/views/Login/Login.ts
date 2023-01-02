
import { defineComponent, ref } from "vue";
import type { Credentials } from '../../models/data'

export default defineComponent({
    name: "Login",
    setup(){
        
      const username = ref('')      
      const password = ref('')

         async function handleSubmit(){
            console.log(username.value, password.value)

          

            let user = {
                username: username.value,
                password: password.value,
            }
          // console.log(user)
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

              console.log(credentialsResult)
              if (credentialsResult.status === 200) {
                localStorage.setItem("user", JSON.stringify(credentialsResult));
                redirect("/home");
              } else {
                alert('you have done bad')
                
              }

             
             

           
    }
    return {
      username,
      password,
      handleSubmit
  }
    }
})