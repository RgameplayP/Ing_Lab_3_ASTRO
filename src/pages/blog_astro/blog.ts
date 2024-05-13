export interface Seminario {
        attributes: {
                seminario: string;
                date: string;
                markdown: string;
                imagen_seminario : {
                        data: {
                                attributes: {
                                        url: string;
                                }
                        }
                }
        }
};