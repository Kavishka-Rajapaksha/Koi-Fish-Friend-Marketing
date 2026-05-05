import {
  Activity,
  BatteryCharging,
  Bot,
  CalendarCheck,
  Camera,
  Cpu,
  Droplets,
  FileText,
  Fish,
  Gauge,
  Leaf,
  Radio,
  ShieldAlert,
  SolarPanel,
  WalletCards,
  Waves,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Domain", href: "/#domain" },
  { label: "Milestones", href: "/#milestones" },
  { label: "Documents", href: "/documents" },
  { label: "Slides", href: "/#slides" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const heroSlides = [
  { src: "/images/floating-device-1.jpg", alt: "Solar device beside the pond" },
  { src: "/images/floating-device-close.jpg", alt: "Smart floating device on pond water" },
  { src: "/images/dashboard.jpg", alt: "KoiFishFriend dashboard in field testing" },
  { src: "/images/feeding-device-1.jpg", alt: "Automated feeding device prototype" },
];

export const stats = [
  { value: "3", label: "Smart IoT Devices" },
  { value: "4", label: "Research Modules" },
  { value: "24/7", label: "Real-time Monitoring" },
  { value: "Solar", label: "Powered Automation" },
];

export const devices = [
  {
    title: "Smart Floating Device",
    image: "/images/device images/floating_machine.jpeg",
    icon: Waves,
    description:
      "Solar-powered floating platform for pond navigation, live camera monitoring, sensor readings, and remote movement control.",
    features: ["Live camera view", "Remote boat movement", "Emergency stop", "Pond-wide sensing"],
    sensors: ["IR camera", "Ultrasonic sensing", "Solar charger", "Battery telemetry"],
    benefits: ["Reduces manual pond checks", "Improves inspection coverage", "Supports real-time interventions"],
  },
  {
    title: "Automated Feeding Device",
    image: "/images/device images/feeding_device.jpeg",
    icon: Bot,
    description:
      "Solar-powered feeder with a hopper, rotating dispensing mechanism, scheduling, load-cell measurement, and feed event logs.",
    features: ["Scheduled feeding", "Remote feed trigger", "Timestamped logs", "Budget analytics link"],
    sensors: ["20kg load cell", "HX711 amplifier", "12V battery", "Solar charging"],
    benefits: ["Reduces labor", "Controls feed waste", "Improves cycle cost visibility"],
  },
  {
    title: "Power Management Device",
    image: "/images/device images/enegy_monitoring.jpeg",
    icon: BatteryCharging,
    description:
      "Safe power control unit for solar and battery-backed aquaculture devices with voltage, current, and energy monitoring.",
    features: ["Device switching", "Power safety", "Voltage display", "Automation support"],
    sensors: ["ACS712 current", "Voltage monitor", "Relay modules", "Battery status"],
    benefits: ["Extends uptime", "Improves safety", "Tracks energy usage"],
  },
  {
    title: "Web Dashboard / Control Panel",
    image: "/images/dashboard.png",
    icon: Gauge,
    description:
      "Farmer and admin dashboard for camera monitoring, navigation controls, fish count, water quality, feeding, budgets, AI predictions, and alerts.",
    features: ["Live camera feed", "Boat controls", "Emergency stop", "System online status"],
    sensors: ["Firebase alerts", "Camera stream", "ESP32 data", "Forecast inputs"],
    benefits: ["Centralized control", "Fast decisions", "Remote farm visibility"],
  },
];

export const researchModules = [
  {
    title: "Floating Feeding Device",
    icon: SolarPanel,
    points: [
      "Solar-powered floating feeder with rotating dispensing mechanism",
      "20kg load cell with HX711 for feed amount tracking",
      "Rule-based schedule, remote feeding, timestamped logs, and budget integration",
    ],
  },
  {
    title: "Fish Mortality Detection & Environmental Alerts",
    icon: Fish,
    points: [
      "Raspberry Pi B+ and IR camera for abnormal behavior and mortality detection",
      "pH, temperature, rainfall, and humidity sensors",
      "Firebase cloud alerts with mobile notifications",
    ],
  },
  {
    title: "Water Quality Monitoring & Maintenance Reminder",
    icon: Droplets,
    points: [
      "ESP32 with turbidity, pH, temperature, and optional dissolved oxygen sensing",
      "Trend analysis with alerts and maintenance reminder calendar",
      "Human-in-the-loop dosing logs for accountable pond care",
    ],
  },
  {
    title: "Energy Metering, Budgeting & Analytics",
    icon: WalletCards,
    points: [
      "ESP32 energy monitoring using ACS712 and voltage sensing",
      "POS-style expense entry with cost per fish, cost per kg, and cycle analytics",
      "PDF/Excel exports, anomaly alerts, and forecasting",
    ],
  },
];

export const domainSections = [
  {
    title: "Literature Survey",
    body:
      "Modern aquaculture platforms increasingly combine IoT sensing, automation, cloud dashboards, and predictive analytics. KoiFishFriend extends those ideas for small and medium ponds where affordability, solar operation, and practical remote control matter.",
  },
  {
    title: "Research Gap",
    body:
      "Existing solutions often solve feeding, water quality, or monitoring independently. Farmers still lack an integrated low-cost system that connects floating inspection, mortality alerts, feeding logs, power monitoring, and budgeting in one workflow.",
  },
  {
    title: "Research Problem",
    body:
      "Manual aquaculture management causes delayed responses, inconsistent feeding, weak cost visibility, and limited environmental awareness. The research asks how IoT automation can reduce those operational gaps while remaining usable for smaller farms.",
  },
  {
    title: "Research Objectives",
    body:
      "Design a solar-supported IoT aquaculture platform that monitors pond conditions, automates feeding, detects risk events, tracks energy and expenses, and presents actionable insights through a farmer-friendly web dashboard.",
  },
  {
    title: "Methodology",
    body:
      "The system is built as modular prototypes using ESP32 and Raspberry Pi units, connected sensors, Firebase alerts, a web dashboard, field testing at pond environments, and iterative validation against feeding, navigation, alerting, and analytics scenarios.",
  },
  {
    title: "Technologies Used",
    body:
      "ESP32, Raspberry Pi B+, Firebase, IR camera, pH and turbidity sensors, temperature and weather sensors, ACS712, HX711, solar charging, cloud notifications, web dashboard interfaces, and analytics/report generation workflows.",
  },
];

export const dashboardFeatures: Array<[string, LucideIcon]> = [
  ["Live camera monitoring", Camera],
  ["Boat navigation controls", Radio],
  ["Fish count module", Fish],
  ["Water quality module", Droplets],
  ["Feeding management", Leaf],
  ["Budget management", WalletCards],
  ["AI predictions", Cpu],
  ["Weather forecast", Activity],
  ["Emergency stop", ShieldAlert],
  ["System online status", Zap],
];

export const galleryImages = [
  { src: "/images/floating-device-1.jpg", title: "Floating Feeder Setup" },
  { src: "/images/feeding-device-1.jpg", title: "Automated Feeding Device" },
  { src: "/images/power-management-device.jpg", title: "Power Management Device" },
  { src: "/images/dashboard.jpg", title: "Dashboard Control Panel" },
  { src: "/images/floating-device-close.jpg", title: "Smart Floating Device" },
  { src: "/images/floating-device-side.jpg", title: "Pond Navigation Trial" },
  { src: "/images/feeding-device-open.jpg", title: "Feeder Hopper Interior" },
  { src: "/images/pond-demo.jpg", title: "Test Pond Environment" },
];

export const galleryVideos: Array<{
  src: string;
  title: string;
  kind?: "file" | "youtube";
}> = [
  { src: "/videos/floating-demo.mp4", title: "Floating Device Demo" },
  { src: "/videos/pond-demo.mp4", title: "Pond Navigation Demo" },
];

export const milestones = [
  { title: "Project Proposal", date: "Initial research scope", status: "Completed" },
  { title: "Progress Presentation 1", date: "Prototype architecture", status: "Completed" },
  { title: "Progress Presentation 2", date: "Integrated system testing", status: "Completed" },
  { title: "Final Assessment", date: "Final website and documentation", status: "Completed" },
  { title: "Viva", date: "Research defense", status: "Upcoming" },
];

export const documents = [
  { title: "Project Charter (TAF)", href: "/documents/TAF_25-26J-295.pdf", type: "PDF" },
  { title: "Proposal Presentation", href: "/documents/Proposal%20Presentation.pdf", type: "PDF" },
  { title: "Proposal Document - Rajapaksha R M K U", href: "/documents/proposal_IT22565358_RajapakshaRMKU.pdf", type: "PDF" },
  { title: "Proposal Document - Dilshan G H A C", href: "/documents/proposal_IT22581334_DilshanG%20H%20A%20C.pdf", type: "PDF" },
  { title: "Proposal Document - Abeysekara K S", href: "/documents/proposal_IT22605634_%20AbeysekaraK.S.pdf", type: "PDF" },
  { title: "Proposal Document - Sewwandi C I", href: "/documents/proposal_IT22609526_Sewwandi%20C.I.pdf", type: "PDF" },
  { title: "Progress Presentation 1", href: "/documents/Progress%20Presentation%201.pdf", type: "PDF" },
  { title: "Progress Presentation 2", href: "/documents/Progress%20Presentation%202.pdf", type: "PDF" },
  { title: "Checklist Document (PP1)", href: "/documents/25-26J-295-Checklist1-PP1.pdf", type: "PDF" },
  { title: "Checklist Document (PP2)", href: "/documents/25-26J-295-Checklist2.xlsx", type: "XLSX" },
  { title: "Individual Report - Abeysekara K S", href: "/documents/IT22605634_%20AbeysekaraK_Done.pdf", type: "PDF" },
  { title: "Individual Report - Sewwandi C I", href: "/documents/IT22609526_Sewwandi%20C_done.pdf", type: "PDF" },
  { title: "Individual Report - Dilshan G H A C", href: "/documents/IT22581334_DilshanG%20H%20A%20C_done.pdf", type: "PDF" },
  { title: "Individual Report - Rajapaksha R M K U", href: "/documents/IT22565358_RajapakshaRMKU_done.pdf", type: "PDF" },
  { title: "Draft Final Report", href: "/documents/Final%20Report.pdf", type: "PDF" },
  {
    title: "Research Paper",
    href: "/documents/Koi-Friend%20IoT-Enabled%20Aquaculture%20System%20with%20Feeding,%20Mortality%20Detection,%20Budgeting,%20Monitoring,%20and%20Alerts.pdf",
    type: "PDF",
  },
];

export const slides = [
  { title: "Proposal Presentation", href: "/documents/Proposal%20Presentation.pdf" },
  { title: "Progress Presentation 1", href: "/documents/Progress%20Presentation%201.pdf" },
  { title: "Progress Presentation 2", href: "/documents/Progress%20Presentation%202.pdf" },
  {
    title: "Final Presentation",
    href: "#",
    unavailableMessage: "Final Presentation is not yet completed.",
  },
];

export const teamMembers = [
  {
    name: "Abeysekara K S",
    studentId: "IT22605634",
    email: "it22605634@my.sliit.lk",
    role: "Floating Feeding Device / Smart Floating Unit",
    icon: Waves,
    image: "/images/team/kushan.png",
  },
  {
    name: "Sewwandi C.I",
    studentId: "IT22609526",
    email: "it22609526@my.sliit.lk",
    role: "Fish Mortality Detection & Environmental Alerts",
    icon: Fish,
    image: "/images/team/ishara.JPG",
  },
  {
    name: "Dilshan G H A C",
    studentId: "IT22581334",
    email: "it22581334@my.sliit.lk",
    role: "Water Quality Monitoring & Maintenance Reminder",
    icon: Droplets,
    image: "/images/team/charuka.JPG",
  },
  {
    name: "Rajapaksha R M K U",
    studentId: "IT22565358",
    email: "it22565358@my.sliit.lk",
    role: "Energy, Budgeting & Analytics",
    icon: Zap,
    image: "/images/team/kavishka.JPG",
  },
];

export const supervisor = {
  name: "Ms. Uthpala Samarakoon",
  badge: "Supervisor",
  role: "Senior Lecturer, Sri Lanka Institute of Information Technology",
  email: "uthpala.s@sliit.lk",
  icon: CalendarCheck,
  image: "/images/team/uthpala.jpeg",
};

export const coSupervisor = {
  name: "Nelum Chathuranga Amarasena",
  badge: "Co-Supervisor",
  role: "Senior Lecturer, Sri Lanka Institute of Information Technology",
  email: "nelum.a@sliit.lk",
  icon: CalendarCheck,
  image: "/images/team/nelum.jpeg",
};

export const documentIcon = FileText;
