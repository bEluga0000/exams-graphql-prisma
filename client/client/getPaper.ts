import { Chain } from "./zeus";
const chain = Chain("http://localhost:3000/graphql")

async function getPaper(std:number){
    try
    {
        const paper = await chain("query")({
            getPaper: [{
                std
            }, {
                class: true,
                questions: {
                    questionNo: true,
                    question: true,
                    answer: true,
                },
            }]
        })
        console.dir(paper, { depth: null })
    }
    catch(e)
    {
        console.log(e)
    }
}
getPaper(0)