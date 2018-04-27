export const getInputData = (e)=>
{
    return {
        type : "INPUT",
        data : e.target.value,
        name : e.target.name
    }
}

export const addArray = (e)=>
{
    return {
        type : "ADD_VEHICLE",
        data : e,
        name : "vehiculeFavoris"
    }
}

export const addArrayAbo = (e)=>
{
    return {
        type : "ADD_ABO",
        data : e,
        name : "abonnement"
    }
}

export const addLocation = (e)=>
{
    return {
        type : "ADD_VEHICLE",
        data : e,
        name : "endroitsFavoris"
    }
}