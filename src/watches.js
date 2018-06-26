export default class Watch {
  constructor(
    brand,
    model,
    image,
    topMargin = 0,
    bottomMargin = 0,
    leftMargin = 0,
    rightMargin = 0
  ) {
    this.brand = brand;
    this.model = model;
    this.image = image;
    this.bottomMargin = bottomMargin;
    this.topMargin = topMargin;
    this.leftMargin = leftMargin;
    this.rightMargin = rightMargin;
  }
}
