import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './entities/company.schema';
import { FilterQuery, Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ListQueryType } from './dto/list-query';
import { UpdateCompanyDto } from './dto/update-company.dto';

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
    const permalink = listQueryType.permalink;
    const crunchbase_url = listQueryType.crunchbase_url;
    const homepage_url = listQueryType.homepage_url;
    const blog_url = listQueryType.blog_url;
    const blog_feed_url = listQueryType.blog_feed_url;
    const twitter_username = listQueryType.twitter_username;
    const category_code = listQueryType.category_code;
    const number_of_employees = listQueryType.number_of_employees;
    const founded_year = listQueryType.founded_year;
    const founded_month = listQueryType.founded_month;
    const founded_day = listQueryType.founded_day;
    const deadpooled_year = listQueryType.deadpooled_year;
    const deadpooled_month = listQueryType.deadpooled_month;
    const deadpooled_day = listQueryType.deadpooled_day;
    const deadpooled_url = listQueryType.deadpooled_url;
    const tag_list = listQueryType.tag_list;



    if (name) {
        condition.name = {
            $regex: name,
            $options: 'i',
        }
    }

    if (permalink) {
        condition.permalink = {
            $regex: permalink,
            $options: 'i',
        }
    }

    if (crunchbase_url) {
        condition.crunchbase_url = {
            $regex: crunchbase_url,
            $options: 'i',
        }
    }

    if (homepage_url) {
        condition.homepage_url = {
            $regex: homepage_url,
            $options: 'i',
        }
    }

    if (blog_url) {
        condition.blog_url = {
            $regex: blog_url,
            $options: 'i',
        }
    }

    if (blog_feed_url) {
        condition.blog_feed_url = {
            $regex: blog_feed_url,
            $options: 'i',
        }
    }

    if (twitter_username) {
        condition.twitter_username = {
            $regex: twitter_username,
            $options: 'i',
        }
    }   

    if (category_code) {
        condition.category_code = {
            $regex: category_code,
            $options: 'i',
        }
    }   

    if (number_of_employees) {
        condition.number_of_employees = {
            $gte: number_of_employees,
        }
    }

    if (founded_year) {
        condition.founded_year = {
            $gte: founded_year,
        }
    }

    if (founded_month) {
        condition.founded_month = {
            $gte: founded_month,
        }
    }

    if (founded_day) {
        condition.founded_day = {
            $gte: founded_day,
        }
    }

    if (deadpooled_year) {
        condition.deadpooled_year = {
            $gte: deadpooled_year,
        }
    }

    if (deadpooled_month) {
        condition.deadpooled_month = {
            $gte: deadpooled_month,
        }
    }

    if (deadpooled_day) {
        condition.deadpooled_day = {
            $gte:
                deadpooled_day,
        }
    }

    if (deadpooled_url) {
        condition.deadpooled_url = {
            $regex: deadpooled_url,
            $options: 'i',
        }
    }

    if (tag_list) {
        condition.tag_list = {
            $regex: tag_list,
            $options: 'i',
        }
    }



        return this.companyModel.find(condition, {}, {limit: limit, skip: offset}).exec();
    }

    async companyDetail(id: string): Promise<Company> {
        return await this.companyModel.findById(id);
    }

    async updateCompany(id: string, dto: UpdateCompanyDto): Promise<Company> {
        return  this.companyModel.findByIdAndUpdate(id, dto);
    }

    async deleteCompany(id: string): Promise<Company> {
        return await this.companyModel.findByIdAndDelete(id);
    }
}
