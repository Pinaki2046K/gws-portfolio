export interface Client {
  id: number;
  name: string;
  location: string;
}

export interface ClientCategory {
  id: string;
  title: string;
  subtitle?: string;
  clients?: Client[];
  items?: string[];
  subcategories?: { title: string; clients: Client[] }[];
}

export const clientData: ClientCategory[] = [
  {
    id: "govt-medical",
    title: "Government Medical Colleges & Hospitals",
    clients: [
      { id: 1, name: "Government Medical College and Hospital", location: "Madras Medical College" },
      { id: 2, name: "Government Medical College and Hospital", location: "Stanley" },
      { id: 3, name: "Government Medical College and Hospital", location: "Kilpauk" },
      { id: 4, name: "Government Medical College and Hospital", location: "Omandurar" },
      { id: 5, name: "Government Medical College and Hospital", location: "Thiruvallur" },
      { id: 6, name: "Government Medical College and Hospital", location: "Ramanathapuram" },
      { id: 7, name: "Government Medical College and Hospital", location: "Kallakurichi" },
      { id: 8, name: "Government Medical College and Hospital", location: "Virudhunagar" },
      { id: 9, name: "Government Medical College and Hospital", location: "Ariyalur" },
      { id: 10, name: "Government Medical College and Hospital", location: "Nagapattinam" },
      { id: 11, name: "King Institute Hospital", location: "Chennai" },
      { id: 12, name: "Tamilnadu Veterinary and Animal Sciences University", location: "Madhavaram" },
    ],
  },
  {
    id: "private-medical",
    title: "Private Medical Colleges & Hospitals",
    clients: [
      { id: 1, name: "Indira Medical College and Hospital", location: "Pandur, Thiruvallur" },
      { id: 2, name: "Kannyakumari Medical Mission Research Center", location: "Muttom, Kannyakumari" },
      { id: 3, name: "Sree Balaji Medical College and Hospital", location: "Chrompet" },
      { id: 4, name: "JR Medical College and Hospital", location: "Tindivanam" },
      { id: 5, name: "Tagore Medical College and Hospital", location: "Chennai" },
    ],
  },
  {
    id: "govt-dialysis",
    title: "Government Dialysis Centre Projects",
    clients: [
      { id: 1, name: "Government Medical College & Hospital", location: "Tirutani" },
      { id: 2, name: "Government Hospital", location: "Avadi" },
      { id: 3, name: "Government Hospital", location: "Gummidipondi" },
      { id: 4, name: "Government Hospital", location: "Vellore" },
      { id: 5, name: "Government Hospital", location: "Walajah" },
      { id: 6, name: "Government Hospital", location: "Ambur" },
      { id: 7, name: "Government Hospital", location: "Thirupathur" },
      { id: 8, name: "Government Hospital", location: "Madhavaram" },
      { id: 9, name: "Government Hospital", location: "Saidapet" },
      { id: 10, name: "Government Hospital", location: "K.K. Nagar" },
    ],
  },
  {
    id: "private-dialysis",
    title: "Private Dialysis Centre Projects",
    clients: [
      { id: 1, name: "Mahalakshmi Hospital", location: "K.K. Nagar" },
      { id: 2, name: "BM Orthopedic Hospital", location: "Chennai" },
    ],
  },
  {
    id: "collector-office",
    title: "Collector Office",
    items: ["Chennai", "Chengalpattu", "Ranipettai"],
  },
  {
    id: "govt-sector",
    title: "Government Sector",
    subtitle: "PWD, TNHB, TNHUDB & Municipality",
    items: [
      "Greenways Road Minister & Judges Bungalows (PWD)",
      "High Court, MM Court & Egmore Court (PWD)",
      "Secretariat (PWD)",
      "State Guest House (PWD)",
      "IG Registration Office (PWD)",
      "240 MLA Hostel (TNHB)",
      "Ex MLA Hostel (TNHB)",
      "TNHUDB Projects",
      "School at Thiruvannamalai & Pallavaram (Municipality)",
      "Printing and Stationery Department",
      "Police Work Shop Avadi",
    ],
  },
  {
    id: "govt-arts",
    title: "Government Arts & Science Colleges",
    clients: [
      { id: 1, name: "Presidency College", location: "Chennai" },
      { id: 2, name: "Bharathi Womens College", location: "Chennai" },
      { id: 3, name: "Quaide Milleth College", location: "Chennai" },
      { id: 4, name: "Lady Willington Campus", location: "Chennai" },
      { id: 5, name: "Queen Mary's College", location: "Chennai" },
      { id: 6, name: "Music College", location: "Chennai" },
      { id: 7, name: "CPT Polytechnic", location: "Chennai" },
      { id: 8, name: "WPT Polytechnic", location: "Chennai" },
      { id: 9, name: "Dote Campus", location: "Chennai" },
    ],
  },
  {
    id: "central-govt",
    title: "Central Government Projects",
    items: ["CRDF — Avadi", "CRDF — Poonamallee"],
  },
];
