export default class sentcordTS {
    fetch: any;
    apikey: null;
    botid: String;
    constructor(ops?: {
        apikey: null;
        botid: any;
    });
    stats(botid?: String, servers?: string, shards?: String): void;
}