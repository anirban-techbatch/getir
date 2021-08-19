const recordRepo = require('../repository/recordRepo')

describe('Record Repository', () => {

    beforeEach(() => {
        mockRequest = {

            "startDate": "2016-06-03",
            "endDate": "2017-01-29",
            "minCount": 170,
            "maxCount": 400
        };

    });

    test('with proper data set', async () => {


        recordRepo.getRecords(mockRequest.startDate, mockRequest.endDate, mockRequest.minCount, mockRequest.maxCount)
            .then((data) => {
                expect(data)
                    .toEqual(expect.objectContaining({
                        code: 0,
                        msg: "Success"

                    }));

            })

    });





})