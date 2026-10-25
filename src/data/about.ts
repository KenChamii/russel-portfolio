/**
 * Items on the About page dial. `viz` selects the matching animation
 * in components/about/AboutViz.astro.
 */
export type VizId = 'ripples' | 'bowl' | 'equalizer' | 'sword' | 'pipeline' | 'shurikens' | 'eye';

export interface AboutItem {
  title: string;
  description: string;
  viz: VizId;
  caption: string;
}

export const aboutIntro = 'A few things about me outside of work.';

export const aboutItems: AboutItem[] = [
  {
    title: 'Introvert',
    description: 'Quiet by nature. I think a lot, and there is usually an inner monologue running in the background.',
    viz: 'ripples',
    caption: 'Inner monologue',
  },
  {
    title: 'Comfort food',
    description:
      'Double chicken chami from Kwatogs, with sweet and spicy tamis-anghang noodles. Remind me of my early career days when I am struggling yet still fighting.',
    viz: 'bowl',
    caption: 'Sweet, tamis-anghang',
  },
  {
    title: 'Music',
    description: 'Fond of metal, with the occasional detour into other genres.',
    viz: 'equalizer',
    caption: 'Volume: up',
  },
  {
    title: 'Games',
    description:
      'Elden Ring, Red Dead Redemption 2 and Zelda Breath of the Wild. I do not play as much these days, but I still jump in when I am free. Proud to be an Elden Lord.',
    viz: 'sword',
    caption: 'Elden Lord, playing now and then',
  },
  {
    title: 'Automation',
    description: 'I like automating my workflows, building simple personal tools that make my work faster.',
    viz: 'pipeline',
    caption: 'Less clicking, more shipping',
  },
  {
    title: 'Anime',
    description: 'One Piece, Naruto, Steins Gate and Mushoku Tensei.',
    viz: 'shurikens',
    caption: 'One Piece, Naruto, Steins Gate, Mushoku Tensei',
  },
  { title: 'Horror', description: 'Love to watch horror movies specially suspenseful ones and zombie films.', viz: 'eye', caption: 'Lights off' },
];
