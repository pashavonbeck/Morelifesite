// Shared experience-page copy: "What to expect", "Before you book" and
// "Cancellations & changes". Edit once here and both Japan pages update.
// NOTE: these refer to the "full More Life Collective Booking Terms" —
// have a lawyer review the final wording before bookings open.
//
// WHILE THE SITE IS INTEREST-ONLY: pages use `goodToKnow` below. The `terms`
// export (deposit, cancellations, booking terms) is kept for later but is NOT
// shown anywhere. Switch the pages back to `terms` when you start taking bookings.

export type Block = { h?: string; p?: string[]; ul?: string[] };

export const snowCamp = {
  title: "Snow camp, not luxury travel",
  text: "We'll stay together in a social lodge or hostel-style base close to the mountain, somewhere to have breakfast together and hang out after a day on the snow. You may share a bedroom and bathroom with other members of the crew.",
};

export const mountainBase: Block[] = [
  { p: ["This is a group trip, not a luxury retreat or resort. We\u2019ll stay together in a social lodge or hostel-style base close to the mountain, somewhere to have breakfast together and hang out after a day on the snow."] },
  { p: ["You may share a bedroom and bathroom with other members of the crew. Think shared, social and budget-friendly, with the focus on the mountain and the people."] },
  { p: ["The exact base is confirmed once we know numbers. We\u2019ll email you the details."] },
];

export const strippedBack = {
  "heading": "Your mountain base.",
  "paras": [
    "We’ll stay in a ski lodge, shared hostel-style base, sharing rooms, bathrooms and stories from the day. Somewhere to recharge between mountain adventures, get to know the crew and settle into life in the snow."
  ]
};

// Intro paragraphs shown above the swipe-through itinerary.
export const itineraryIntro: string[] = [
  "We’ve planned the trip with space to do your own thing. Some evenings are free to explore, find somewhere to eat or head out for drinks. Lunch is up to you too — dine on the mountain or grab some famous Japanese convenience store snacks.",
  "Want another lesson or an extra day on the mountain? These can be added at your own expense whilst on the trip."
];

// Shown under the swipe-through itinerary.
export const itineraryNote =
  "Snowfall, visibility and lift operations can change quickly, so the itinerary may move around depending on weather, mountain conditions and what works for the group.";

export const rentals: Block = {
  "h": "Rentals are not included",
  "p": [
    "Ski and snowboard equipment, helmets and snow clothing aren't included.",
    "Once your place is confirmed, we'll send recommended rental companies, booking links and a packing guide. You book directly with the supplier, so you can choose the right gear, sizes and extras for you."
  ]
};

export const notIncluded: string[] = [
  "Flights and travel to the meeting point",
  "Ski or snowboard equipment, helmets and snow clothing",
  "Travel insurance",
  "Lunches",
  "Dinners outside the three included group dinners",
  "Personal expenses",
  "Optional activities and add-ons"
];

export const terms = {
  "intro": {
    "before": {
      "h": "Please read before securing your place",
      "ul": [
        "Early bird price: $2,890 AUD per person (Chase the Pow: $3,050 AUD) until 20 November. Prices increase on 21 November. Prices are per person in shared accommodation.",
        "The final property and exact location are confirmed before bookings open.",
        "Groups are small, around 5\u201310 guests, and spots are limited.",
        "This is a shared snow camp, not a luxury or private-room holiday.",
        "Flights and travel to the meeting point aren't included. We'll send a simple how-to-get-there guide.",
        "Equipment rental and snow clothing aren't included.",
        "You need to meet the stated ability level for this experience.",
        "The experience needs a minimum number of guests to run.",
        "The itinerary may change because of weather, snow conditions, safety or supplier availability.",
        "Comprehensive travel insurance covering skiing or snowboarding is compulsory.",
        "Your booking is subject to the full More Life Collective Booking Terms."
      ],
      "p": [
        "Please wait until the experience is officially confirmed before booking non-refundable flights."
      ]
    },
    "cancel": [
      {
        "h": "If you cancel",
        "p": [
          "Your booking deposit is non-refundable if you cancel because of a change of mind or personal circumstances.",
          "Further charges depend on when you cancel and the non-refundable costs already committed to accommodation, lift passes, lessons, guides and other suppliers. Charges can be up to 100% of the experience price.",
          "If we can transfer your place to another eligible traveller, we may refund what we recover, less supplier charges, payment fees and reasonable admin costs. Name changes need approval and may incur supplier fees.",
          "Travel insurance is compulsory and should cover cancellation due to illness, injury and other eligible unforeseen events."
        ]
      },
      {
        "h": "Weather and mountain conditions",
        "p": [
          "We can't guarantee snowfall, powder, visibility, lift operations, access to particular terrain or specific weather.",
          "The itinerary, resort, activities or riding days may change because of weather, safety, lift closures or mountain conditions. We'll always try to offer a suitable alternative where reasonably possible.",
          "Refunds aren't ordinarily provided for weather-related changes or missed mountain time where the experience can still run, except where the law requires."
        ]
      },
      {
        "h": "If we change or cancel the experience",
        "p": [
          "The experience needs a minimum number of guests. If we cancel because minimum numbers aren't reached, you'll receive a full refund of all payments made to More Life Collective.",
          "If an included activity can't run, we may offer a reasonable alternative, reschedule it, or pass on any refund or credit we receive from the supplier.",
          "If extraordinary circumstances outside our control stop the experience running, your options depend on the circumstances, supplier terms and the full Booking Terms.",
          "Nothing here limits your rights under Australian Consumer Law."
        ]
      }
    ]
  },
  "chase": {
    "before": {
      "h": "Please read before securing your place",
      "ul": [
        "Early bird price: $2,890 AUD per person (Chase the Pow: $3,050 AUD) until 20 November. Prices increase on 21 November. Prices are per person in shared accommodation.",
        "The final property and exact location are confirmed before bookings open.",
        "Groups are small, around 5\u201310 guests, and spots are limited.",
        "This is a shared snow camp, not a luxury or private-room holiday.",
        "Flights and travel to the meeting point aren't included. We'll send a simple how-to-get-there guide.",
        "Equipment rental and snow clothing aren't included.",
        "You need to meet the stated ability level for this experience.",
        "The experience needs a minimum number of guests to run.",
        "The itinerary may change because of weather, snow conditions, safety or supplier availability.",
        "Comprehensive travel insurance covering skiing, snowboarding and backcountry riding is compulsory.",
        "Your booking is subject to the full More Life Collective Booking Terms."
      ],
      "p": [
        "Please wait until the experience is officially confirmed before booking non-refundable flights."
      ]
    },
    "cancel": [
      {
        "h": "If you cancel",
        "p": [
          "Your booking deposit is non-refundable if you cancel because of a change of mind or personal circumstances.",
          "Further charges depend on when you cancel and the non-refundable costs already committed to accommodation, lift passes, guides and other suppliers. Charges can be up to 100% of the experience price.",
          "If we can transfer your place to another eligible traveller, we may refund what we recover, less supplier charges, payment fees and reasonable admin costs. Name changes need approval and may incur supplier fees.",
          "Travel insurance is compulsory and should cover cancellation due to illness, injury and other eligible unforeseen events."
        ]
      },
      {
        "h": "Weather and mountain conditions",
        "p": [
          "We can't guarantee snowfall, powder, visibility, lift operations, access to particular terrain or specific weather.",
          "The itinerary, resort, activities or riding days may change because of weather, safety, lift closures or mountain conditions. We'll always try to offer a suitable alternative where reasonably possible.",
          "Refunds aren't ordinarily provided for weather-related changes or missed mountain time where the experience can still run, except where the law requires."
        ]
      },
      {
        "h": "If we change or cancel the experience",
        "p": [
          "The experience needs a minimum number of guests. If we cancel because minimum numbers aren't reached, you'll receive a full refund of all payments made to More Life Collective.",
          "If an included activity can't run, we may offer a reasonable alternative, reschedule it, or pass on any refund or credit we receive from the supplier.",
          "If extraordinary circumstances outside our control stop the experience running, your options depend on the circumstances, supplier terms and the full Booking Terms.",
          "Nothing here limits your rights under Australian Consumer Law."
        ]
      }
    ]
  }
} as Record<"intro" | "chase", { before: Block; cancel: Block[] }>;

// "The finer details" section at the bottom of each Japan page.
export type FinerPart = { p: string; link?: boolean } | { ul: string[] };
export type FinerSection = { h: string; parts: FinerPart[] };

export const finerDetails: Record<"intro" | "chase", FinerSection[]> = {
  "intro": [
    {
      "h": "Good to know",
      "parts": [
        {
          "ul": [
            "A small crew of 5–9 guests plus your More Life host.",
            "Prices are per person in shared accommodation, with shared bedrooms and bathrooms.",
            "This experience is designed for beginners to intermediate riders. Check the ability description above to make sure it suits you.",
            "Travel insurance covering your planned skiing or snowboarding activities is compulsory.",
            "Snowfall, visibility and lift operations can change quickly, so the itinerary may move around depending on weather, mountain conditions, safety and what works for the group."
          ]
        }
      ]
    },
    {
      "h": "Getting there & rentals",
      "parts": [
        {
          "ul": [
            "Flights and travel to the meeting point aren’t included. You will have to make your own way to the mountain. Ski and snowboard equipment, helmets and snow clothing aren’t included.",
            "Once departure is confirmed, we’ll send an arrival guide including how to get there, recommended rental companies and a packing list. You’ll book rentals directly with the supplier.",
            "Please wait for written departure confirmation before booking flights or other non-refundable travel arrangements."
          ]
        }
      ]
    },
    {
      "h": "Booking, payments & cancellations",
      "parts": [
        {
                "p": "Register your interest—it’s free, with no commitment. We’ll email you the trip details and a link to reserve your place."
        },
        {
                "p": "A 10% deposit secures your place and counts towards the total price."
        },
        {
                "p": "Snow and mountain conditions are outside our control, so More Life Collective can’t be held responsible for them. Some costs, such as ski lift passes, may be non-refundable once booked."
        },
        {
                "p": "Full details on payments, confirmation and cancellations are in our Booking Terms & Cancellation Policy. Please read and agree to it before paying.",
                "link": true
        }
]
    }
  ],
  "chase": [
    {
      "h": "Good to know",
      "parts": [
        {
          "ul": [
            "A small crew of 5–9 guests plus your More Life host.",
            "Prices are per person in shared accommodation, with shared bedrooms and bathrooms.",
            "This experience is for intermediate riders and above. Please check you meet the ability requirements listed above, including those for any guided activities.",
            "Travel insurance covering your planned skiing or snowboarding activities is compulsory. Check that any backcountry, off-piste or touring activities are specifically covered.",
            "Snowfall, visibility and lift operations can change quickly, so the itinerary may move around depending on weather, mountain conditions, safety and what works for the group."
          ]
        }
      ]
    },
    {
      "h": "Getting there & rentals",
      "parts": [
        {
          "ul": [
            "Flights and travel to the meeting point aren’t included. You will have to make your own way to the mountain. Ski and snowboard equipment, helmets and snow clothing aren’t included.",
            "Once departure is confirmed, we’ll send an arrival guide including how to get there, recommended rental companies and a packing list. You’ll book rentals directly with the supplier and should check that your equipment suits the planned activities (backcountry touring).",
            "Please wait for written departure confirmation before booking flights or other non-refundable travel arrangements."
          ]
        }
      ]
    },
    {
      "h": "Booking, payments & cancellations",
      "parts": [
        {
                "p": "Register your interest—it’s free, with no commitment. We’ll email you the trip details and an early-bird deposit access link to reserve your place."
        },
        {
                "p": "A 10% deposit secures your place and counts towards the total price."
        },
        {
                "p": "Snow and mountain conditions are outside our control, so More Life Collective can’t be held responsible for them. Some costs, such as ski lift passes, may be non-refundable once booked."
        },
        {
                "p": "Full details on payments, confirmation and cancellations are in our Booking Terms & Cancellation Policy. Please read and agree to it before paying.",
                "link": true
        }
]
    }
  ]
};

// Link text inside the finer details that points at the /terms page.
export const bookingTermsLabel = "Booking Terms & Cancellation Policy";

// Pricing drop-down content (inside "The details").
export const pricing: Record<"intro" | "chase", Block[]> = {
  "intro": [
    {
      "ul": [
        "Early bird price: $2,890 AUD per person",
        "Early bird pricing ends 20 November. Prices increase on 21 November.",
        "Prices are per person in a shared room.",
        "Limited spots. Crews are 5–9 guests plus your host, so places go quickly."
      ]
    }
  ],
  "chase": [
    {
      "ul": [
        "Early bird price: $3,050 AUD per person",
        "Early bird pricing ends 20 November. Prices increase on 21 November.",
        "Prices are per person in a shared room and include the guided backcountry day.",
        "Limited spots. Crews are 5–9 guests plus your host, so places go quickly."
      ]
    }
  ]
};
