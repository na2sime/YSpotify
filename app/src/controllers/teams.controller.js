const teamsService = require('../services/teams.service');

exports.joinTeam = async (req, res) => {
    try {
        await teamsService.joinTeam(req, res);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getTeamByName = async (req, res) => {
    try {
        await teamsService.getTeamByName(req, res);
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getAllTeams = async (req, res) => {
    try {
        await teamsService.getAllTeams(req, res);
    } catch (error) {
        res.status(500).json({error});
    }
}