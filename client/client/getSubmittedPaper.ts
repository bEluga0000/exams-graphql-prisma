import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")

const getSubmittedAns = async(id:string,studentId:string)=>{
    try
    {
        const submittedAnswer = await chain("query")({
            getSubmitAnswer: [{
                id,
                studentId
            }, {
                papersId: true,
                studentId: true,
                submittedAnswers: {
                    answer: true,
                    questionId: true
                }
            }]
        })
        if(submittedAnswer)
        {
            console.log(submittedAnswer)
        }
    }
    catch(e)
    {
        console.log(e)
    }
    
}
getSubmittedAns("clr0t7ii20001awnr39fz1np3","clqv5z18a0000r2i8qef6kfn1")