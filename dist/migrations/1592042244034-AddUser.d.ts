import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUser1592042244034 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
