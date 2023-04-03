// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

// test/indexTest.js

describe("Array functions", () => {
  beforeEach(() => {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });

  describe("destructivelyAppendCat(name)", () => {
    it("appends a cat to the end of the cats array", () => {
      destructivelyAppendCat("Ralph");
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
    });
  });

  describe("destructivelyPrependCat(name)", () => {
    it("prepends a cat to the beginning of the cats array", () => {
      destructivelyPrependCat("Bob");
      expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
    });
  });

  describe("destructivelyRemoveLastCat()", () => {
    it("removes the last cat from the cats array", () => {
      destructivelyRemoveLastCat();
      expect(cats).to.have.ordered.members(["Milo", "Otis"]);
    });
  });

  describe("destructivelyRemoveFirstCat()", () => {
    it("removes the first cat from the cats array", () => {
      destructivelyRemoveFirstCat();
      expect(cats).to.have.ordered.members(["Otis", "Garfield"]);
    });
  });

  describe("appendCat(name)", () => {
    it("appends a cat to the cats array and returns a new array, leaving the cats array unchanged", () => {
      const newCats = appendCat("Broom");
      expect(newCats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("prependCat(name)", () => {
    it("prepends a cat to the cats array and returns a new array, leaving the cats array unchanged", () => {
      const newCats = prependCat("Broom");
      expect(newCats).to.have.ordered.members(["Broom", "Milo", "Otis", "Garfield"]);
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("removeLastCat()", () => {
    it("removes the last cat in the cats array and returns a new array, leaving the cats array unchanged", () => {
      const newCats = removeLastCat();
      expect(newCats).to.have.ordered.members(["Milo", "Otis"]);
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("removeFirstCat()", () => {
    it("removes the first cat from the cats
