export declare namespace Products {
    type screenshots = {
        link: string
        grid: string
    }
    type links = {
        label:string
        src:string
    }
    type prodect = {
        description: string[]
        duration: string
        links: links[]
        screenshots: screenshots[]
    }
    type asObject = {
        logo: string | null
        title: string | null
        lead: string | null
        products: prodect[]
    }

}