const Character = require('../models/Character');

createCharacter = async (req, res) => {
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

    await character
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

getCharacters = async (req, res) => {
    await Character.find({}, (err, characters) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!characters.length) {
            return res.status(404).json({ success: false, error: 'Characters not found!' });
        }
        return res.status(200).json({ success: true, data: characters });
    }).catch((err) => console.log(err));
};

getCharacterById = async (req, res) => {
    await Character.findById(req.params.charId, (err, character) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!character) {
            return res.status(404).json({ success: false, error: 'Character not found!' });
        }
    });
};

updateCharacter = async (req, res) => {};

deleteCharacter = async (req, res) => {};

module.exports = {
    createCharacter,
    getCharacters,
    getCharactereById,
    updateCharacter,
    deleteCharacter
};
