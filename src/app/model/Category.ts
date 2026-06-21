export class Category {
    id: number | null;
    title: string | null;

    constructor(id: number , title: string){
        this.id = id;
        this.title = title;
    }
}