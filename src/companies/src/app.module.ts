import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './companies/company.controller';
import { CompanyService } from './companies/company.service';
import { CompanyModule } from './companies/company.module';
import { CompanySchema } from './companies/entities/company.schema';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the config module globally available -,--->
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // your MongoDB connection string from the .env file :)
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]), 
    CompanyModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class AppModule {}