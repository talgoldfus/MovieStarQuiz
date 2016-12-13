const actorReducer = function(state = { details:{name:"default"} },action) {

        switch (action.type) {
            case 'GET_ACTOR_FROM_API':
                let actor = action.payload[0]
                let actorDetails = Object.assign({}, {
                    id: actor.id,
                    name: actor.name,
                    profile_path: actor.profile_path ? `https://image.tmdb.org/t/p/w342${actor.profile_path}` : null
                })
                return {
                    ...state,
                    details: actorDetails
                };
            default:
                return state;
        }
    }

export default actorReducer;
