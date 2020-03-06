FROM postgres:10

RUN apt-get update
RUN apt-get -y install postgresql-10-pgtap postgresql-contrib

ENV POSTGRES_PASSWORD="postgres"
EXPOSE 5432

RUN echo "create user example with password 'password'; create database \"dbexample\" owner example; alter role example superuser;" > /docker-entrypoint-initdb.d/boot.sql
