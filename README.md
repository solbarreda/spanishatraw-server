# Spanish ATRAW Server

## Dependencies

- Install typescript & ts-node as global dependencies
  - `npm install -g typescript ts-node`

## Commands

- Run server locally:

  - `npm run dev`

- Generate migration (SQL):
  - `npm run makemigrations`
- Execute migrations:
  - `npm run migrate`
- Create empty migration:
  - `npm run createmigration -- <migration_name>`
- Revert migrations:
  - `npm run revertsmigrate`
- Show migrations plan: 
  -`npm run showmigrations`
