import { PrismaClient } from "@prisma/client"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import * as path from "path"
import { createPaper, createStudent, createTeacher, submitPaper } from "./querys/create"
import { getAllStudents, getPaper, getStudentById, getSubmittedPaper, getTeacherById } from "./querys/get"
import { PaperProps, StudentProps,SubmitAnswerProps,TeacherProps } from "./types/studentTypes"
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
    getPaper:async({std}:{std:number},req:any)=>{
        try{
            const paper = await getPaper(std)
            if(paper)
            { 
                return { id: paper.paper.id, class: paper.paper.class, teacherId: paper.paper.teacherId,questions:paper.question}
            }
            else
            {
                throw new Error("THere is something went wrong")
            }
        }
        catch(e)
        {
            console.log(e)
        }
    },
    getSubmitAnswer:async({id,studentId}:{id:string,studentId:string},req:any)=>{
        try{
            const submittedPapers = await getSubmittedPaper(id,studentId)
            if(submittedPapers?.submittedPaper && submittedPapers.answers )
            {
                return { id: submittedPapers.submittedPaper.id, studentId: submittedPapers.submittedPaper.studentId, papersId: submittedPapers.submittedPaper.papersId, submittedAnswers:submittedPapers.answers}
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
    },
    createPaper: async({ input }: { input: PaperProps})=>{
        console.log("i am hitting")
        try{
            const {paper,question} = await createPaper(input.questions,input.teacherId,input.class)
            if(paper && question)
            {
                return { id: paper.id, teacherId: paper.teacherId, class: paper.class, questions:question}
            }
            else
            {
                console.log("Either paper or question is missing");
            }
        }
        catch(e)
        {
            console.log(e)
        }
    },
    submitPaper: async({ input }: { input: SubmitAnswerProps})=>{
        console.log("i am hitting")
        try{
            const {submittedAnswer,answers} = await submitPaper(input.answers,input.studentId,input.paperId)
            if(submittedAnswer && answers)
            {
                console.log(submittedAnswer,answers)
                return { id: submittedAnswer.id, studentId: submittedAnswer.studentId, papersId: submittedAnswer.papersId}
            }
            else
            {
                console.log("something wernt wrong")
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