import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDropletsTable1760471297514 implements MigrationInterface {
  name = 'CreateDropletsTable1760471297514';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`droplets\` (\`id\` int NOT NULL AUTO_INCREMENT, \`originalFilename\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`droplets\``);
  }
}
