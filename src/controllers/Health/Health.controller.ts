'use strict';

import {Controller, Get} from "@tsed/common";

@Controller('health')
class HealthController {

    constructor() {
    }

    @Get('/')
    async getData() {
        return ('it\'s alive!');
    }
}


export default HealthController;