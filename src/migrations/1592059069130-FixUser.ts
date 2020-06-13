import {MigrationInterface, QueryRunner} from "typeorm";

export class FixUser1592059069130 implements MigrationInterface {
    name = 'FixUser1592059069130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
    }

}
