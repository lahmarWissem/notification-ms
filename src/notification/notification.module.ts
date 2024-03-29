import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from './schemas/notification.schema';
import { SocketIoGateway } from 'src/socket-io.gateway';

@Module({
  imports:[MongooseModule.forFeature([{name : 'Notification', schema: NotificationSchema}])],
  providers: [NotificationService,SocketIoGateway],
  controllers: [NotificationController]
})
export class NotificationModule {}
