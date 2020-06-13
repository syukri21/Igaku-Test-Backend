import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1592042244034 implements MigrationInterface {
    name = 'AddUser1592042244034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `task` varchar(255) NOT NULL, `status` tinyint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_1e982e43f63a98ad9918a86035c` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_1e982e43f63a98ad9918a86035c`");
        await queryRunner.query("DROP TABLE `todo`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
