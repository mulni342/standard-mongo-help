/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export class Command {
    name: string = 'help';
    aliases: string[] = [];

    async init(message: any, client: any, margs: string[]) {
        if (!margs[0]) {
            message.channel.send('command will not be run!');
            return false;
        }

        return true;
    }

    async run(
        message: any,
        client: any,
        margs: string[],
        sargs?: any[],
        pargs?: any,
        cargs?: any
    ) {
        console.log(cargs);
        message.channel.send('new cargs added!');
        
    }

    async postrun(
        message: any,
        client: any,
        margs: string[],
        sargs: any,
        pargs: any
    ) {
        message.channel.send('postrun command!');
    }
}
