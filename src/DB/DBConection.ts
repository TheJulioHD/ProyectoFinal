import { TypeOrmModule } from '@nestjs/typeorm';

export const Connection = TypeOrmModule.forRoot({
    // type: 'mysql',
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // entities: [User, sale, detailsEntity],
    // synchronize: true,
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [],
    synchronize: true,
  })