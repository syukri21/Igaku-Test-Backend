import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodo1592033344791 implements MigrationInterface {
    name = 'AddTodo1592033344791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`todoId` int NOT NULL AUTO_INCREMENT, `task` varchar(255) NOT NULL, `status` tinyint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`todoId`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
