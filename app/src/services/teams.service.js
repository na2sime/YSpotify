const User = require('../models/user.model');
const Team = require('../models/team.model');

exports.joinTeam = async (req, res) => {
    const teamName = req.params.team;
    const user = await User.findById(req.auth.userId);
    const team = await Team.findOne({name: teamName});
    if (!team) {
        return res.status(404).send("Team not found");
    }
    if (team.members.includes(user.id)) {
        return res.status(400).send("You are already a member of this team");
    }
    await Team.findOneAndUpdate({name: teamName}, {$push: {members: user.id}});
    await User.findOneAndUpdate({id: user.id}, {$push: {teams: team.id}});
    res.status(200).send("You have joined the team");
}

exports.getTeamByName = async (req, res) => {
    const teamName = req.params.name;
    const team = await Team.findOne({name: teamName});
    if (!team) {
        return res.status(404).send("Team not found");
    }
    res.status(200).send(team);
}

exports.getAllTeams = async (req, res) => {
    const teams = await Team.find();
    res.status(200).send(teams);
}