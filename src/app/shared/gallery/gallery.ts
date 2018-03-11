
export class GalleryItem {
  	constructor(public id: number, public url:string) { 
  	}
}


export class Gallery {
  	private _rows: GalleryItem[][];

  	constructor(private _name?:string, private _row?:number, private _items?:GalleryItem[]) { 
  	}

	get name():string {
        return this._name;
    }
    set name(name:string) {
        this._name = name;
    }
    get row():number {
        return this._row;
    }
    set row(row:number) {
        this._row = row;
    }
	get items():GalleryItem[] {
        return this._items;
    }
    set items(items:GalleryItem[]) {
        this._items = items;
    }

    get rows():GalleryItem[][] {
        return this._rows;
    }
    set rows(rows:GalleryItem[][]) {
        this._rows = rows;
    }
}


