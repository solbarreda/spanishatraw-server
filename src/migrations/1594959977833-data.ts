import {MigrationInterface, QueryRunner} from "typeorm";

export class data1594959977833 implements MigrationInterface {
    name = 'data1594959977833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "testimonial" DROP CONSTRAINT "FK_8455ac0da5f4cc082831516abb1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_184050ac521a7dd600507fdcc9c"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6b4185bb3149bf87d16655111c2"`);
        await queryRunner.query(`ALTER TABLE "homework" DROP CONSTRAINT "FK_1788db2fdc321f2593a04b53d2f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_184050ac521a7dd600507fdcc9c"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "testimonialId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_6b4185bb3149bf87d16655111c2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "invoiceId"`);
        await queryRunner.query(`ALTER TABLE "homework" DROP CONSTRAINT "REL_1788db2fdc321f2593a04b53d2"`);
        await queryRunner.query(`ALTER TABLE "homework" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "evidence_gallery" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "evidence_gallery" ADD "image" character(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "testimonial" ADD CONSTRAINT "FK_8455ac0da5f4cc082831516abb1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "testimonial" DROP CONSTRAINT "FK_8455ac0da5f4cc082831516abb1"`);
        await queryRunner.query(`ALTER TABLE "evidence_gallery" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "evidence_gallery" ADD "image" character(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "homework" ADD "serviceId" integer`);
        await queryRunner.query(`ALTER TABLE "homework" ADD CONSTRAINT "REL_1788db2fdc321f2593a04b53d2" UNIQUE ("serviceId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "invoiceId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_6b4185bb3149bf87d16655111c2" UNIQUE ("invoiceId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "testimonialId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_184050ac521a7dd600507fdcc9c" UNIQUE ("testimonialId")`);
        await queryRunner.query(`ALTER TABLE "homework" ADD CONSTRAINT "FK_1788db2fdc321f2593a04b53d2f" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6b4185bb3149bf87d16655111c2" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_184050ac521a7dd600507fdcc9c" FOREIGN KEY ("testimonialId") REFERENCES "testimonial"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "testimonial" ADD CONSTRAINT "FK_8455ac0da5f4cc082831516abb1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
