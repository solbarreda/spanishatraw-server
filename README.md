# Spanish ATRAW Server

## Dependencies

- Install typescript & ts-node as global dependencies
  - `npm install -g typescript ts-node`

## Commands

- Run server locally:
  - `npm run dev`

### Migrations

 `Remember to delete the 'dist' folder before any migration related command.`

- Generate migration (SQL):
  - `npm run makemigrations`
- Execute migrations:
  - `npm run migrate`
- Create empty migration:
  - `npm run createmigration -- <migration_name>`
- Revert migrations:
  - `npm run revertsmigrate`
- Show migrations plan:
  - `npm run showmigrations`
