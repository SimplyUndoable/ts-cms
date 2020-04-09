include .env

KNEX=./api/node_modules/knex/bin/cli.js --knexfile ./api/knexfile.ts
KNEX_MIGRATE=$(KNEX) migrate:
KNEX_SEED=$(KNEX) seed:

APP_NAME=$(NAME)-api
API_NAME=$(NAME)-api
DB_NAME=$(NAME)-db
SPECS_NAME=$(NAME)-specs

run: run_api

run_app:
	docker run -p $(APP_PORT):$(APP_PORT) -v `pwd`/app:/app -w /app --rm --name $(APP_NAME) node:latest npm start
run_api:
	docker run -p $(API_PORT):$(API_PORT) -v `pwd`/api:/api -w /api --rm --name $(API_NAME) node:latest npm start
migrate:
	$(KNEX_MIGRATE)latest
make_migration_%:
	$(KNEX_MIGRATE)make $*
rollback:
	$(KNEX_MIGRATE)rollback
seed:
	$(KNEX_SEED)run
make_seed_%:
	$(KNEX_SEED)make $*
db_start:
	docker run -d -p $(DB_PORT):5432 -e POSTGRES_USER=$(DB_USER) -e POSTGRES_PASSWORD=$(DB_PWD) -e POSTGRES_DB=$(NAME) -v `pwd`/data:/var/lib/postgresql/data --rm --name $(DB_NAME) postgres:latest
db_stop:
	docker kill $(DB_NAME)
specs_start:
	docker run -d -p $(SPECS_PORT):8080 -e SWAGGER_JSON=/specs/$(SPECS_INDEX) -v `pwd`/specs:/specs --rm --name $(SPECS_NAME) swaggerapi/swagger-ui
specs_stop:
	docker kill $(SPECS_NAME)
