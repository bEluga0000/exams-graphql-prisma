/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	CreateStudentInput:{

	},
	CreateTeacherInput:{

	},
	CreatePaperInput:{
		questions:"QuestionInput"
	},
	QuestionInput:{

	},
	SubmitPaperInput:{
		answers:"SubAnswerInput"
	},
	SubAnswerInput:{

	},
	Mutation:{
		createStudent:{
			input:"CreateStudentInput"
		},
		createTeacher:{
			input:"CreateTeacherInput"
		},
		createPaper:{
			input:"CreatePaperInput"
		},
		submitPaper:{
			input:"SubmitPaperInput"
		}
	},
	Query:{
		getPaper:{

		},
		getStudent:{

		},
		getTeacher:{

		},
		getSubmitAnswer:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	AnswerPaper:{
		id:"ID",
		studentId:"String",
		papersId:"Int",
		submittedAnswers:"SubmittedAnswer"
	},
	SubmittedAnswer:{
		id:"ID",
		answer:"String",
		questionId:"Int",
		SubmitedPaperId:"String"
	},
	Teacher:{
		id:"ID",
		email:"String",
		name:"String"
	},
	Student:{
		id:"ID",
		class:"Int",
		name:"String"
	},
	Question:{
		id:"ID",
		questionNo:"Int",
		question:"String",
		answer:"String"
	},
	Paper:{
		id:"ID",
		class:"Int",
		teacherId:"String",
		questions:"Question"
	},
	Mutation:{
		createStudent:"Student",
		createTeacher:"Teacher",
		createPaper:"Paper",
		submitPaper:"AnswerPaper"
	},
	Query:{
		getPaper:"Paper",
		getStudent:"Student",
		getTeacher:"Teacher",
		getSubmitAnswer:"AnswerPaper"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}