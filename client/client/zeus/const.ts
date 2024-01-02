/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	CreateStudentInput:{

	},
	CreateTeacherInput:{

	},
	Mutation:{
		createStudent:{
			input:"CreateStudentInput"
		},
		createTeacher:{
			input:"CreateTeacherInput"
		}
	},
	Query:{
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
	Mutation:{
		createStudent:"Student",
		createTeacher:"Teacher"
	},
	Query:{
		getStudent:"Student",
		getTeacher:"Teacher"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}