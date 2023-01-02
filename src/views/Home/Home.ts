import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    setup(){


        useEffect(() => {
            const auth = localStorage.getItem('user')
            if (auth) {
              navigate('/admin')
              setIsAdminView(true)
            } else {
              navigate('/login')
            }
          }, [])

    }
})