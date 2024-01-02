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
export const getAllStudents = async ()=>{
    const students = await prisma.student.findMany()
    if(students)
    {
        return students
    } 
}