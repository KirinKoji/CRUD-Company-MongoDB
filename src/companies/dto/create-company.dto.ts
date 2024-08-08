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

    products: [
        {
        name: string;
        permalink: string;
    }
]
    relationships: [
        {
            is_past: boolean;
            name: string;
            person: {
                first_name: string;
                last_name: string;
                permalink: string;
            }
        }
    ]

    competitions: [
        {
            competitor: {
                name: string;
                permalink: string;
            }
        }
    ]

    providerships: [
        {
            title: string;
            is_past: Boolean;
            provider: {
                name: string;
                permalink: string;
            }
        }
    ]

    @IsString()
    total_money_raised: string;

    funding_rounds: [
        {
            round_code: string;
            source_url: string;
            source_description: string;
            raised_amount: number;
            raised_currency_code: string;
            funded_year: number;
            funded_month: number;
            funded_day: number;
            investments: [
                {
                    company: {
                        name: string;
                        permalink: string;
                    };
                    financial_org: {
                        name: string;
                        permalink: string;
                    };
                    person: {
                        first_name: string;
                        last_name: string;
                        permalink: string;
                    }
                }
            ]
        }
    ]

    investments: [
        {
            funding_round: {
            round_code: string;
            source_url: string;
            source_description: string;
            raised_amount: number;
            raised_currency_code: string;
            funded_year: number;
            funded_month: number;
            funded_day: number;
            company: {
                name: string;
                permalink: string;
                }
            }
        }
    ]

    acquisition: {
        price_amount: number;
        price_currency_code: string;
        term_code: number;
        source_url: string;
        source_description: string;
        acquired_year: number;
        acquired_month: number;
        acquired_day: number;
        acquired_company: {
            name: string;
            permalink: string;
        }
    }

    acquisitions: {
        price_amount: number;
        price_currency_code: string;
        term_code: number;
        source_url: string;
        source_description: string;
        acquired_year: number;
        acquired_month: number;
        acquired_day: number;
        company: {
            name: string;
            permalink: string;
        }
    }

    offices: {
        description: string;
        address_1: string;
        address_2: string;
        city: string;
        state_code: string;
        country_code: string;
        latitude: number;
        longitude: number;
    }

    milestones: {
        description: string;
        stoned_year: number;
        stoned_month: number;
        stoned_day: number;
        source_url: string;
            source_text: string;
            source_description: string;
            stoneable_type: string;
            stoned_value: number;
            stoned_value_type: string;
            stoned_acquirer: string;
            stoneable: {
                name: string;
                permalink: string;
            }
    }

    video_embeds: {
        embed_code: string;
        description: string;
    }

    external_links: {
        external_url: string;
        title: string;
    }
}

