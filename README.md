# MiniURL
## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v20 or higher recommended)
- **npm** (v8 or higher) or **yarn**
- **Angular CLI** (v18 or higher):
- **Docker Desktop**

## Client:
- cd client
- npm i

## Server:
- cd server
- npm i

## Database Setup:
- create db with name **mini-url**
- create schema **core**
- run the sql script present in server/src/migrations

## Redis:
- pull this image redis/redis-stack
- run this image in container with default port 6379 and exposed to 8001

## Start projecct:


**Client**:
- cd client
- npm run start


**Server**:
- cd server
- npm run start
 
