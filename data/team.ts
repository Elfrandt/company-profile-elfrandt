export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  emoji: string;
  bio: string;
  favorites: string[];
};

export const team: TeamMember[] = [
  {
    slug: "elfrandt",
    name: "Elfrandt Goldjer",
    role: "Penguasa",
    emoji: "💡",
    bio: "Elfrandt - 535250092, Pembuat website ini karena tugas dari asdos tercinta.",
    favorites: ["Coffee", "Games", "Calm"],
  },
  {
    slug: "olip",
    name: "Olivia Anastasha Setiawan",
    role: "Wakil Penguasa",
    emoji: "💡",
    bio: "Numpang nama aja walau tak berkontribusi.",
    favorites: ["Camera", "Cute", "Sun"],
  },
  {
    slug: "jejes",
    name: "Jessica Jeslyn Sutanto",
    role: "Fraud",
    emoji: "💡",
    bio: "Pengganggu dalam project ini",
    favorites: ["Noob", "Payah", "Jelek"],
  },
  {
    slug: "ichen",
    name: "Steven Verdychen",
    role: "Pacarnya Jejes",
    emoji: "💡",
    bio: "Pendukung ratu iblis",
    favorites: ["Cool", "Chill", "Games"],
  },
];

export function getMember(slug: string) {
  return team.find((m) => m.slug === slug);
}
