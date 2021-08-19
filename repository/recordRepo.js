
/*  
Repository Contain all the data level calls and queries
*/

const Records = require('../models/recordModel');
const conn = require('../datasource/mongo.datasource');
const recordRepo = {

    getRecords: function (startDate, endDate, minCount, maxCount) {
        return new Promise((resolve, reject) => {


            const MyRecords = conn.model('records', Records);

            MyRecords.aggregate([


                {

                    "$project": {
                        "key": 1,
                        "createdAt": 1,
                        "TotalCount": {
                            "$sum": "$counts"
                        },

                    },

                },
                {
                    "$match": {
                        $and: [{
                                "createdAt": {
                                    "$gte": new Date(startDate),
                                    "$lte": new Date(endDate)
                                }
                            },
                            {
                                "TotalCount": {
                                    "$gte": minCount,
                                    "$lte": maxCount
                                }
                            }
                        ]
                    }
                },
            ], (err, docs) => {
                if (err) {
                    console.log("error happened", err);
                    reject(err)
                } else {
                    resolve(docs);
                }


            });


        });


    }

};

module.exports = recordRepo;