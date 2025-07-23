export { DeckView, Vulnerability, Direction}

enum DeckView 
{
  UNICODE = 'unicode' ,  // unicode characters
  ICON    = "icon" ,     // Game icons
  SVG     = "svg" ,      // Playing card images in SVG format
  PNG     = "png" ,     // Playing card images in PNG format
  TEXT    = "text" ,      // Plain text A,K,Q,J,10 etc preceded/postfixed by a suit symbol
}

enum Direction {
  NORTH = "North",
  EAST = "East",
  SOUTH = "South",
  WEST = "West"
}

// Define the enumerated types
enum Vulnerability {
  NONE = "None",
  NS = "NS",
  EW = "EW",
  ALL = "All",
}

// Enum for Suits (with suit icons)
export enum Suit {
  SPADES = "Spades",   // Suit symbol for Spades
  HEARTS = "Hearts",   // Suit symbol for Hearts
  DIAMONDS = "Diamonds", // Suit symbol for Diamonds
  CLUBS = "Clubs"     // Suit symbol for Clubs
}

export enum Rank {
    ACE = 'A',
    KING = 'K',
    QUEEN = 'Q',
    JACK = 'J',
    TEN = 'T',
    NINE = '9',
    EIGHT = '8',
    SEVEN = '7',
    SIX = '6',
    FIVE = '5',
    FOUR = '4',
    THREE = '3',
    TWO = '2'
  }

