export type NavItem = {
  name: string;
  section: string;
};

export const navItems: NavItem[] = [
  { name: "Beranda", section: "/home" },
  { name: "Bahaya & Pencegahan", section: "/bahaya" },
  { name: "Peralatan & Pertolongan", section: "/peralatan" },
  { name: "Pelatihan", section: "/pelatihan" },
];
