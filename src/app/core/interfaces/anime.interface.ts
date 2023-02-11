export interface GenderAnime {
    "mal_id": number;
    "name": string;
    "url": string;
    "count": number;
}

export interface TopAnime{
    "mal_id": number;
    "url": string;
    "images": Image;
    "trailer": Trailer;
    "approved": boolean;
    "titles": Title[];
    "title": string;
    "title_english": string;
    "title_japanese": string;
    "title_synonyms": string[];
    "type": string;
    "source": string;
    "episodes": number;
    "status": string;
    "airing": boolean;
    "aired": Aired;
    "duration": string;
    "rating": string;
}

interface Image {
    "jpg": {
        "image_url": string;
        "small_image_url": string;
        "large_image_url": string;
    };
    "webp": {
        "image_url": string;
        "small_image_url": string;
        "large_image_url": string;
    };
}

interface Trailer {
    "youtube_id": string;
    "url": string;
    "embed_url": string;
    "images": {
        "image_url": string;
        "small_image_url": string;
        "medium_image_url": string;
        "large_image_url": string;
        "maximum_image_url": string;
    };
}

interface Title {
    "type": string;
    "title": string;
}

interface Aired {
    "from": string;
    "to": string;
    "prop": {
        "from": {
            "day": number;
            "month": number;
            "year": number;
        };
        "to": {
            "day": number;
            "month": number;
            "year": number;
        };
    };
    "string": string;
}