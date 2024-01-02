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
const chain = (0, zeus_1.Chain)(" http://localhost:3000/graphql");
function createStudent(name, std) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const student = yield chain("mutation")({
                createStudent: [{
                        input: {
                            name: name,
                            class: std
                        }
                    }, {
                        id: true,
                        name: true,
                    }
                ]
            });
            if (student) {
                console.log(student);
            }
            else {
                console.log("Something went wrong");
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
createStudent("shreysa", 3);
