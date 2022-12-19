const {Type, Contests} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {

        let {name, title, date_cont, date_start_reg, date_stop_reg} = req.body
        const {img} = req.files
        
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
        const cont = await Contests.create({name, price, title, date_cont, photo: fileName, date_start_reg, date_stop_reg});

        return res.json(cont)

    }

    async getAll(req, res) {

        const types = await Contests.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()
