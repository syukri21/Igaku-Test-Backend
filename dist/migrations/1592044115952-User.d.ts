import { MigrationInterface, QueryRunner } from "typeorm";
export declare class User1592044115952 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
