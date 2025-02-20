interface Ability {
    name: string;
    url: string;
  }
  
  interface PokemonAbility {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }
  
  interface Cries {
    latest: string;
    legacy: string;
  }
  
  interface Form {
    name: string;
    url: string;
  }
  
  interface VersionGameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  interface HeldItem {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }
  
  interface PokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
export interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    cries: Cries;
    forms: Form[];
    height: number;
    weight: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      front_default: string;
      back_default: string;
      other: {
        [key: string]: {
          front_default: string;
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: PokemonType[];
    held_items: HeldItem[];
    game_indices: VersionGameIndex[];
  }
  