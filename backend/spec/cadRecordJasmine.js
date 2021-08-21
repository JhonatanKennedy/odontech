var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var Request = require('request');

jasmine.loadConfigFile('spec/support/jasmine.json');

describe('Test Server', () => {
  var server;
  beforeAll(() => {
    server = require('../src/server');
  });
  afterAll(() => {
    server.close();
  });
  describe('Testing Get method for /user/:id', () => {
    var data = {};
    var array = [
      {
        "id": 0, 
        "name": "prontuario teste", 
        "birth": "12/31/2312", 
        "cel": "(11) 23232-1312", 
        "alergies": "nenhuma", 
        "tooths": [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
        "comments": "nenhum", 
        "date": "2021-08-20T22:16:45.935Z"
      }
    ]
    beforeAll((done) => {
      Request.get('http://localhost:3333/user/0', (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(200);
    });
    it('Body equals to array', () => {
      expect(data.body).toEqual(array);
    });

  });
});
jasmine.execute();
