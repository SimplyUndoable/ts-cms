include .env

APP_NAME=$(NAME)-api
API_NAME=$(NAME)-api
DB_NAME=$(NAME)-db
SPECS_NAME=$(NAME)-specs

run: run_api

run_app:
	docker run -p $(APP_PORT):$(APP_PORT) -v `pwd`/app:/app -w /app --rm --name $(APP_NAME) node:latest npm start
run_api:
	docker run -p $(API_PORT):$(API_PORT) -v `pwd`/api:/api -w /api --rm --name $(API_NAME) hayd/alpine-deno:latest --allow-net mod.ts
build: build_app
build_app:
	yarn build-app

# DB
db_start:
	docker run -d -p $(DB_PORT):5432 -e POSTGRES_USER=$(DB_USER) -e POSTGRES_PASSWORD=$(DB_PWD) -e POSTGRES_DB=$(NAME) -v `pwd`/data:/var/lib/postgresql/data --rm --name $(DB_NAME) postgres:latest
db_stop:
	docker kill $(DB_NAME)

# SPECS
specs_start:
	docker run -d -p $(SPECS_PORT):8080 -e SWAGGER_JSON=/specs/$(SPECS_INDEX) -v `pwd`/specs:/specs --rm --name $(SPECS_NAME) swaggerapi/swagger-ui
specs_stop:
	docker kill $(SPECS_NAME)
