"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1592044115952 = void 0;
class User1592044115952 {
    constructor() {
        this.name = 'User1592044115952';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
    }
}
exports.User1592044115952 = User1592044115952;
//# sourceMappingURL=1592044115952-User.js.map