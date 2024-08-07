import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


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

    @Prop(raw({
        name: { type: String },
        permalink: { type: String },
    }))

    products: [
        {
            name: string
            permalink: string
        }
    ]

}


export const CompanySchema = SchemaFactory.createForClass(Company);

