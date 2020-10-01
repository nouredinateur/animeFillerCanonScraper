const axios = require('axios');
const cheerio = require('cheerio');
const pageUrl = 'https://www.animefillerlist.com/shows/one-piece'

async function getAnimeFiller() {
    const { data } = await axios.get(pageUrl);
    const $ = cheerio.load(data);
    const canonManga = $('.manga_canon');
    const filler = $('.filler');
    const mixedFillerCanon = $('.mixed_canon\\/filler');
    const canonAnime = $('.anime_canon');
    const AnimeEps = [];
    
    // const Filler = [];
    // const Canon = [];
    // const Mixed = [];
    // const AnimeCanon = [];

    canonManga.find('.Episodes a').each((i , element) =>{
        const $element = $(element);
        const  canon = {};
        canon.canon = $element.text();
        AnimeEps.push(canon);
    });
    
    filler.find('.Episodes a').each((i , element) =>{
        const $element = $(element);
        const filler = {};
        filler.filler = $element.text();
        AnimeEps.push(filler);
    });
    mixedFillerCanon.find('.Episodes a').each((i , element) =>{
        const $element = $(element);
        const mixed = {};
        mixed.mixed = $element.text();
        AnimeEps.push(mixed);
    });
    canonAnime.find('.Episodes a').each((i , element) =>{
        const $element = $(element);
        const animeCanon = {};
        animeCanon.animeCanon = $element.text();
        AnimeEps.push(animeCanon);
    });
    return AnimeEps;
}

module.exports = getAnimeFiller;