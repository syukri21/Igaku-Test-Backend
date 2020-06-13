import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodo1592033220999 implements MigrationInterface {
    name = 'AddTodo1592033220999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`todoId` int NOT NULL AUTO_INCREMENT, `task` varchar(255) NOT NULL, `status` tinyint NOT NULL, PRIMARY KEY (`todoId`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
