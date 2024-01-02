import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")
async function getStudent(id?:string)
{
    try{
        if (id) {
            const student = await chain("query")({
                getStudent: [{
                    id: id
                }, {
                    name:true,
                    class:true
            }]
            })
            if(student)
            {
                console.log(student)
            }
            else
            {
                console.log("Error in getting the user")
            }
        }
        else
        {
            // const students = await chain("query")({
            //     getAllStudents: [
            //         {},
            //         {
            //             name: true,
            //             class: true
            //         }
            //     ]
            // });
            // if (students) {
            //     console.log(students);
            // } else {
            //     console.log("Error in getting all students");
            // }
        }
    }
    catch(e){
        console.log(e)
    }
    
}
getStudent("clqv8d0t900011j1a68ssoljq")