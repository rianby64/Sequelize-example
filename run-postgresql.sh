docker build -t pg-example-10 -f postgres.Dockerfile . &&
docker run -d --rm --name pg-example-10-container -p 5432:5432 pg-example-10

sleep 2

cd src
npx sequelize db:migrate

cd ..
