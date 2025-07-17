// src/types/svelte-icons.d.ts

declare module 'svelte-icons/gi' {
  import { SvelteComponent } from 'svelte';
  export type IconProps = {
    size?: number;
    color?: string;
    [key: string]: unknown;
  };
  // If you want, you can declare all the icons you use:
  export const GiCardAceSpades: typeof SvelteComponent;
  export const GiCardKingSpades: typeof SvelteComponent;
  export const GiCardQueenSpades: typeof SvelteComponent;
  export const GiCardJackSpades: typeof SvelteComponent;
  export const GiCard10Spades: typeof SvelteComponent;
  export const GiCard9Spades: typeof SvelteComponent;
  export const GiCard8Spades: typeof SvelteComponent;
  export const GiCard7Spades: typeof SvelteComponent;
  export const GiCard6Spades: typeof SvelteComponent;
  export const GiCard5Spades: typeof SvelteComponent;
  export const GiCard4Spades: typeof SvelteComponent;
  export const GiCard3Spades: typeof SvelteComponent;
  export const GiCard2Spades: typeof SvelteComponent;
  export const GiCardAceHearts: typeof SvelteComponent;
  export const GiCardKingHearts: typeof SvelteComponent;
  export const GiCardQueenHearts: typeof SvelteComponent;
  export const GiCardJackHearts: typeof SvelteComponent;
  export const GiCard10Hearts: typeof SvelteComponent;
  export const GiCard9Hearts: typeof SvelteComponent;
  export const GiCard8Hearts: typeof SvelteComponent;
  export const GiCard7Hearts: typeof SvelteComponent;
  export const GiCard6Hearts: typeof SvelteComponent;
  export const GiCard5Hearts: typeof SvelteComponent;
  export const GiCard4Hearts: typeof SvelteComponent;
  export const GiCard3Hearts: typeof SvelteComponent;
  export const GiCard2Hearts: typeof SvelteComponent;
  export const GiCardAceDiamonds: typeof SvelteComponent;
  export const GiCardKingDiamonds: typeof SvelteComponent;
  export const GiCardQueenDiamonds: typeof SvelteComponent;
  export const GiCardJackDiamonds: typeof SvelteComponent;
  export const GiCard10Diamonds: typeof SvelteComponent;
  export const GiCard9Diamonds: typeof SvelteComponent;
  export const GiCard8Diamonds: typeof SvelteComponent;
  export const GiCard7Diamonds: typeof SvelteComponent;
  export const GiCard6Diamonds: typeof SvelteComponent;
  export const GiCard5Diamonds: typeof SvelteComponent;
  export const GiCard4Diamonds: typeof SvelteComponent;
  export const GiCard3Diamonds: typeof SvelteComponent;
  export const GiCard2Diamonds: typeof SvelteComponent;
  export const GiCardAceClubs: typeof SvelteComponent;
  export const GiCardKingClubs: typeof SvelteComponent;
  export const GiCardQueenClubs: typeof SvelteComponent;
  export const GiCardJackClubs: typeof SvelteComponent;
  export const GiCard10Clubs: typeof SvelteComponent;
  export const GiCard9Clubs: typeof SvelteComponent;
  export const GiCard8Clubs: typeof SvelteComponent;
  export const GiCard7Clubs: typeof SvelteComponent;
  export const GiCard6Clubs: typeof SvelteComponent;
  export const GiCard5Clubs: typeof SvelteComponent;
  export const GiCard4Clubs: typeof SvelteComponent;
  export const GiCard3Clubs: typeof SvelteComponent;
  export const GiCard2Clubs: typeof SvelteComponent;

  // If you use any other Gi icons, add them above!
}

// Blanket fallback (optional, silences *any* svelte-icons import):
declare module 'svelte-icons/*';