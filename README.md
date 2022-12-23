# Project setup
1. Install dependencies
```
yarn install
```
2. Build server image:
```
docker build -t server .
```
3. Run server container: 
```
docker run -it -p 3003:3003 --name myserver server
```
4. Pull mysql image: (My device is Macbook M1)
```
docker pull arm64v8/mysql:latest
```
5. Rename mysql image:
```
docker image tag arm64v8/mysql:latest db
```
6. Run mysql image: 
```
docker run -e MYSQL_ROOT_PASSWORD=password --name mydb -v mysql:/var/lib/mysql db
```
7. Create database (In my case: my_sample_db): 
```
docker exec -it mydb bash
mysql -u root -p
```
Then enter: password and execute the below command:
```
create database my_sample_db;
```
8. Create netwotk
```
docker network create mynetwork
```
9. Join myserver and mydb to mynetwork:
```
docker network connect mynetwork myserver
docker network connect mynetwork mydb
```
10. Migrate database
```
docker exec -it myserver bash
yarn prisma migrate dev --name create-table-users
```
11. Enjoy: You can open a browser and type: 
- To get users
```
GET localhost:3003/users
```
- To create a user
```
POST localhost:3003/users
```
# Thanks
This is my sample project to utilize docker knowledge that I've learned in the Azoom VN's trainng course.