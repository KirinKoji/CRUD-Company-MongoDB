import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './entities/company.schema';
import { FilterQuery, Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ListQueryType } from './dto/list-query';

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name)
        private readonly companyModel: Model<CompanyDocument>
    ) {}

    create(createCompanyDto: CreateCompanyDto) {
      return this.companyModel.create(createCompanyDto);
    }

    async findAll(listQueryType: ListQueryType): Promise<Company[]> {
        const condition: FilterQuery<CompanyDocument> = {};

    const limit = listQueryType.limit || 15;
    const offset = listQueryType.offset || 0;
    const name = listQueryType.name;


    if (name) {
        condition.name = {
            $regex: name,
            $options: 'i',
        }
    }

        return this.companyModel.find(condition, {}, {limit: limit, skip: offset}).exec();
    }
}
