const validations = require('../middleware/validations')

describe('Validation middleware', () => {
    let nextFunction = jest.fn();

    beforeEach(() => {
        mockRequest = {
            body: {
                "startDate": "2016-06-03",
                "endDate": "2017-01-29",
                "minCount": 170,
                "maxCount": 400
            }
        };
        mockResponse = {

            send: jest.fn()
        };
    });

    test('with proper data', async () => {

        validations.fieldValidate(mockRequest, mockResponse, nextFunction);

        expect(nextFunction).toBeCalledTimes(1);
    });

    test('with invalid date', async () => {
        let exprectedResponse = {
            "code": 2,
            "message": "Invalid Date Format"
        }
        let invalidbody = {
            body: {
                "startDate": "201613-06-03",
                "endDate": "2017-01-29",
                "minCount": 170,
                "maxCount": 400
            }
        }

        validations.fieldValidate(invalidbody, mockResponse, nextFunction);

        expect(mockResponse.send).toBeCalledWith(exprectedResponse);
    });

});