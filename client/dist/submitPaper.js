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
const answerTOSubmoit = [{
        answer: "THere can only be one winner and thats me",
        questionId: 1
    }, {
        answer: "THere can only be one winner and thats me",
        questionId: 2
    }];
const submitPaper = (paperId, studentId, answers) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submittedPaper = yield chain("mutation")({
            submitPaper: [{
                    input: {
                        studentId,
                        paperId,
                        answers
                    }
                }, {
                    papersId: true,
                    studentId: true
                }]
        });
        if (submittedPaper) {
            console.log(submittedPaper);
        }
    }
    catch (e) {
        console.log(e);
    }
});
submitPaper(1, "clqv5z18a0000r2i8qef6kfn1", answerTOSubmoit);
