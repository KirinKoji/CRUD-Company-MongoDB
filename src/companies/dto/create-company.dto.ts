import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateCompanyDto {

    @IsString()
    name: string;

    @IsString()
    permalink: string;

    @IsString()
    crunchbase_url: string;

    @IsString()
    homepage_url: string;

    @IsString()
    blog_url: string;

    @IsString()
    blog_feed_url: string;

    @IsString()
    twitter_username: string;

    @IsString()
    category_code: string;

    @IsNumber()
    number_of_employees: number;

    @IsNumber()
    founded_year: number;

    @IsNumber()
    founded_month: number;

    @IsNumber()
    founded_day: number;

    @IsNumber()
    deadpooled_year: number;

    @IsNumber()
    deadpooled_month: number;

    @IsNumber()
    deadpooled_day: number;

    @IsString()
    deadpooled_url: string;

    @IsString()
    tag_list: string;

    @IsString()
    alias_list: string;

    @IsString()
    email_address: string;

    @IsString()
    phone_number: string;

    @IsString()
    description: string;

    @IsString()
    createdAt: string;

    @IsString()
    updatedAt: string;

    @IsString()
    overview: string;

    image: {
        attribution: {
            type: string
        }
    }

    @IsArray()
    products: [
        {
            name: { type: string }
            permalink: { type: string }
        }
    ]

}