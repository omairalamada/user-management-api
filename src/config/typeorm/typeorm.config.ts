import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
ConfigModule.forRoot()

//Dynamic condition for ssl
const srcDir = join(__dirname, '../..');

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'user-managementdb',
            entities: [`${srcDir}/modules/*.entity.{ts,js}`],
            synchronize: false,
            autoLoadEntities: true
        }
    }
}
