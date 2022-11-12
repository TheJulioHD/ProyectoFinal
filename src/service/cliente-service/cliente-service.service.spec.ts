import { Test, TestingModule } from '@nestjs/testing';
import { ClienteServiceService } from './cliente-service.service';

describe('ClienteServiceService', () => {
  let service: ClienteServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteServiceService],
    }).compile();

    service = module.get<ClienteServiceService>(ClienteServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
