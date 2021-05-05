// Write your classes here
class Tree {
  constructor(species) {
    this._species = species
  }

  static definition() {
    return 'A tree is a plant  .'
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species)
    this._name = name
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species)
    this._name = name
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`
  }
}