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
function createTeacher(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teacher = yield chain("mutation")({
                createTeacher: [{
                        input: {
                            name,
                            email
                        }
                    }, {
                        id: true,
                        name: true,
                        email: true
                    }]
            });
            if (teacher) {
                console.log("I am in first condition");
                console.log(teacher);
            }
            else {
                throw new Error("SOmething went wrong creating the techer");
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
createTeacher("mariyappa", "mariyappa@gmail.com");
