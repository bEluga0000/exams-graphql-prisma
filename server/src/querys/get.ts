import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient()
export const getStudentById = async (id:string)=>{
    const student = prisma.student.findUnique({
        where:{
            id
        }
    })
    if(student)
    {
        return student
    }
    else
    {
        return null
    }
}
export const getTeacherById = async(id:string)=>{
    const teacher = await prisma.teacher.findUnique({
        where:{
            id
        }
    })
    if(teacher)
    {
        return teacher
    }
    else
    {
        return null
    }
}
export const getPaper = async(std:number)=>{
    const paper = await prisma.papers.findFirst({
        where:{
            class:std
        },
        include:{
            questions:true
        }
    })
    if(paper)
    {
        
        return {paper,question:(paper as any).questions}
    }
    else
    {
        return null
    }
}

export const getSubmittedPaper = async (id:string,studentId:string)=>
{
    const submittedPaper = await prisma.submittedPapers.findFirst({
        where:{
            id,
            studentId
        },include:{
            submittedAns:true
        }
    })
    if(submittedPaper)
    {
        console.log(submittedPaper)
        return { submittedPaper, answers: (submittedPaper as any).submittedAns}
    }
    else
    {
        console.log("There can only be one winner lets try again")
    }
}
export const getAllStudents = async ()=>{
    const students = await prisma.student.findMany()
    if(students)
    {
        return students
    } 
}

// getSubmittedPaper("clr0t7ii20001awnr39fz1np3","clqv5z18a0000r2i8qef6kfn1")