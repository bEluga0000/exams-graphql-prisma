"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ops = exports.ReturnTypes = exports.AllTypesProps = void 0;
exports.AllTypesProps = {
    CreateStudentInput: {},
    CreateTeacherInput: {},
    CreatePaperInput: {
        questions: "QuestionInput"
    },
    QuestionInput: {},
    Mutation: {
        createStudent: {
            input: "CreateStudentInput"
        },
        createTeacher: {
            input: "CreateTeacherInput"
        },
        createPaper: {
            input: "CreatePaperInput"
        }
    },
    Query: {
        getPaper: {},
        getStudent: {},
        getTeacher: {}
    }
};
exports.ReturnTypes = {
    Teacher: {
        id: "ID",
        email: "String",
        name: "String"
    },
    Student: {
        id: "ID",
        class: "Int",
        name: "String"
    },
    Question: {
        id: "ID",
        questionNo: "Int",
        question: "String",
        answer: "String"
    },
    Paper: {
        id: "ID",
        class: "Int",
        teacherId: "String",
        questions: "Question"
    },
    Mutation: {
        createStudent: "Student",
        createTeacher: "Teacher",
        createPaper: "Paper"
    },
    Query: {
        getPaper: "Paper",
        getStudent: "Student",
        getTeacher: "Teacher"
    }
};
exports.Ops = {
    query: "Query",
    mutation: "Mutation"
};
