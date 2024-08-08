export class ListQueryType {
    name: string;
    permalink: string;
    crunchbase_url: string;
    homepage_url: string;
    blog_url: string;
    blog_feed_url: string;
    twitter_username: string;
    category_code: string;
    number_of_employees: number;
    founded_year: number;
    founded_month: number;
    founded_day: number;
    deadpooled_year: number;
    deadpooled_month: number;
    deadpooled_day: number;
    deadpooled_url?: string;
    tag_list: string;

    limit: number;
    offset: number
}