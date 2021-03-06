"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const todos_module_1 = require("./todos/todos.module");
const typeorm_2 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_2.TypeOrmModule.forRoot({}), todos_module_1.TodosModule, users_module_1.UsersModule, auth_module_1.AuthModule],
    }),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map