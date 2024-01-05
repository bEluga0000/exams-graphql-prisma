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
exports.getAllStudents = exports.getSubmittedPaper = exports.getPaper = exports.getTeacherById = exports.getStudentById = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = prisma.student.findUnique({
        where: {
            id
        }
    });
    if (student) {
        return student;
    }
    else {
        return null;
    }
});
exports.getStudentById = getStudentById;
const getTeacherById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield prisma.teacher.findUnique({
        where: {
            id
        }
    });
    if (teacher) {
        return teacher;
    }
    else {
        return null;
    }
});
exports.getTeacherById = getTeacherById;
const getPaper = (std) => __awaiter(void 0, void 0, void 0, function* () {
    const paper = yield prisma.papers.findFirst({
        where: {
            class: std
        },
        include: {
            questions: true
        }
    });
    if (paper) {
        return { paper, question: paper.questions };
    }
    else {
        return null;
    }
});
exports.getPaper = getPaper;
const getSubmittedPaper = (id, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const submittedPaper = yield prisma.submittedPapers.findFirst({
        where: {
            id,
            studentId
        }, include: {
            submittedAns: true
        }
    });
    if (submittedPaper) {
        console.log(submittedPaper);
        return { submittedPaper, answers: submittedPaper.submittedAns };
    }
    else {
        console.log("There can only be one winner lets try again");
    }
});
exports.getSubmittedPaper = getSubmittedPaper;
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield prisma.student.findMany();
    if (students) {
        return students;
    }
});
exports.getAllStudents = getAllStudents;
// getSubmittedPaper("clr0t7ii20001awnr39fz1np3","clqv5z18a0000r2i8qef6kfn1")
