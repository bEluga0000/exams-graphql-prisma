"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ops = exports.ReturnTypes = exports.AllTypesProps = void 0;
exports.AllTypesProps = {
    CreateStudentInput: {},
    CreateTeacherInput: {},
    Mutation: {
        createStudent: {
            input: "CreateStudentInput"
        },
        createTeacher: {
            input: "CreateTeacherInput"
        }
    },
    Query: {
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
    Mutation: {
        createStudent: "Student",
        createTeacher: "Teacher"
    },
    Query: {
        getStudent: "Student",
        getTeacher: "Teacher"
    }
};
exports.Ops = {
    query: "Query",
    mutation: "Mutation"
};
