export type Song = { title: string; originalArtist: string; soloist?: string; arranger?: string };
export type Member = { name: string; voicePart: string; major: string; imageUrl: string; role?: string };

export const currentSetlist: Song[] = [
  { title: "Cherry Wine", originalArtist: "Grent Perez", soloist: "Aidan Coppola", arranger: "Aidan Coppola" },
  { title: "Nightingale Lane", originalArtist: "Raye", soloist: "Mia Coleman", arranger: "Brooklyn Boehme & Daniel Gomez" },
  { title: "Santa Monica", originalArtist: "Ayoni", soloist: "Eva Dannison", arranger: "Brooklyn Boehme" },
  { title: "40%", originalArtist: "The Army the Navy", soloist: "Sarina Barnes", arranger: "Brooklyn Boehme" },
  { title: "Heart", originalArtist: "Coldplay & Jacob Collier", arranger: "Brooklyn Boehme" },
  { title: "Smokin Out the Window", originalArtist: "Bruno Mars", soloist: "Sajag Timilsina", arranger: "Brooklyn Boehme, Aiden Geiver, Aidan Coppola, Ben Angus, Shaun Ostheimer, Claire Holcombe, Sarina Barnes" },
];

export const set26: Song[] = [
  { title: "Symptom of Life", originalArtist: "Willow", soloist: "Brooklyn Boehme" },
  { title: "High and Dry", originalArtist: "Radiohead", soloist: "Sarina Barnes" },
  { title: "Rearrange My World", originalArtist: "Daniel Caesar", soloist: "Ben Angus & Tiwa Fisher" },
  { title: "The Scientist", originalArtist: "Coldplay" },
];

export const eboard: Member[] = [
  { name: "Talia Cook", role: "President", voicePart: "Alto", major: "Molecular & Cell Biology · Psychology", imageUrl: "/images/members/talia.jpg" },
  { name: "Maria Nagaria", role: "Vice President", voicePart: "Soprano", major: "Molecular & Cell Biology & Applied Mathematics", imageUrl: "/images/members/maria.jpg" },
  { name: "Claire Holcombe", role: "Treasurer", voicePart: "Soprano", major: "Music & English", imageUrl: "/images/members/claire.jpg" },
  { name: "Daniel Gomez", role: "Secretary", voicePart: "Baritone / Bass", major: "Music (Pre-Med)", imageUrl: "/images/members/daniel.jpg" },
];

export const creativeTeam: Member[] = [
  { name: "Aidan Coppola", role: "Co-Music Director", voicePart: "Baritone / Bass", major: "Music", imageUrl: "/images/members/aidan.jpg" },
  { name: "Sarina Barnes", role: "Co-Music Director", voicePart: "Soprano", major: "Music", imageUrl: "/images/members/sarina.jpg" },
  { name: "Daniel Gomez", role: "Asst. Music Director", voicePart: "Baritone / Bass", major: "Music (Pre-Med)", imageUrl: "/images/members/daniel.jpg" },
  { name: "Ava Mathew", role: "Co-Choreographer", voicePart: "Alto", major: "Molecular & Cell Biology · Anthropology of Global Health", imageUrl: "/images/members/ava.jpg" },
  { name: "Shaun Ostheimer", role: "Co-Choreographer", voicePart: "Baritone", major: "Political Science", imageUrl: "/images/members/shaun.jpg" },
];

export const members: Member[] = [
  { name: "Eva Dannison", role: "Co-Social Media Chair", voicePart: "Alto", major: "Human Rights & Political Science · Business", imageUrl: "/images/members/eva.jpg" },
  { name: "Tiwa Fisher", role: "Co-Social Media Chair", voicePart: "Tenor", major: "Analytics & Information Management", imageUrl: "/images/members/tiwatope.jpg" },
  { name: "Mia Coleman", role: "Wardrobe Chair", voicePart: "Alto", major: "Human Development & Family Sciences", imageUrl: "/images/members/mia.jpg" },
  { name: "Makenzie Crouch", voicePart: "Soprano", major: "Psychology", imageUrl: "/images/members/makenzie.jpg" },
  { name: "Sam Alvarez", voicePart: "Tenor / Baritone", major: "Political Science & Human Rights", imageUrl: "/images/members/sam.jpg" },
  { name: "Sajag Timilsina", voicePart: "Tenor", major: "Pharmacy", imageUrl: "/images/members/sajag.jpg" },
];

export type AlumniEntry = { name: string; role?: string };

export const alumniByYear: Record<string, AlumniEntry[]> = {
  "2026": [
    { name: "Brooklyn Boehme", role: "Music Director" },
    { name: "Ben Angus", role: "Assistant Music Director, President" },
    { name: "Ishayu Ray", role: "Choreographer, Treasurer, Pan Asian Council Rep" },
    { name: "Aiden Geiver", role: "Choreographer" },
  ],
  "2025": [
    { name: "Paige Walstra", role: "Social Media" },
  ],
  "2024": [
    { name: "Rachel Rustemeyer", role: "President" },
    { name: "Anna Borrazzo", role: "Vice President" },
    { name: "Jonathan Schwartz", role: "Treasurer" },
    { name: "Tomaso Scotti", role: "Choreographer" },
    { name: "Evan Timnev", role: "Secretary" },
    { name: "Henry Stanton" },
    { name: "LK Asamoah" },
    { name: "Trinity Hollis" },
  ],
  "2023": [
    { name: "Stephanie Downes", role: "President, Choreographer" },
    { name: "Tristan Wong", role: "Music Director" },
    { name: "Saura Malahiazar", role: "Assistant Music Director" },
    { name: "Daniella Lebron", role: "Treasurer, Pan Asian Council Rep" },
    { name: "Dylawnie Woods" },
    { name: "Swetha Tadepalli" },
  ],
  "2022": [
    { name: "Gabi Kwiatkowski", role: "President" },
    { name: "Tommy Dowd", role: "President" },
    { name: "Dan Coleman", role: "Music Director" },
    { name: "Joshua Fernandes" },
  ],
  "2021": [
    { name: "Emma Kelly", role: "Music Director" },
    { name: "Bryan Brazel" },
    { name: "Adi Kulkarni" },
  ],
  "2020": [
    { name: "Nick Huynh", role: "President" },
    { name: "Laura Calandra", role: "Treasurer" },
    { name: "Wilmer Gonzalez" },
  ],
  "2019": [
    { name: "Jayson Gilbert", role: "President" },
    { name: "Narineh Torosyan", role: "Music Director" },
    { name: "Andi Benvenuto", role: "Treasurer, Secretary" },
    { name: "Robert Wyman" },
    { name: "Sofia Lomba" },
  ],
  "2018": [
    { name: "Matt Brandt", role: "President" },
    { name: "Nick Tambini", role: "President" },
    { name: "Jessica Fernandes", role: "Music Director" },
    { name: "Elaina Giordano", role: "Choreographer" },
    { name: "Rachel Conte", role: "Secretary" },
    { name: "Emilio Loret de Mola" },
  ],
  "2017": [
    { name: "Danielle Wrubel", role: "Vice President" },
    { name: "Ivan Paz", role: "Vice President" },
    { name: "Lauren Drainville", role: "Secretary" },
  ],
  "2016": [
    { name: "Nicholas Tan", role: "Assistant Music Director" },
  ],
  "2015": [
    { name: "Cole von Richthofen", role: "President" },
    { name: "Jaclyn Sabogal-Murillo", role: "Secretary" },
    { name: "Veronica Lee" },
    { name: "Jen Miao" },
    { name: "Jill Chongruk" },
  ],
  "2014": [
    { name: "Justine Nixon", role: "Music Director" },
    { name: "Caroline Cacciola", role: "Secretary" },
    { name: "Ryan Allen", role: "Secretary" },
    { name: "Connor Sullivan" },
  ],
  "2013": [
    { name: "Taylor Meltzer", role: "President" },
    { name: "Adam Bestrom", role: "Treasurer" },
  ],
  "2012": [
    { name: "Jackson Tsai", role: "President" },
    { name: "Mandy Cook", role: "Music Director" },
    { name: "Simon Abrahms", role: "Vice President" },
  ],
  "2011": [
    { name: "Jasmine Kehrhahn", role: "President" },
    { name: "David Plamondon" },
    { name: "Sarah Parsons" },
  ],
  "2010": [
    { name: "Jenny Bunce", role: "Music Director" },
    { name: "Julian Murillo", role: "Secretary" },
    { name: "Laura Weismantel" },
  ],
  "2009": [
    { name: "Dan Mallek", role: "Music Director" },
    { name: "Amanda Friedman", role: "Secretary" },
    { name: "Erik Lindquist", role: "Secretary" },
    { name: "Joseph Tarantino" },
  ],
  "2008": [
    { name: "Jeff Corbishley", role: "President" },
    { name: "Lizz Maurer", role: "Treasurer" },
  ],
  "2007": [
    { name: "Vu Tran", role: "Music Director, Co-Founder" },
    { name: "Eliza Plamondon" },
  ],
  "2006": [
    { name: "Mai Thao Le", role: "Co-Founder" },
    { name: "Katie Bu" },
    { name: "Laila Berzins" },
    { name: "Stephanie Rutkowski" },
  ],
  "2005": [
    { name: "Steven Su", role: "Music Director, Co-Founder" },
    { name: "Cong To", role: "Co-Founder" },
    { name: "Tori Slate", role: "Co-Founder" },
    { name: "Nasia Bachman-Streitfield" },
  ],
};
