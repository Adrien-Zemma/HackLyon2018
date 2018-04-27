export default function(state = {}, action)
{
    if (Object.keys(state) == 0)
    {
        state = {
            name : "",
            surname : "",
            age : 0,
            mail : "",
            vehiculeFavoris :  [],
            abonnement : [],
            endroitsFavoris : []
        }
    }

    switch(action.type)
    {
        case "INPUT":
            state = {
                ...state,
                [action.name] : action.data
            }
        break;
        case "ADD_VEHICLE":
        var arre = state[action.name];
            if (!state[action.name].includes(action.data))
            {
                arre.push(action.data);
            }
            else
            {      
                arre.splice(arre.indexOf(action.data), 1);
            }
            state = {
                ...state,
                [action.name] : arre
            }
        break;
        case "ADD_ABO":
            state = {
                ...state,
                [action.name] : action.data
            }
        break;
    }
    return state;
}