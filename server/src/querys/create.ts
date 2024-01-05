import { PrismaClient } from "@prisma/client";
import { AnsDataProps, QuestionDataProps } from "../types/studentTypes";
const prisma = new PrismaClient()

export const createStudent = async (name: string, std: number) => {
    const student = await prisma.student.create({
        data: {
            name,
            class: std
        }
    })
    if (student) {
        console.log(student)
        return student
    }
    else {
        console.log("error in creation")
    }


}

export const createTeacher = async (name: string, email: string) => {
    const teacher = await prisma.teacher.create({
        data: {
            name,
            email
        }
    })
    if (teacher) {
        return teacher
    }
    else {
        return null
    }
}

export const createPaper = async (questionData:QuestionDataProps[],teacherId:string,std:number) => {
    const paper = await prisma.papers.create({
        data: {
            class: std,
            teacherId,
            questions: {
                createMany: {
                    data:questionData.map((question,index)=>({
                        questionNo:index+1,
                        question:question.question,
                        answer:question.answer
                    }))
                }
            }
        },
        include:{
            questions:true
        }
    })
    return {paper,question:(paper as any).questions}
}
// const ansData: AnsDataProps[] = [{
//     answer: "THere can only be one winner and thats me",
//     questionId: 1
// }, {
//     answer: "THere can only be one winner and thats me",
//     questionId: 2
// }]
export const submitPaper = async(ansData:AnsDataProps[],studentId:string,papersId:number)=>{
    const submittedAnswer = await prisma.submittedPapers.create({
        data:{
            studentId,
            papersId,
            submittedAns:{
                createMany:{
                    data:ansData.map((ans, index) => ({
                        answer:ans.answer,
                        questionId:ans.questionId
                        }))
                }
            }
        },
        include:{
            submittedAns:true
        }
    })
    // console.log(submittedAnswer)
    return { submittedAnswer, answers: (submittedAnswer as any).submittedAns}
}

// submitPaper(ansData,"clqv5z18a0000r2i8qef6kfn1",1)

// const questionsData = [{
//     question: "Whats is your name",
//     answer: "this is the answer"
// },
// {
//     question: "Hello name",
//     answer: "There can only be one winner"
// }]
// createPaper(questionsData)
// createStudent("shreyas",3)
