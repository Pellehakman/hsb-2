import { defineComponent } from "vue";
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
export default defineComponent({
    name: "Home",
    setup(){
        const router = useRouter()
            const auth = sessionStorage.getItem('user')
            if (auth) {
            } else {
              router.push({ path: '/' })
            }








            
            const todayDate = ref(new Date()).value;
            const thisDayDate = ref(format(todayDate, "E d MMMM")).value;
            
            
            const weekStartDate = startOfWeek(todayDate);
            const daysInMonth = getDaysInMonth(todayDate);
            const daysMonth = [];
            const DateChoice = ref(thisDayDate).value;
            const TimeChoice = ref('');
        
            for (let day = 0; day < daysInMonth; day++) {
              daysMonth.push(format(addDays(weekStartDate, day), "E d MMMM"));
            }
            const findDates = () => {
                //   if (DateChoice === "Thu 29 December") {
                    console.log(DateChoice);
                //   }
                }
            const submit: (e: any) => void = (e: any) => {
              console.log(DateChoice);
              console.log(TimeChoice.value);
            };
        
            
        
            return {
              daysMonth,
              TimeChoice,
              submit,
              DateChoice,
              todayDate,
              findDates
            };
          }
        });
        