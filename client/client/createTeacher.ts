import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")
async function createTeacher(name:string,email:string) {
    try
    {
        const teacher = await chain("mutation")({
            createTeacher: [{
                input: {
                    name,
                    email
                }
            }, {
                id: true,
                name: true,
                email: true
            }]
        })
        if(teacher)
        {
            console.log("I am in first condition")
            console.log(teacher)
        }
        else
        {
            throw new Error("SOmething went wrong creating the techer")
        }
    }
    catch(e)
    {
        console.log(e);
    }
    
}
createTeacher("mariyappa","mariyappa@gmail.com")