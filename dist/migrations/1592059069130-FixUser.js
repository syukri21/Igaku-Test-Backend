"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixUser1592059069130 = void 0;
class FixUser1592059069130 {
    constructor() {
        this.name = 'FixUser1592059069130';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
    }
}
exports.FixUser1592059069130 = FixUser1592059069130;
//# sourceMappingURL=1592059069130-FixUser.js.map