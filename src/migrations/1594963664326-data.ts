import {MigrationInterface, QueryRunner} from "typeorm";

export class data1594963664326 implements MigrationInterface {
    name = 'data1594963664326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_type" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "slug" character(16) NOT NULL, "type" character(64) NOT NULL, CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_us" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "subject" character(128) NOT NULL, "description" text NOT NULL, "userId" integer, CONSTRAINT "PK_b61766a4d93470109266b976cfe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "testimonial" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "content" text NOT NULL, "userId" integer, CONSTRAINT "REL_8455ac0da5f4cc082831516abb" UNIQUE ("userId"), CONSTRAINT "PK_e1aee1c726db2d336480c69f7cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "chargeAmount" double precision NOT NULL, "serviceId" integer, "userId" integer, CONSTRAINT "REL_14e015426d3712bffbe65be18f" UNIQUE ("serviceId"), CONSTRAINT "REL_f8e849201da83b87f78c7497dd" UNIQUE ("userId"), CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "firstName" character varying(64) NOT NULL, "lastName" character varying(64) NOT NULL, "age" integer NOT NULL, "email" character(64) NOT NULL, "userTypeId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_29f29dffce2845a1abc901d4e8" UNIQUE ("userTypeId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "homework" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "file" character(128) NOT NULL, "description" text NOT NULL, "name" character(64) NOT NULL, CONSTRAINT "PK_90dbf463ef94040ed137c4fd38d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "name" character(64) NOT NULL, "price" double precision NOT NULL, "image" text NOT NULL, "schedule" json NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "age_range" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "min" integer NOT NULL, "max" integer NOT NULL, CONSTRAINT "PK_4c404ea3863e76f5169b5b1c691" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evidence_gallery" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "image" character(128) NOT NULL, "description" text NOT NULL, "name" character(64) NOT NULL, CONSTRAINT "PK_dec560a96103838f6db742081a1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "features" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "updated" TIMESTAMP WITH TIME ZONE NOT NULL, "name" character(64) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_age_ranges_age_range" ("serviceId" integer NOT NULL, "ageRangeId" integer NOT NULL, CONSTRAINT "PK_378b429716e0fdaa2937d9ecc33" PRIMARY KEY ("serviceId", "ageRangeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6e4751b3f6bf05469e057c6afc" ON "service_age_ranges_age_range" ("serviceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_eed38475298a92eb38a93b5936" ON "service_age_ranges_age_range" ("ageRangeId") `);
        await queryRunner.query(`ALTER TABLE "contact_us" ADD CONSTRAINT "FK_fdc3449ff4d12de09343c2a54fb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "testimonial" ADD CONSTRAINT "FK_8455ac0da5f4cc082831516abb1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_14e015426d3712bffbe65be18f7" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_f8e849201da83b87f78c7497dde" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_29f29dffce2845a1abc901d4e85" FOREIGN KEY ("userTypeId") REFERENCES "user_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_age_ranges_age_range" ADD CONSTRAINT "FK_6e4751b3f6bf05469e057c6afc6" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_age_ranges_age_range" ADD CONSTRAINT "FK_eed38475298a92eb38a93b5936c" FOREIGN KEY ("ageRangeId") REFERENCES "age_range"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_age_ranges_age_range" DROP CONSTRAINT "FK_eed38475298a92eb38a93b5936c"`);
        await queryRunner.query(`ALTER TABLE "service_age_ranges_age_range" DROP CONSTRAINT "FK_6e4751b3f6bf05469e057c6afc6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_29f29dffce2845a1abc901d4e85"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_f8e849201da83b87f78c7497dde"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_14e015426d3712bffbe65be18f7"`);
        await queryRunner.query(`ALTER TABLE "testimonial" DROP CONSTRAINT "FK_8455ac0da5f4cc082831516abb1"`);
        await queryRunner.query(`ALTER TABLE "contact_us" DROP CONSTRAINT "FK_fdc3449ff4d12de09343c2a54fb"`);
        await queryRunner.query(`DROP INDEX "IDX_eed38475298a92eb38a93b5936"`);
        await queryRunner.query(`DROP INDEX "IDX_6e4751b3f6bf05469e057c6afc"`);
        await queryRunner.query(`DROP TABLE "service_age_ranges_age_range"`);
        await queryRunner.query(`DROP TABLE "features"`);
        await queryRunner.query(`DROP TABLE "evidence_gallery"`);
        await queryRunner.query(`DROP TABLE "age_range"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "homework"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "testimonial"`);
        await queryRunner.query(`DROP TABLE "contact_us"`);
        await queryRunner.query(`DROP TABLE "user_type"`);
    }

}
