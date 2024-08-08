import { CreateCompanyDto } from "./create-company.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}