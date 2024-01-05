import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")

interface QuestionDataProps {
    question: string,
    answer: string
}
const questionData = [{
    question: "Whats is your name",
    answer: "this is the answer"
},
{
    question: "Hello name",
    answer: "There can only be one winner"
}]
async function createPaper(std: number, teacherId: string, questions: QuestionDataProps[]) {
    const paper = await chain("mutation")({
        createPaper: [{
            input: {
                class: std,
                teacherId,
                questions
            }
        }, {
            class:true,
            id:true,
            teacherId:true,
            questions:{
                id:true,
                questionNo:true,
                answer:true,
                question:true
            }
        }]
    })
    console.dir(paper, { depth: null })
}
createPaper(1, "clqwb3tdu0000ru1sy2l94ex0", questionData)