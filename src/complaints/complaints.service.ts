import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Injectable()
export class ComplaintsService {
  create(createComplaintDto: CreateComplaintDto) {
    return 'This action adds a new complaint';
  }
}
