import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")
async function getTeacherById(id:string) {
    try
    {
        const teacher = await chain ("query")({
            getTeacher:[{
                id
            },{
                id:true,
                name:true,
                email:true
            }]
        })
        if(teacher)
        {
            console.log(teacher)
        }
        else{
            throw new Error ("There is a error in getting error")
        }
    }
    catch(e)
    {
        console.log(e)
    }
}
getTeacherById("clqwb17x70000qv2bmam8i9sv")