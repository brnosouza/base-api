'use strict';

import {Controller, Get, PathParams} from "@tsed/common";
import Veterinary from "../../models/Veterinary.model";
import dbCon from "../../database/db";

@Controller('veterinary')
class VeterinaryController {
    constructor() {
        dbCon();
    }

    @Get('/:id')
    async getVeterinary(@PathParams("id") id: number): Promise<Veterinary> {
        try {
            return await Veterinary.find({
                where: {
                    id: id
                }
            });
        } catch (e) {
            console.log(id);
            console.log(e.toString());
        }
    }

    @Get('/')
    async listVeterinaries(): Promise<Veterinary[]> {
        try {
            return await Veterinary.all();
        } catch (e) {
            console.log(e.toString());
        }
    }
}


export default VeterinaryController;