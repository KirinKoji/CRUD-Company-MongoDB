import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { title } from "process";


export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    permalink: string;
    
    @Prop({ type: String, required: true })
    crunchbase_url: string;

    @Prop({ type: String, required: true })
    homepage_url: string;

    @Prop({ type: String, required: false })
    blog_url?: string;

    @Prop({ type: String, required: false })
    blog_feed_url?: string;

    @Prop({ type: String, required: true })
    twitter_username: string;
    
    @Prop({ type: String, required: true })
    category_code: string;

    @Prop({ type: Number, required: true })
    number_of_employees: number;

    @Prop({ type: Number, required: true })
    founded_year: number;

    @Prop({ type: Number, required: true })
    founded_month: number;

    @Prop({ type: Number, required: true })
    founded_day: number;

    @Prop({ type: Number, required: true })
    deadpooled_year: number;

    @Prop({ type: Number, required: true })
    deadpooled_month: number;

    @Prop({ type: Number, required: true })
    deadpooled_day: number;

    @Prop({ type: String, required: false })
    deadpooled_url?: string;

    @Prop({ type: String, required: true })
    tag_list: string;

    @Prop({ type: String, required: false })
    alias_list?: string;

    @Prop({ type: String, required: true })
    email_address: string;

    @Prop({ type: String, required: true })
    phone_number: string;

    @Prop({ type: String, required: false })
    description?: string;

    @Prop({ type: String, required: true })
    created_at: string;

    @Prop({ type: String, required: true })
    updated_at: string;

    @Prop({ type: String, required: true })
    overview: string;

    @Prop(raw({
        attribution: { type: String },
    }))

    image: {
        attribution: string;
    }

    @Prop(raw([{
        name: String,
        permalink: String
    }]))

    products: {
        name: string;
        permalink: string;
    }

    @Prop(raw([{
        is_past: Boolean,
        title: String,
        person: {
            first_name: String,
            last_name: String,
            permalink: String,
        }
    }]))

    relationships: [
        {
            is_past: boolean;
            title: string;
            person: {
                first_name: string;
                last_name: string;
                permalink: string;
            }
        }
    ]

    @Prop(raw([{
        competitor: {
            name: String,
            permalink: String
        }
    }]))

    competitions: [
        {
            competitor: {
                name: string;
                permalink: string;
            }
        }
    ]

    @Prop(raw([{
        title: String,
        is_past: String,
        provider: {
            name: String,
            permalink: String,
        }
    }]))

    providerships: [
        {
            title?: string;
            is_past: Boolean;
            provider: {
                name: string;
                permalink: string;
            }
        }
    ]

    @Prop({ type: String, required: true })
    total_money_raised: string;

    @Prop(raw([{
        round_code: String,
        source_url: String,
        source_description: String,
        raised_amount: Number,
        raised_currency_code: String,
        funded_year: Number,
        funded_month: Number,
        funded_day: Number,
        investments: [
            {
                company: {
                    name: String,
                    permalink: String,
                },
                financial_org: {
                    name: String,
                    permalink: String,
                },
                person: {
                    first_name: String,
                    last_name: String,
                    permalink: String,
                },
            },
        ]
    }]))

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
                    };
                }
            ]
        }
    ]

    @Prop(raw([{
        funding_round: {
        round_code: String,
        source_url: String,
        source_description: String,
        raised_amount: Number,
        raised_currency_code: String,
        funded_year: Number,
        funded_month: Number,
        funded_day: Number,
        company: {
            name: String,
            permalink: String,
        }
    }
}]))

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
        },
    ]

    @Prop(raw({
        price_amount: Number,
        price_currency_code: String,
        term_code: Number,
        source_url: String,
        source_description: String,
        acquired_year: Number,
        acquired_month: Number,
        acquired_day: Number,
        acquiring_company: {
            name: String,
            permalink: String,
        }
    }))

    acquisition: {
        price_amount: number;
        price_currency_code: string;
        term_code: number;
        source_url: string;
        source_description: string;
        acquired_year: number;
        acquired_month: number;
        acquired_day: number;
        acquiring_company: {
            name: string
            permalink: string;
        }
    }

    @Prop(raw([{
        price_amount: Number,
        price_currency_code: String,
        term_code: Number,
        source_url: String,
        source_description: String,
        acquired_year: Number,
        acquired_month: Number,
        acquired_day: Number,
        company: {
            name: String,
            permalink: String,
        }
    }]))

    acquisitions: [
        {
            price_amount: number;
            price_currency_code: string;
            term_code: number;
            source_url: string;
            source_description: string;
            acquired_year: number;
            acquired_month: number;
            acquired_day: number;
            company: {
                name: string
                permalink: string;
            }
        }
    ]

    @Prop(raw([{
        description: String,
        address1: String,
        address2: String,
        zip_code: String,
        city: String,
        state_code: String,
        country_code: String,
        latitude: Number,
        longitude: Number,
    }]))

    offices: [
        {
            description: string;
            address1: string;
            address2: string;
            zip_code: string;
            city: string;
            state_code: string;
            country_code: string;
            latitude: number;
            longitude: number;
        }
    ]

    @Prop(raw([{
        description: String,
        stoned_year: Number,
        stoned_month: Number,
        stoned_day: Number,
        source_url: String,
        source_text: String,
        source_description: String,
        stoneable_type: String,
        stoned_value: Number,
        stoned_value_type: String,
        stoned_acquirer: String,
        stoneable: {
            name: String,
            permalink: String,
        }
    }]))

    milestones: [
        {
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
    ]

    @Prop({ type: String, required: false })
    ipo?: string | number;

    @Prop(raw([{
        embed_code: String,
        description: String,
    }]))

    video_embeds: {
        embeb_code: string;
        description: string;
    }

    @Prop(raw([{
        external_url: String,
        title: String,
    }]))

      external_links: [
          {
              external_url: string;
              title: string;
          }
      ]
    }


export const CompanySchema = SchemaFactory.createForClass(Company);

