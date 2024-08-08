import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.schema';
import { ListQueryType } from './dto/list-query';
import { UpdateCompanyDto } from './dto/update-company.dto';

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

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateCompanyDto): Promise<Company> {
        const updateCompany = await this.companyService.updateCompany(id, dto);
        
        if (!updateCompany) {
            throw new Error('Company not found');
        }
        return updateCompany;
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Company> {
        return this.companyService.deleteCompany(id);
    }
}   
