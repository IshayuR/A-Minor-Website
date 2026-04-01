export type Song = { title: string; originalArtist: string; soloist: string; arranger: string };
export type Member = { name: string; voicePart: string; major: string; imageUrl: string };

export const currentSetlist: Song[] = [
  { title: "Bloom", originalArtist: "The Paper Kites", soloist: "Aria M.", arranger: "Nate T." },
  { title: "Saturn", originalArtist: "SZA", soloist: "Mina K.", arranger: "Jules C." },
  { title: "Home", originalArtist: "Edward Sharpe & The Magnetic Zeros", soloist: "Sam P.", arranger: "Avery L." },
  { title: "Little Talks", originalArtist: "Of Monsters and Men", soloist: "Kai D.", arranger: "Jordan R." }
];

export const allTimeFavorites: Song[] = [
  { title: "Dog Days Are Over", originalArtist: "Florence + The Machine", soloist: "Shay B.", arranger: "A Minor Alumni" },
  { title: "Somewhere Only We Know", originalArtist: "Keane", soloist: "Lena V.", arranger: "E-Board 2018" },
  { title: "Take Me Home, Country Roads", originalArtist: "John Denver", soloist: "Chris A.", arranger: "Mika S." },
  { title: "Ocean Eyes", originalArtist: "Billie Eilish", soloist: "Noa F.", arranger: "Taylor G." }
];

export const eboard: Member[] = [
  { name: "Maya Chen", voicePart: "Music Director | Alto", major: "Molecular & Cell Biology", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80" },
  { name: "Eli Park", voicePart: "President | Tenor", major: "Computer Science", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
  { name: "Nina Alvarez", voicePart: "Business Manager | Soprano", major: "Marketing", imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
  { name: "Jordan Lee", voicePart: "Social Chair | Beatbox", major: "Digital Media & Design", imageUrl: "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80" }
];

export const members: Member[] = [
  { name: "Ari Kim", voicePart: "Soprano", major: "Psychology", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { name: "Samir Patel", voicePart: "Baritone", major: "Biomedical Engineering", imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80" },
  { name: "Jules Nguyen", voicePart: "Alto", major: "Political Science", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" },
  { name: "Noah Rivera", voicePart: "Tenor", major: "Finance", imageUrl: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=900&q=80" },
  { name: "Priya Das", voicePart: "Soprano", major: "Nursing", imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80" },
  { name: "Luca Marino", voicePart: "Bass", major: "Mechanical Engineering", imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80" },
  { name: "Hana Ishikawa", voicePart: "Alto", major: "Allied Health", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" },
  { name: "Micah Osei", voicePart: "Tenor", major: "Economics", imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80" }
];

export const alumniByYear: Record<string, string[]> = {
  "2025": ["Sabrina Ho", "Leo Antwi", "Carmen Yang"],
  "2024": ["Jasmine Patel", "Paul Kim", "Annie Zheng", "Chris Mei"],
  "2023": ["Tiana Park", "Noel Rivera", "Amrita Shah", "Dylan Hu"],
  "2022": ["Carly Nguyen", "Rohan Patel", "Maddie Chen", "Tommy Vu"]
};
