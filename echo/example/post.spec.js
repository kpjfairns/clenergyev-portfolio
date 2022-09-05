const frisby = require('frisby')
const { expect } = require('chai')
const moment = require('moment')

it('should have items within that equal 15 when totalled', async () => {

    let time = moment()
    const response = await frisby.post("https://postman-echo.com/post", { "Cakes": [{ "Name": "Muffin", "Price": 10.00 }, { "Name": "Crumpet", "Price": 5.00 }] })
    let now = moment()

    let cakes = JSON.parse(response.body).data
    let total = 0;

    for (let cake in cakes, () => {
        total += cake.Price
    })

    expect(Number(now.diff(time))).to.be.lessThan(1000)
    return expect(Number(total)).to.equal(15)
})
