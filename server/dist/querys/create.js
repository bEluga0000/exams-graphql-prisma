"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitPaper = exports.createPaper = exports.createTeacher = exports.createStudent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createStudent = (name, std) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield prisma.student.create({
        data: {
            name,
            class: std
        }
    });
    if (student) {
        console.log(student);
        return student;
    }
    else {
        console.log("error in creation");
    }
});
exports.createStudent = createStudent;
const createTeacher = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield prisma.teacher.create({
        data: {
            name,
            email
        }
    });
    if (teacher) {
        return teacher;
    }
    else {
        return null;
    }
});
exports.createTeacher = createTeacher;
const createPaper = (questionData, teacherId, std) => __awaiter(void 0, void 0, void 0, function* () {
    const paper = yield prisma.papers.create({
        data: {
            class: std,
            teacherId,
            questions: {
                createMany: {
                    data: questionData.map((question, index) => ({
                        questionNo: index + 1,
                        question: question.question,
                        answer: question.answer
                    }))
                }
            }
        },
        include: {
            questions: true
        }
    });
    return { paper, question: paper.questions };
});
exports.createPaper = createPaper;
const ansData = [{
        answer: "THere can only be one winner and thats me",
        questionId: 1
    }, {
        answer: "THere can only be one winner and thats me",
        questionId: 2
    }];
const submitPaper = (ansData, studentId, papersId) => __awaiter(void 0, void 0, void 0, function* () {
    const submittedAnswer = yield prisma.submittedPapers.create({
        data: {
            studentId,
            papersId,
            submittedAns: {
                createMany: {
                    data: ansData.map((ans, index) => ({
                        answer: ans.answer,
                        questionId: ans.questionId
                    }))
                }
            }
        },
        include: {
            submittedAns: true
        }
    });
    console.log(submittedAnswer);
    return { submittedAnswer, answers: submittedAnswer.submittedAns };
});
exports.submitPaper = submitPaper;
// submitPaper(ansData,"clqv5z18a0000r2i8qef6kfn1",1)
// const questionsData = [{
//     question: "Whats is your name",
//     answer: "this is the answer"
// },
// {
//     question: "Hello name",
//     answer: "There can only be one winner"
// }]
// createPaper(questionsData)
// createStudent("shreyas",3)
