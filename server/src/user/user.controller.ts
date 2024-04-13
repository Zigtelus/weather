import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateReportDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { routes } from '../routes/routes';
import { Request, Response } from 'express';
// import { TokenService } from '../../src/service/token-service';


@Controller(`${routes.users}`)
export class UserController {

  constructor(private readonly firstService: UserService){};

  @Get()
  async getUsers(): Promise<User[]> {
    // const q = (await this.firstService.getUsers())

    // for (let i = 0; i < q.length; i++) {
    //   this.removeUser(q[i].userId)
    // }
    
    console.log('1111');
    return this.firstService.getUsers()
  }

  // @Get(':userId')
  // async getUser(@Param('userId') userId: string): Promise<User> {
    
  //   return this.firstService.getUserById(userId)
  // }

  @Post()
  async createUser(@Body() createUserDto: CreateReportDto, @Res({passthrough: true}) res: Response): Promise<User | boolean | string> {


    // const y = {"payload": "dwdfwef"};


    // const accessToken = jwt.sign({"payload": "dwdfwef"}, {expiresIn: '20d'})


    // const token = new TokenService()
    // const refreshToken = jwt.sign(y, 'dwf-wqfde-qwf', {expiresIn: '20d'})
    // console.log(token.generateToken(y))
    const qq = await this.firstService.createUser(createUserDto, res);
    console.log(qq)
    return qq;
  }

  @Post('/getuser')
  async getUser(@Body() body: {password: string, email: string}): Promise<User> {
    console.log('1111');
    if ((await this.firstService.getUserById(body.email)).password === body.password) {
      return this.firstService.getUserById(body.email)
    }
  }

  @Patch(':userId')
  async updateUser( @Body() updateUserDto: CreateReportDto, @Param('userId') userId: string): Promise<User | boolean> {
    console.log('1111');
    return this.firstService.updateUser(userId, updateUserDto)
  }

  @Delete(':userId')
  async removeUser( @Param('userId') userId: string ): Promise<User> {
    console.log('1111');
    return this.firstService.removeUser(userId)
  }


};
