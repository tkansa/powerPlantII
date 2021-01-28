export interface Plant {
    id: string,
    common_name: string,
    slug: string,
    scientific_name: string,
    rank: string,
    family_common_name: string,
    image_url: string,
    genus: string,
    family: string,
    links: {
        self: string,
        plant: string,
        genus: string,
    }

}