import { Chain } from "./zeus";
const chain = Chain(" http://localhost:3000/graphql")
async function createStudent(name:string,std:number)
{
    try{
        const student = await chain("mutation")({
            createStudent:[{
                input:{
                    name:name,
                    class:std
                }},{
                    id: true,
                    name: true,
                }
                
            ]
        })
        if(student)
        {
            console.log(student)
        }
        else
        {
            console.log("Something went wrong")
        }
    }
    catch(e)
    {
        console.log(e)
    }
}

createStudent("shreysa",3)