import {ClientManager} from "./client";
import {events} from "./types";


/**
 * client_id
 * @param manager
 * @constructor
 */
export function WrapperWeWork(manager: ClientManager) {
    const {client, server} = manager;
    let timer: number = 0;
    let isLogin = false;

    /**
     * 主动注册到系统
     */
    client.on("wk.register", async (res) => {
        console.log(res);
    });

    /**
     * 收到新消息
     */
    client.on("wk.new_message", async (res) => {
        //好友请求：{"applyRequest":"Godtoy请求添加你为联系人","conversationId":0,"senderRemoteId":0,"senderTime":0,"type":-1}
        console.log(res);
    });

  

    //断开链接
    client.on('disconnect', () => {
        timer && clearInterval(timer);
        isLogin = false;
        console.error(`${manager.clientType} 已离线`);
    });

    client.on(events.CONNECT, () => {

    });

}


export function WrapperClients(manager: ClientManager) {

}
