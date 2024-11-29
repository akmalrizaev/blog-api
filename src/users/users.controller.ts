import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);
    console.log(limit);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any, @Headers() headers: any) {
    console.log(request);
    console.log(headers);
    return 'You sent a post request to users endpoint';
  }
}
