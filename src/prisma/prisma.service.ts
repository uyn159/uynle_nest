import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService  extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:12344321@localhost:5434/testdb?schema=public'
                }
            }
        })
    }
}
