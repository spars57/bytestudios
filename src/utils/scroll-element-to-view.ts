const scrollElementToViewById = (id: HTMLElement["id"]) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
export default scrollElementToViewById;
