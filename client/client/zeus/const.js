"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ops = exports.ReturnTypes = exports.AllTypesProps = void 0;
exports.AllTypesProps = {
    CreateStudentInput: {},
    Mutation: {
        createStudent: {
            input: "CreateStudentInput"
        }
    },
    Query: {
        Student: {}
    }
};
exports.ReturnTypes = {
    Student: {
        id: "ID",
        class: "Int",
        name: "String"
    },
    Mutation: {
        createStudent: "Student"
    },
    Query: {
        Student: "Student"
    }
};
exports.Ops = {
    query: "Query",
    mutation: "Mutation"
};
