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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const crud_1 = require("@nestjsx/crud");
const todo_entity_1 = require("./entity/todo.entity");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const jwt_auth_guard_1 = require("./../auth/jwt-auth.guard");
const delete_todo_dto_1 = require("./dto/delete-todo.dto");
const edit_todo_dto_1 = require("./dto/edit-todo.dto");
let TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    getAllTodo(req) {
        const { id } = req.user;
        return this.todosService.findAll(id);
    }
    createOne(body, req) {
        return this.todosService.createOne(body, req.user);
    }
    deleteOneOrMany(body) {
        return this.todosService.deleteOneOrMany(body.ids);
    }
    editOne(body) {
        return this.todosService.editOne(body);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getAllTodo", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodo, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "createOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_todo_dto_1.DeleteDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "deleteOneOrMany", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_todo_dto_1.EditDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "editOne", null);
TodosController = __decorate([
    crud_1.Crud({
        model: {
            type: todo_entity_1.Todo,
        },
    }),
    common_1.Controller('todos'),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map