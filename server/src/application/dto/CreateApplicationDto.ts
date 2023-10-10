import { IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  applicationId: string;
}
