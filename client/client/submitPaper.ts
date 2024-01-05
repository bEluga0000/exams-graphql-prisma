import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")
interface AnswerProps{
    answer: string,
    questionId: number
}
const answerTOSubmoit = [{
    answer: "THere can only be one winner and thats me",
    questionId: 1
}, {
    answer: "THere can only be one winner and thats me",
    questionId: 2
}]
const submitPaper =async (paperId:number,studentId:string,answers:AnswerProps[])=>{
    try
    {
        const submittedPaper = await chain("mutation")({
            submitPaper: [{
                input: {
                    studentId,
                    paperId,
                    answers
                }
            }, {
                papersId: true,
                studentId:true
            }]
        })
        if (submittedPaper) {
            console.log(submittedPaper)
        }
    }
    catch(e)
    {
        console.log(e)
    }
   
}
submitPaper(1, "clqv5z18a0000r2i8qef6kfn1",answerTOSubmoit)