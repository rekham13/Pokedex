const fetchGet = async(url, options={}) => {
    const baseURL = process.env.REACT_APP_BASEURL;
    const URL = baseURL+url;
    const response = await fetch(URL,options);
    const data = await response.json();

    return data;
}

const getDetailedList = async(pokemonList) => {
    const detailedListForHome = [];
    const detailedListForDetail = {};

    for await (const pokemon of pokemonList) {
        const data = await fetchGet(`/pokemon/${pokemon.name}`);
        const { types, name,id,stats,height,weight,abilities } = data;

        const properTypes = getProperTypes(types);
        const imageSrc = getImageSrcFor(id);

        const detailsForHome = {
            id,
            name,
            properTypes,
            imageSrc
        };


        const detailsForDetail = {...detailsForHome};
        detailsForDetail.stats = stats;
        detailsForDetail.height = height; 
        detailsForDetail.weight = weight;
        detailsForDetail.abilities = abilities;
        detailsForDetail.types = [...detailsForHome.properTypes];

        
        detailedListForHome.push(detailsForHome);
        detailedListForDetail[id] = detailsForDetail;
    }

    return [detailedListForHome, detailedListForDetail];
}

const getProperTypes = (typesArr) => {
    const properTypes = new Set();

    typesArr.forEach(obj=>properTypes.add(obj.type.name));

    return properTypes;
};

const getImageSrcFor = (id) => {
    const formattedForImageId = getFormattedForImageId(id);
    const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedForImageId}.png`;

    return src;
};

const getFormattedForImageId = (id) => {
    const strId = id.toString();
    let formattedForImageId;

    if (strId.length === 1) {
        formattedForImageId = `00${id}`;
    } else if (strId.length === 2) {
        formattedForImageId = `0${id}`;
    } else {
        formattedForImageId = strId;
    };

    return formattedForImageId;
}

const getStats = (stats)=>{
    const properStats = stats.map(stat=>{
        const statObj = {
            statName:stat.stat.name,
            statScore: stat.base_stat
        }

        return statObj;
    });

    return properStats;
};

const getAbilities = (abilities)=>{
    let properAblities = [abilities[0]["ability"].name, abilities[1]["ability"].name];
    return properAblities;
}

export { fetchGet,getDetailedList,getImageSrcFor,getStats,getAbilities};