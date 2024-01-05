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
const questionData = [{
        question: "Whats is your name",
        answer: "this is the answer"
    },
    {
        question: "Hello name",
        answer: "There can only be one winner"
    }];
function createPaper(std, teacherId, questions) {
    return __awaiter(this, void 0, void 0, function* () {
        const paper = yield chain("mutation")({
            createPaper: [{
                    input: {
                        class: std,
                        teacherId,
                        questions
                    }
                }, {
                    class: true,
                    id: true,
                    teacherId: true,
                    questions: {
                        id: true,
                        questionNo: true,
                        answer: true,
                        question: true
                    }
                }]
        });
        console.dir(paper, { depth: null });
    });
}
createPaper(1, "clqwb3tdu0000ru1sy2l94ex0", questionData);
