import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [CourseModule, UserModule, CartModule, PaymentModule, LectureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
