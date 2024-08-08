import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.schema';
import { ListQueryType } from './dto/list-query';

@Controller('Company')
export class CompanyController {
    constructor( private readonly companyService: CompanyService) {}


    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.create(createCompanyDto);
    }

    @Get()
    async findAll(@Query() listQuery: ListQueryType): Promise<Company[]> {
        return this.companyService.findAll(listQuery);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Company> {
        return this.companyService.companyDetail(id);
    }
}   
