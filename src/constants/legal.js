// ================================================
// Legal pages: Privacy Policy, Terms of Service, Contact
// Sources (checked 8 October 2026):
//  - REDDAR app privacy policy (Google Doc linked from the App Store, effective 4 June 2026)
//  - Google Play listing: developer account FAIRCODE INFOTECH PVT LTD, data encrypted in transit,
//    users can request deletion
//  - faircodetech.com: legal name, Kochi address, info@faircodetech.com, Indian law and Kochi courts
//  - This website's code: no analytics or cookies; Google Fonts; Vercel hosting;
//    optional "near me" location on the Hospitals page
// Any change to how the app or site handles data must be reflected here.
// ================================================

export const LEGAL_ENTITY = "Faircode Infotech Pvt Ltd";
export const LEGAL_ADDRESS = "B4, Pais Avenue, Water Land Road, Chilavannoor, Kochi, Kerala 682020, India";
export const CONTACT_EMAIL = "info@faircodetech.com";
export const COMPANY_WEBSITE = "https://faircodetech.com/";
export const LAST_UPDATED = "8 October 2026";

// Block types: h2, p, list. Email addresses in text are turned into mailto links.
export const privacyPolicy = [
  { type: "p", text: `This Privacy Policy explains how ${LEGAL_ENTITY} ("Faircode", "we", "us") collects, uses and shares personal data when you use the REDDAR mobile app on Android and iOS (the "App") and the website www.reddar.in (the "Website"). REDDAR is a social impact initiative by Faircode. By using REDDAR, you agree to the collection and use of information as described in this policy.` },

  { type: "h2", text: "1. Information we collect in the App" },
  { type: "p", text: "To match blood donors with people who need blood, the App collects:" },
  { type: "list", items: [
    "Phone number: to sign you in with a one-time password (OTP) and to let donors and recipients contact each other.",
    "Precise location (latitude and longitude): to match donors with nearby blood requests.",
    "Profile details: your full name, blood group and role (donor, recipient or both).",
    "Visibility setting: whether you are Visible on Radar or Invisible to donor searches and request alerts.",
    "Blood request details you create: such as the patient or contact name, blood group, units needed, hospital and urgency. A request may include information about another person, the patient; only share it with their permission.",
    "Donation history: the donations you record, and the date you are next eligible to donate, so the App can track the safe gap between donations.",
    "Notifications: if you allow them, the App sends you alerts about nearby blood requests.",
  ] },
  { type: "p", text: "Your blood group is health-related information. We collect it only because blood matching cannot work without it." },

  { type: "h2", text: "2. Information we collect on the Website" },
  { type: "list", items: [
    "The Website does not require an account and does not use advertising, analytics or tracking cookies.",
    "Location, only if you choose \"Find Nearby\" on the Hospitals page: your browser asks for permission first, and your location is sent to our server to find hospitals near you.",
    "Hospital searches you type on the Hospitals page are sent to our server to return results.",
    "Technical data: like most websites, our website host (Vercel) and our server host (Render) receive standard request information such as your IP address and browser type. Fonts are loaded from Google Fonts, which also receives your IP address.",
  ] },

  { type: "h2", text: "3. How we use your information" },
  { type: "list", items: [
    "To create and manage your account, using your phone number as your unique sign-in.",
    "To match donors and recipients, using blood group and location to alert you to nearby requests that match your blood group.",
    "To help a donation happen: when you accept a request, the contact details needed to coordinate it are shared with the other person.",
    "To show hospitals and information on the Website.",
    "To keep REDDAR secure and to meet our legal obligations.",
  ] },

  { type: "h2", text: "4. How we share your information" },
  { type: "p", text: "We do not sell your personal data. We share it only in these situations:" },
  { type: "list", items: [
    "With other users: blood request details (such as the patient or contact name, blood group, hospital and urgency) are shown to matching donors nearby. If you are Visible on Radar, nearby patients and healthcare providers can discover you. When a donor accepts a request, the name and phone number needed to coordinate the donation are shared between the donor and the person who made the request.",
    "With service providers who run parts of REDDAR for us, including Google Firebase (phone sign-in), Google Maps and Places (location processing), Render (server hosting), Vercel (website hosting) and Google Fonts. These services are bound by their own privacy policies.",
    "For legal reasons: if the law requires it, or to respond to valid requests from public authorities.",
  ] },

  { type: "h2", text: "5. How long we keep it, and deleting your account" },
  { type: "p", text: "We keep personal data only as long as we need it for the purposes in this policy." },
  { type: "p", text: "You can instantly and permanently delete your account and all associated data at any time in the App: go to your Profile page and tap \"Delete Account\". This erases your personal data, location history and phone number from our active databases." },

  { type: "h2", text: "6. Your rights" },
  { type: "p", text: "Under India's Digital Personal Data Protection Act, 2023 and other laws that may apply to you, you can ask us to:" },
  { type: "list", items: [
    "tell you what personal data we hold about you and how we use it,",
    "correct or update inaccurate data,",
    "erase your data, and withdraw consent you gave earlier,",
    "address a grievance about how we handle your data.",
  ] },
  { type: "p", text: `To make a request, email ${CONTACT_EMAIL}. We may need to verify your identity first.` },

  { type: "h2", text: "7. Security" },
  { type: "p", text: "Data is encrypted in transit, and sign-in uses one-time passwords. We use administrative, technical and physical safeguards to protect your data, but no system is completely secure." },

  { type: "h2", text: "8. Children" },
  { type: "p", text: "Donors must meet the minimum age for blood donation. If you are under 18, use REDDAR only with the consent of a parent or guardian. If you believe a child has given us personal data without that consent, contact us and we will delete it." },

  { type: "h2", text: "9. Changes to this policy" },
  { type: "p", text: "We may update this policy from time to time. When we do, we will change the \"Last updated\" date on this page." },

  { type: "h2", text: "10. Contact us" },
  { type: "p", text: `${LEGAL_ENTITY}, ${LEGAL_ADDRESS}. Email: ${CONTACT_EMAIL}` },
];

export const termsOfService = [
  { type: "p", text: `These Terms of Service ("Terms") apply to the REDDAR mobile app and the website www.reddar.in (together, "REDDAR"), provided by ${LEGAL_ENTITY} ("Faircode", "we", "us"). By using REDDAR, you agree to these Terms. If you do not agree, please do not use REDDAR.` },

  { type: "h2", text: "1. What REDDAR is, and what it is not" },
  { type: "p", text: "REDDAR helps voluntary blood donors become discoverable to people who need blood, and helps them contact each other." },
  { type: "list", items: [
    "REDDAR is not an emergency service. In a medical emergency, contact a hospital directly or call your local emergency number, such as 112 in India.",
    "REDDAR is not a blood bank or a medical provider. We do not collect, test, store or supply blood.",
    "Whether someone can donate is decided by the hospital or blood bank, which screens every donor and handles all collection and transfusion.",
    "We cannot guarantee that a donor will be found, will respond, or will be eligible to donate.",
  ] },

  { type: "h2", text: "2. Who can use REDDAR" },
  { type: "p", text: "If you are under 18, you may use REDDAR only with the consent of a parent or guardian. To register as a donor, you must meet the minimum age and medical eligibility rules for blood donation, which the hospital or blood bank will check." },

  { type: "h2", text: "3. Your account" },
  { type: "list", items: [
    "Give accurate information, especially your name, blood group and phone number.",
    "Keep your phone and sign-in codes secure. You are responsible for activity on your account.",
    "Use Invisible mode when you are not available to donate, so people are not waiting on you.",
  ] },

  { type: "h2", text: "4. Using REDDAR responsibly" },
  { type: "p", text: "You agree not to:" },
  { type: "list", items: [
    "create false, misleading or duplicate blood requests,",
    "offer or ask for money or any other payment for blood. Donation through REDDAR is voluntary and unpaid,",
    "use another person's contact details for anything other than coordinating a blood donation,",
    "harass, threaten or impersonate anyone,",
    "copy, scrape or misuse data from REDDAR, or interfere with how it works.",
  ] },
  { type: "p", text: "We may suspend or remove accounts that break these rules." },

  { type: "h2", text: "5. Information on REDDAR" },
  { type: "p", text: "Articles in the Reddar Room and other content on REDDAR are general information, not medical advice. Always follow the advice of a doctor, hospital or blood bank." },

  { type: "h2", text: "6. Free service and changes" },
  { type: "p", text: "REDDAR is free to use. We may change, pause or stop parts of REDDAR at any time, for example for maintenance or to improve the service." },

  { type: "h2", text: "7. Ending your use" },
  { type: "p", text: "You can stop using REDDAR and delete your account at any time from your Profile page in the App. Our Privacy Policy explains what happens to your data." },

  { type: "h2", text: "8. Liability" },
  { type: "p", text: "REDDAR is provided \"as is\". To the fullest extent permitted by law, Faircode is not liable for any indirect or consequential loss arising from your use of REDDAR, including if a donor is not found, does not respond, or cannot donate. Nothing in these Terms limits any liability that cannot be limited by law." },

  { type: "h2", text: "9. Governing law" },
  { type: "p", text: "These Terms are governed by the laws of India. The courts at Kochi, Kerala have exclusive jurisdiction over any dispute." },

  { type: "h2", text: "10. Changes to these Terms" },
  { type: "p", text: "We may update these Terms. When we do, we will change the \"Last updated\" date on this page. If you keep using REDDAR after a change, you accept the updated Terms." },

  { type: "h2", text: "11. Contact us" },
  { type: "p", text: `${LEGAL_ENTITY}, ${LEGAL_ADDRESS}. Email: ${CONTACT_EMAIL}` },
];

export const contactPage = [
  { type: "notice", text: "REDDAR cannot arrange blood by email. If you need blood urgently, post a request in the REDDAR app and contact the hospital directly. In a medical emergency, call your local emergency number, such as 112 in India." },
  { type: "h2", text: "Email us" },
  { type: "p", text: `For questions about REDDAR, your account, privacy or partnerships, email ${CONTACT_EMAIL}.` },
  { type: "h2", text: "Delete your account" },
  { type: "p", text: "You can delete your account and data yourself at any time: open the REDDAR app, go to your Profile page and tap \"Delete Account\"." },
  { type: "h2", text: "Company website" },
  { type: "p", text: `REDDAR is built by ${LEGAL_ENTITY}. Learn more about us at ${COMPANY_WEBSITE}` },
  { type: "h2", text: "Office" },
  { type: "p", text: `${LEGAL_ENTITY}, ${LEGAL_ADDRESS}` },
];
