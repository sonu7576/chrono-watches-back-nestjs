import { Module } from '@nestjs/common';
import { ConfigModule ,ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { WatchesModule } from './watches/watches.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
      JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        }),
      }),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      UserModule, 
      WatchesModule,
    ],
  })
export class AppModule {}





// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'),
//         signOptions: {
//           expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
//         },
//       }),
//     }),
//     MongooseModule.forRoot(process.env.MONGODB_URI),
//     UserModule, 
//     WatchesModule,
//   ],
// })
// export class AppModule {}