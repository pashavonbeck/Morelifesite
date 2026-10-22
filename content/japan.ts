// Japan is two separate experiences. Edit the teaser copy here; each
// experience's full page lives in its own file under app/experiences/.

export const japanTiers = [
  {
    slug: "introduction-to-japow",
    image: "/images/card-intro.jpg",
    title: "INTRODUCTION TO JAPOW",
    level: "Beginner",
    place: "Nagano region",
    location: "Beginner \u2022 Nagano region",
    dates: "28 January \u2013 4 February 2027",
    price: "Early bird $2,890 AUD until 20 Nov",
    teaser:
      "Never skied or snowboarded before? Start here. A week designed for first-timers to learn the basics, build confidence and experience Japan\u2019s famous powder together.",
  },
  {
    slug: "chase-the-pow",
    image: "/images/card-chase.jpg",
    title: "CHASE THE POW",
    level: "Intermediate & Beyond",
    place: "Hokkaido",
    location: "Intermediate & Beyond \u2022 Hokkaido",
    dates: "6 \u2013 13 February 2027",
    price: "Early bird $3,050 AUD until 20 Nov",
    teaser:
      "Fresh morning tracks, deep snow, and epic tree runs. Built for confident riders ready to experience the Japanese powder they\u2019ve been dreaming about.",
  },
];

// Day-by-day for both Japan experiences (shown as a drop-down).
export const itinerary: { day: string; title: string; line: string; icon: string }[] = [
  { day: "Day 1", title: "Arrive", line: "Settle in and meet the crew over a welcome dinner.", icon: "✈️" },
  { day: "Day 2", title: "First day on the mountain", line: "Then ramen to refuel.", icon: "🏂" },
  { day: "Day 3", title: "Second day on the mountain", line: "Then an onsen to soak it all off.", icon: "♨️" },
  { day: "Day 4", title: "Third day on the mountain", line: "Midweek dinner with the crew.", icon: "🍜" },
  { day: "Day 5", title: "Rest day", line: "Sleep in, or convince your friends to go for another day of riding.", icon: "😴" },
  { day: "Day 6", title: "Fourth day on the mountain", line: "Back out on the snow.", icon: "❄️" },
  { day: "Day 7", title: "Last day and farewell dinner", line: "One last run, then celebrate together.", icon: "🥂" },
  { day: "Day 8", title: "Leave and say goodbyes", line: "Until the next one.", icon: "👋" },
];

// Introduction to Japow day-by-day (includes the beginner lessons).
export const introItinerary: { day: string; title: string; line: string; icon: string; image?: string }[] = [
  { day: "Day 1", title: "Arrive", line: "Check in, pick up your welcome pack and meet the crew over dinner.", icon: "✈️", image: "/itinerary/day-1.jpg" },
  { day: "Day 2", title: "First day on the mountain", line: "Breakfast, then your first lesson. Ramen to refuel.", icon: "🏂", image: "/itinerary/day-2.jpg" },
  { day: "Day 3", title: "Second day on the mountain", line: "Second lesson, more confidence, then a soak at the group onsen.", icon: "♨️", image: "/itinerary/day-3.jpg" },
  { day: "Day 4", title: "Third day on the mountain", line: "Ride with the crew. Midweek dinner and drinks.", icon: "🍜", image: "/itinerary/day-4.jpg" },
  { day: "Day 5", title: "Rest day", line: "Sleep in, explore, or ride another day on your lift pass.", icon: "😴", image: "/itinerary/day-5.jpg" },
  { day: "Day 6", title: "Fourth day on the mountain", line: "Back on the snow for more laps and chaotic chairlift conversations. Did someone say Apr\u00e8s?", icon: "❄️", image: "/itinerary/day-6.jpg" },
  { day: "Day 7", title: "Last mountain day and farewell dinner", line: "One last ride, then a farewell dinner with the crew.", icon: "🥂", image: "/itinerary/day-7.jpg" },
  { day: "Day 8", title: "Leave and say goodbyes", line: "Final breakfast, goodbyes and departures. Until the next one.", icon: "👋", image: "/itinerary/day-8.jpg" },
];

// Chase the Pow day-by-day (no lessons; one guided backcountry day, TBC).
export const chaseItinerary: { day: string; title: string; line: string; icon: string; image?: string }[] = [
  { day: "Day 1", title: "Arrive", line: "Check in, pick up your welcome pack and meet the crew over dinner.", icon: "✈️", image: "/itinerary/chase-day-1.jpg" },
  { day: "Day 2", title: "First day on the mountain", line: "Breakfast, then out to find the best snow. Ramen to refuel.", icon: "🏂", image: "/itinerary/chase-day-2.jpg" },
  { day: "Day 3", title: "Guided backcountry day (TBC)", line: "Head beyond the resort with a qualified local guide for deep powder and epic tree runs. Timing to be confirmed.", icon: "🏔️", image: "/itinerary/chase-day-3.jpg" },
  { day: "Day 4", title: "Rest day or another day of riding", line: "Sleep in, explore, or ride another day on your lift pass. Group dinner midweek.", icon: "🍜", image: "/itinerary/chase-day-4.jpg" },
  { day: "Day 5", title: "More riding", line: "Back out for more laps and fresh terrain, then a soak at the group onsen.", icon: "♨️", image: "/itinerary/chase-day-5.jpg" },
  { day: "Day 6", title: "Fourth day on the mountain", line: "Back out for deeper lines.", icon: "❄️", image: "/itinerary/chase-day-6.jpg" },
  { day: "Day 7", title: "Last day and farewell dinner", line: "One last ride, then a farewell dinner and group night out.", icon: "🥂", image: "/itinerary/chase-day-7.jpg" },
  { day: "Day 8", title: "Leave and say goodbyes", line: "Final breakfast, goodbyes and departures. Until the next one.", icon: "👋", image: "/itinerary/chase-day-8.jpg" },
];
