/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Client } from "botasm";
import { Message } from "disord.js"

export class Command {
    name: string = 'help';
    aliases: string[] = [ 'ayuda' ];

    async init(message: Message, client: Client, margs: string[]) {
        if (!margs[0]) {
            message.channel.send('command will not be run!');
            return false;
        }

        console.log("hola mundo!");

        return true;
    }

    async run(
        message: Message,
        client: Client,
        margs: string[],
        sargs?: any[],
        pargs?: any,
        cargs?: any
    ) {
        console.log("Command Version 0.1.0")
        message.channel.send('new cargs added!');
    }

    async postrun(
        message: any,
        client: Client,
        margs: string[],
        sargs: any,
        pargs: any
    ) {
        message.channel.send('postrun command!');
    }
}
