import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(Number(process.env.PORT))
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendOnSiteNotification')
  async eventOnsiteNotification(@MessageBody() data: any): Promise<WsResponse> {
    console.log(data);
    const message: WsResponse = {
      event: 'sendOnSiteNotification',
      data: {
        a: 1,
      },
    };

    return message;
  }
}
