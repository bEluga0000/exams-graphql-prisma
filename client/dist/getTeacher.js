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
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teacher = yield chain("query")({
                getTeacher: [{
                        id
                    }, {
                        id: true,
                        name: true,
                        email: true
                    }]
            });
            if (teacher) {
                console.log(teacher);
            }
            else {
                throw new Error("There is a error in getting error");
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
getTeacherById("clqwb17x70000qv2bmam8i9sv");
