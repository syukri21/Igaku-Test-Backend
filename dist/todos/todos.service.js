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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./entity/todo.entity");
const typeorm_2 = require("typeorm");
let TodosService = class TodosService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    findAll(id) {
        return this.todoRepository.find({ userId: id });
    }
    async createOne(body, user) {
        const todo = this.todoRepository.create(body);
        todo.user = user;
        todo.status = true;
        await this.todoRepository.save(todo);
        return {
            message: 'success',
        };
    }
    async deleteOneOrMany(ids) {
        if (ids.length <= 0) {
            throw new common_1.HttpException('no ids', common_1.HttpStatus.BAD_REQUEST);
        }
        const deleteAll = ids.map(id => this.todoRepository.delete(id));
        await Promise.all(deleteAll);
        return {
            message: 'success',
        };
    }
    async editOne(todo) {
        const oldTodo = await this.todoRepository.findOne(todo.id);
        if (!oldTodo) {
            throw new common_1.HttpException('Doesnt Exist Todo', common_1.HttpStatus.BAD_REQUEST);
        }
        if (todo.task)
            oldTodo.task = todo.task;
        if (todo.status === false || todo.status === true)
            oldTodo.status = todo.status;
        await this.todoRepository.save(oldTodo);
        return {
            message: 'success',
            data: oldTodo,
        };
    }
};
TodosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map