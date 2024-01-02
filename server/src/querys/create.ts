import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const createStudent =async (name:string,std:number)=>{
    const student = await prisma.student.create({
        data:{
            name,
            class:std
        }
    })
    if(student)
    {
        console.log(student)
        return student
    }
    else
    {
        console.log("error in creation")
    }
    
    
}

export const createTeacher = async(name:string,email:string)=>{
    const teacher = await prisma.teacher.create({
        data:{
            name,
            email
        }
    })
    if(teacher){
        return teacher
    }
    else
    {
        return null
    }
}
// createStudent("shreyas",3)
