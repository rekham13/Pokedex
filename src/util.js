const fetchGet = async(url, options={}) => {
    const baseURL = process.env.REACT_APP_BASEURL;
    const URL = baseURL+url;
    const response = await fetch(URL,options);
    const data = await response.json();

    return data;
}

const getCapitalizedName = (str) => {
    const capitalFirstLetter = str[0].toUpperCase();
    const capitalizedStr = capitalFirstLetter + str.substr(1, str.length);

    return capitalizedStr;
}

const getDetailedList = async(pokemonList) => {
    const detailedList = [];

    for await (const pokemon of pokemonList) {
        const baseURL = process.env.REACT_APP_BASEURL;
        const data = await fetchGet(`/pokemon/${pokemon.name}`);
        const { types, name,id } = data;

        const properTypes = getProperTypes(types);

        const details = {
            id,
            name,
            properTypes
        }
        
        detailedList.push(details);
    }

    return detailedList;
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

export { fetchGet, getCapitalizedName, getDetailedList,getImageSrcFor};