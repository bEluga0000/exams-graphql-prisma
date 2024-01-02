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
const zeus_1 = require("./zeus");
const chain = (0, zeus_1.Chain)("http://localhost:3000/graphql");
function getStudent(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (id) {
                const student = yield chain("query")({
                    getStudent: [{
                            id: id
                        }, {
                            name: true,
                            class: true
                        }]
                });
                if (student) {
                    console.log(student);
                }
                else {
                    console.log("Error in getting the user");
                }
            }
            else {
                // const students = await chain("query")({
                //     getAllStudents: [
                //         {},
                //         {
                //             name: true,
                //             class: true
                //         }
                //     ]
                // });
                // if (students) {
                //     console.log(students);
                // } else {
                //     console.log("Error in getting all students");
                // }
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
getStudent("clqv8d0t900011j1a68ssoljq");
