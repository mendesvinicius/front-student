# Front-end Descomplica 


## Prerequisites 📋 
Commands for using docker in this project

Install Docker and Docker Compose on your machine https://www.docker.com/

## Quick Start 🚀
To use this project it is necessary to perform the following steps:

#### 1º Clone the repository on your machine
```bash
git clone https://github.com/ViniDevs/front-descomplica.git
```

#### 2º Replace .env.example for .env:

###### Inside the project folder, change the .env.example file to .env


#### 3º Mount the image and run
```bash
docker-compose build
```


#### 4º Run the docker-compose
```bash
docker-compose up
```


#### 5º Access the application
```console
http://localhost:3000
```


## --Without Docker 📦

Install node https://nodejs.org/en/

With the node already installed, go to the project root folder and execute the following commands:

### 1º Install dependencies
```bash
yarn install
```

### 2º Run the application
```bash
yarn start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
