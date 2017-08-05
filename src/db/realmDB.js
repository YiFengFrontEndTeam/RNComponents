/**
 * Created by otto on 2017/6/30.
 */

"use strict";

import Realm from 'realm'

class Config {
}
Config.schema = {
    name: 'Configs',
    properties: {
        id: 'int',
        configValues: {type: 'string'},
    }
}

global.RealmAgent = new Realm({schema: [Config]})

