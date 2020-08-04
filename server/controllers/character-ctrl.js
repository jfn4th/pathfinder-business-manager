const Character = require('../models/Character');

createCharacter = (req, res) => {
    const body = req.body;

    if (!body) {
        return RandomSource.status(400).json({
            success: false,
            error: 'You must provide a character!'
        });
    }

    const character = new Character(body);

    if (!character) {
        return res.status(400).json({ success: false, error: err });
    }

    character
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: character._id,
                message: 'Character created!'
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: 'Character not created!'
            });
        });
};
getCharacters = (req, res) => {};
getCharacterById = (req, res) => {};
updateCharacter = (req, res) => {};
deleteCharacter = (req, res) => {};

module.exports = {
    createCharacter,
    getCharacters,
    getCharactereById,
    updateCharacter,
    deleteCharacter
};
