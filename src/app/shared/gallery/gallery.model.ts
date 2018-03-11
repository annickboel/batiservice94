export class GalleryItem {
  constructor(public id: number) { 
  }
}

export class Gallery {
  items: GalleryItem[];
  constructor(public name: string, public row: number) { 
  }
}


