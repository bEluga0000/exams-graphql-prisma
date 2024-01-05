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
	Mutation:{
		createStudent:{
			input:"CreateStudentInput"
		},
		createTeacher:{
			input:"CreateTeacherInput"
		},
		createPaper:{
			input:"CreatePaperInput"
		}
	},
	Query:{
		getPaper:{

		},
		getStudent:{

		},
		getTeacher:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
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
		createPaper:"Paper"
	},
	Query:{
		getPaper:"Paper",
		getStudent:"Student",
		getTeacher:"Teacher"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}