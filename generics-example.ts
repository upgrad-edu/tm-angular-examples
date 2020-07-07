export class Text {
  content: string;
}

// export class TextComments {
//   texts: Text[] = [];

//   addTextToList(newContent: Text) {}

//   removeTextFromList(oldContent: Text) {}
// }

export class Image {
  content: File;
}

// export class ImageComments {
//   images: Image[] = [];

//   addImageToList(newContent: Image) {}

//   removeImageFromList(oldContent: Image) {}
// }

//instead have a generic class -->
export class Comment<T> {
  data: T[] = [];

  addContentToList(newContent: T) {}

  removeContentFromList(oldContent: T) {}
}

//Usage -->
let textComments: Comment<Text> = new Comment<Text>();
textComments.addContentToList(new Text());
