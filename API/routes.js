const { getPlaces, addUser } = require('./models');

const route = require('express').Router();
const models = require('./models')

//GET hiking places
route.get('/places', async (req, res) => {
    try {
        const places = await models.getPlaces()
        if (places.length > 0){
            for (let i = 0; i < places.length; i++){
                let visitor_count = 0
                const indVisitors = await models.getIndVisitorOfAPlace(places[i].id)
                const groupVisitors = await models.getGroupVisitorOfAPlace(places[i].id)
                visitor_count += indVisitors.length
                visitor_count += groupVisitors.length
                places[i].people_come = visitor_count
            }
        }
        res.status(200).json(places)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE a hiking place
route.patch('/places/:placeId', async (req, res) => {
    const { placeId } = req.params
    const change = req.body
    try {
        const count = await models.updateAPlace(placeId, change)
        res.status(200).json(`Updated ${count} place`)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET stories of a place
route.get('/places/:placeId/stories', async (req, res) => {
    const placeId = req.params.placeId
    try {
        const stories = await models.getStoriesOfAPlace(placeId)
        res.status(200).json(stories)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET individual visitors of a place
route.get('/places/:placeId/visitors/individual', async (req, res) => {
    const placeId = req.params.placeId
    try {
        const indVisitors = await models.getIndVisitorOfAPlace(placeId)
        res.status(200).json(indVisitors)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET group visitors of a place
route.get('/places/:placeId/visitors/group', async (req, res) => {
    const placeId = req.params.placeId
    try {
        const groupVisitors = await models.getGroupVisitorOfAPlace(placeId)
        res.status(200).json(groupVisitors)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD user
route.post('/users', async (req,res) => {
    const newUser = req.body
    try {
        const response = await models.addUser(newUser)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD hiking_place
route.post('/places', async (req,res) => {
    const newSpot = req.body
    try {
        const response = await models.addHikingPlace(newSpot)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD group
route.post('/groups', async (req,res) => {
    const newGroup = req.body
    try {
        const response = await models.addGroup(newGroup)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD story
route.post('/stories', async (req,res) => {
    const newStory = req.body
    try {
        const response = await models.addStory(newStory)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD visit_data_ind
route.post('/visitors/individual', async (req,res) => {
    const newVisitDataInd = req.body
    try {
        const response = await models.addVisitDataInd(newVisitDataInd)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD visit_data_group
route.post('/visitors/group', async (req,res) => {
    const newVisitDataGroup = req.body
    try {
        const response = await models.addVisitDataGroup(newVisitDataGroup)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})


//ADD group_user
route.post('/groups/user', async (req,res) => {
    const newGroupUser = req.body
    try {
        const response = await models.addGroupUser(newGroupUser)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;