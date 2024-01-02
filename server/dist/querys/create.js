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
exports.createTeacher = exports.createStudent = void 0;
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
// createStudent("shreyas",3)
