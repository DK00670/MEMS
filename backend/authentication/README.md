add database details e.g. postgresql db to .env (to be kept private)

local:
can be run with uvicorn main:app --reload
on localhost:8000

docker:
to run dockerised app through dockerfile
ensure containerised instance of database and fastapi container are both on the same docker network
and then run relevant docker commands.