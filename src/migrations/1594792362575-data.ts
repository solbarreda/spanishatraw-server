import {MigrationInterface, QueryRunner} from "typeorm";

export class data1594792362575 implements MigrationInterface {
    name = 'data1594792362575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "firstName" character varying(64) NOT NULL, "lastName" character varying(64) NOT NULL, "age" integer NOT NULL, "email" character(64) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
