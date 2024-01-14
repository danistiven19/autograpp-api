// Tests for the famous controller

const famousController = require('../../../src/controllers/famousController.js');
const famousService = require('../../../src/services/famousService.js');
jest.mock('../../../src/services/famousService');

const famousExample =  {
  name: 'Daniel',
  occupation: 'Engineer',
  age: 19
};

const famousList = [famousExample];

const reqMock = {};
const resMock = {
  status: jest.fn(),
  json: jest.fn()
};

const sendMock = {send: jest.fn()};

describe('FamousController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {    
    it('should return all famous people', async () => {
      famousService.getAllFamous.mockResolvedValue(famousList);

      await famousController.getAll(reqMock, resMock);

      expect(resMock.json).toHaveBeenCalledWith(famousList);
    });

    it('should return 500 when something breaks', async () => {
      const error = new Error('Something broke!');
      famousService.getAllFamous.mockRejectedValue(error);
      resMock.status.mockReturnValue(sendMock);
      await famousController.getAll(reqMock, resMock);
      

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(sendMock.send).toHaveBeenCalledWith('Something broke!',error.stack);
    });

    it('Should not call json when something breaks', async () => {
      const error = new Error('Something broke!');
      famousService.getAllFamous.mockRejectedValue(error);
      
      resMock.status.mockReturnValue(sendMock);
      await famousController.getAll(reqMock, resMock);

      expect(resMock.json).not.toHaveBeenCalled();
    });
  });
});