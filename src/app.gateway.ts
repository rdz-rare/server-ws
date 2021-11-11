import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(9090)
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('adminmodule')
  async eventOnsiteNotification(@MessageBody() data: any): Promise<WsResponse> {
    console.log(data);
    const message: WsResponse = {
      data,
      event: 'get-player-card',
    };

    return message;
  }
}
