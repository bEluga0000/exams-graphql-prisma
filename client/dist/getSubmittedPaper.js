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
const getSubmittedAns = (id, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submittedAnswer = yield chain("query")({
            getSubmitAnswer: [{
                    id,
                    studentId
                }, {
                    papersId: true,
                    studentId: true,
                    submittedAnswers: {
                        answer: true,
                        questionId: true
                    }
                }]
        });
        if (submittedAnswer) {
            console.log(submittedAnswer);
        }
    }
    catch (e) {
        console.log(e);
    }
});
getSubmittedAns("clr0t7ii20001awnr39fz1np3", "clqv5z18a0000r2i8qef6kfn1");
