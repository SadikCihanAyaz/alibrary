export type HomeTeam = {
  name: string;
  logo: string;
};
export type GuestTeam = {
  name: string;
  logo: string;
};

export type ICompetitive = {
  id: number;
  homeTeam: HomeTeam;
  guestTeam: GuestTeam;
  date: string;
  hours: string;
  place: string;
  backgroundImage: string;
};
