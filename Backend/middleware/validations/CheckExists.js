const CheckExists = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        const detail = await Model.findOne({
            where: {
                id,
                IsActive: true
            }
        });
        if (detail) {
            req.detail = detail;
            next();
        } else {
            res.status(404).send(`Not Found ID =${id}`)
        }
    }
}

module.exports = {
    CheckExists
}