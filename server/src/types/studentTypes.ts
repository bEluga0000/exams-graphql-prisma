export interface StudentProps{
    id?: string
    class:number
    name:string
}
export interface TeacherProps{
    id?:string,
    email:string,
    name:string
}
export interface QuestionDataProps{
    question:string,
    answer:string
}
export interface PaperProps{
    class:number,
    teacherId:string,
    questions:QuestionDataProps[]
}
export interface AnsDataProps{
    answer:string,
    questionId:number
}
export interface SubmitAnswerProps{
    studentId: string,
    paperId: number,
    answers:AnsDataProps[]
}