import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { RutType } from '../../entities/RutType';
import { RutTypeService } from '../../services/rutType.service';

@Crud({
    model: {
      type: RutType,
    },
  })
@Controller('rut-type')
export class RutTypeController {
    constructor(public service: RutTypeService) {}
}
