const db = require('../data/dbConfig');

const getPlaces = () => {
    return db("hiking_place")
}

const updateAPlace = (placeId, change) => {
    return db("hiking_place")
            .where({ id: placeId })
            .update(change)
}

const getStoriesOfAPlace = (placeId) => {
    return db("story as s")
            .where("s.place_id", placeId)
            .join("user as u", "s.user_id", "u.id")
            .select(
                "s.id",
                "s.created_timeInt",
                "s.content",
                "s.user_id as author_id",
                "u.first_name as author_first_name",
                "u.last_name as author_last_name",
                "u.email as author_email"
            )
}

const getIndVisitorOfAPlace = (placeId) => {
    return db("visit_data_ind as vi")
            .where("vi.id", placeId)
            .join("user as u", "vi.hiker_id", "u.id")
            .select(
                "vi.id",
                "vi.hiker_id as hiker_id",
                "vi.visit_timeInt as visit_timeInt",
                "vi.created_timeInt as created_timeInt",
                "u.first_name as hiker_first_name",
                "u.last_name as hiker_last_name",
                "u.email as hiker_email",
            )
}

const getGroupVisitorOfAPlace = (placeId) => {
    return db("visit_data_group as vg")
            .where("vg.id", placeId)
            .join("group as g", "vg.group_id", "g.id")
            .select(
                "vg.id",
                "vg.group_id as group_id",
                "vg.created_timeInt as created_timeInt",
                "vg.visit_timeInt as visit_timeInt",
                "g.group_name as group_name",
                "g.group_description as group_description"
            )
}

const addUser = newUser => {
    return db("user")
            .returning("id")
            .insert(newUser)
            .then(ids => ({ id: ids[0] }))
}

const getUserById = userId => {
    return db("user")
            .where({ id: userId })
            .select(
                'user.id',
                'user.first_name',
                'user.last_name',
                'user.email'
            )
            .first()
}

const addHikingPlace = newPlace => {
    return db("hiking_place")
            .returning("id")
            .insert(newPlace)
            .then(ids => ({ id: ids[0] }))
}

const addGroup = newGroup => {
    return db("group")
            .returning("id")
            .insert(newGroup)
            .then(ids => ({ id: ids[0] }))
}

const addStory = newStory => {
    return db("story")
            .returning("id")
            .insert(newStory)
            .then(ids => ({ id: ids[0] }))
}

const addVisitDataInd = newVisitDataInd => {
    return db("visit_data_ind")
            .returning("id")
            .insert(newVisitDataInd)
            .then(ids => ({ id: ids[0] }))
}

const addVisitDataGroup = newVisitDataGroup => {
    return db("visit_data_group")
            .returning("id")
            .insert(newVisitDataGroup)
            .then(ids => ({ id: ids[0] }))
}

const addGroupUser = newGroupUser => {
    return db("group_user")
            .returning("id")
            .insert(newGroupUser)
            .then(ids => ({ id: ids[0] }))
}

const getFriendsByHiker = hikerId => {
    return db("friend")
            .where({ requester_id: hikerId })
            
}

const addFriend = newFriendIds => {
    return db("friend")
            .returning("id")
            .insert(newFriendIds)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getPlaces,
    updateAPlace,
    getStoriesOfAPlace,
    getIndVisitorOfAPlace,
    getGroupVisitorOfAPlace,
    addUser,
    getUserById,
    addHikingPlace,
    addGroup,
    addStory,
    addVisitDataInd,
    addVisitDataGroup,
    addGroupUser,
    addFriend,
    getFriendsByHiker
}