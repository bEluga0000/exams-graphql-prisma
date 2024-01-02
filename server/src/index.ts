import express from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import * as path from "path"
import { createStudent, createTeacher } from "./querys/create"
import { getAllStudents, getStudentById, getTeacherById } from "./querys/get"
import { StudentProps,TeacherProps } from "./types/studentTypes"
const fs = require("fs")
const schemaString = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf-8');
const schema = buildSchema(schemaString)
const app = express()
const PORT = 3000

const root = {

    getStudent:async ({id}:{id:string},req:any)=>{
        try{

            const student =await getStudentById(id)
            if(student && student.id)
            {
                return { name: student.name, id: student.id, class: student.class }
            }
            else
            {
                throw new Error("student not found")
            }
        }
        catch(e)
        {
            console.log(e)
        }
    },
    getTeacher:async({id}:{id:string},req:any)=>{
        try{
            const teacher = await getTeacherById(id)
            if(teacher && teacher.id)
            {
                return {name:teacher.name,id:teacher.id,email:teacher.email}
            }
            else
            {
                throw new Error("There is a error in getting the teacher")
            }
        }
        catch(e)
        {
            console.log(e)
        }
    },
    // todo need to check how we can send all the data like all the users at  time
    // getAllStudents:async(req:any)=>{
    //     try{
    //         const students = await getAllStudents()
    //         if(students && students.length > 0)
    //         {
    //             return students
    //         }
    //         else
    //         {
    //             return []
    //         }
    //     }
    //     catch(e)
    //     {
    //         console.log(e)
    //     }
    // },
    createStudent:async ({input}:{input:StudentProps},req:any)=>
    {
        console.log(" i am inside the student function")
        try{
            const student =await createStudent(input.name,input.class)
            if (student && student.id) {
                console.log("I am getting student")
                return { name: student.name, id: student.id, class: student.class }
            } else {
                console.log(" i am not getting the student")
                throw new Error("Failed to create student");
            }
            
        }
        catch(e)
        {
            console.log(e)
        }

    },
    createTeacher: async({ input }: { input: TeacherProps},req:any)=>{
        try{
            const teacher = await createTeacher(input.name,input.email)
            if(teacher){
                return {id:teacher.id,email:teacher.email,name:teacher.name}
            }
            else
            {
                throw new Error ("THere is an error in creating the user")
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(PORT,()=>{
    console.log("app is lisenting at http://localhost:3000")
    console.log("graphql querys are listening at http://localhost:3000/graphql")
})