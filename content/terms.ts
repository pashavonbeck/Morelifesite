// Booking Terms & Cancellation Policy. Edit the wording here; the Terms page maps over it.

export const termsMeta = {
  title: "Japan trips: Booking Terms & Cancellation Policy",
  updated: "22 October 2026",
  intro: ["Your booking is with More Life Collective, trading as More Life Collective.", "For booking enquiries, cancellations or complaints, contact Morelifecollective@outlook.com."],
};

export type TermsBlock = { p: string } | { h: string } | { ul: string[] } | { table: string[][] };

export const terms: { n: string; title: string; blocks: TermsBlock[] }[] = [
  {
    "n": "1",
    "title": "Registering your interest",
    "blocks": [
      {
        "p": "Submitting an interest form does not secure a place, create a confirmed booking or require payment."
      },
      {
        "p": "We will email you the trip details, availability and instructions for reserving your place. Please read this policy and the relevant trip information before paying."
      }
    ]
  },
  {
    "n": "2",
    "title": "Trip details and prices",
    "blocks": [
      {
        "p": "Your trip information and reservation acknowledgement will specify the dates, location, accommodation, total price, inclusions, exclusions and payment requirements."
      },
      {
        "p": "All prices are in Australian dollars unless stated otherwise. Only services expressly listed as included form part of your package."
      },
      {
        "p": "Please check whether flights, transfers, equipment rental, lessons, meals and optional activities are included in your chosen trip."
      }
    ]
  },
  {
    "n": "3",
    "title": "Early-bird reservations",
    "blocks": [
      {
        "p": "Early-bird pricing is available for reservations accepted with a 10% deposit paid by 20 November 2026, subject to availability."
      },
      {
        "p": "Your deposit forms part of the total trip price. It is not an additional fee."
      },
      {
        "p": "From 21 November 2026, the advertised standard price applies to new bookings."
      },
      {
        "p": "We will acknowledge your reservation in writing. Until we separately confirm that the departure is going ahead, your reservation remains provisional."
      }
    ]
  },
  {
    "n": "4",
    "title": "Departure confirmation and minimum numbers",
    "blocks": [
      {
        "p": "Each trip requires a minimum number of paying guests, as stated in its booking information, and secured travel arrangements before departure can be confirmed."
      },
      {
        "p": "We will confirm each departure as soon as these requirements are met, and no later than 45 days before departure, on the dates below:"
      },
      {
        "table": [
          [
            "Trip departure",
            "Departure-confirmation deadline",
            "Final-payment deadline"
          ],
          [
            "28 January 2027 — Beginner trip",
            "14 December 2026",
            "29 December 2026"
          ],
          [
            "6 February 2027 — Intermediate trip",
            "23 December 2026",
            "7 January 2027"
          ]
        ]
      },
      {
        "p": "Each departure is assessed separately."
      },
      {
        "p": "Please wait for written departure confirmation before booking flights or other non-refundable travel arrangements. A deposit receipt or reservation acknowledgement is not departure confirmation."
      },
      {
        "p": "Until departure is confirmed, you may withdraw your provisional reservation and receive a full refund of all payments made to us within 14 days of notifying us."
      },
      {
        "p": "If we cannot confirm your trip by its confirmation deadline, we will cancel provisional reservations and refund 100% of all payments made to More Life Collective, including deposits, within 14 days."
      },
      {
        "p": "We will not extend a provisional reservation beyond that deadline without your express agreement. You may choose a full refund instead."
      },
      {
        "p": "Once departure is confirmed, we will not cancel it solely because subsequent guest cancellations reduce the group below the original minimum."
      }
    ]
  },
  {
    "n": "5",
    "title": "Final payments",
    "blocks": [
      {
        "p": "Full payment is due 30 days before departure, on the dates shown above."
      },
      {
        "p": "Guests who have paid a deposit must pay their remaining balance by the applicable deadline. Guests booking at the standard price must also pay the full trip price by that deadline."
      },
      {
        "p": "New bookings accepted after the final-payment deadline require full payment when booking."
      },
      {
        "p": "We will not request final balances before confirming departure in writing."
      }
    ]
  },
  {
    "n": "6",
    "title": "Missed payments",
    "blocks": [
      {
        "p": "If your payment is overdue, we will notify you in writing and give you seven days from that notice to pay."
      },
      {
        "p": "If payment remains outstanding after that period, we may cancel your booking and release your place."
      },
      {
        "p": "Following cancellation for non-payment, we may retain an amount towards reasonable cancellation costs calculated under section 7. Any remaining amount will be refunded."
      },
      {
        "p": "This does not limit your rights under Australian Consumer Law."
      }
    ]
  },
  {
    "n": "7",
    "title": "If you cancel",
    "blocks": [
      {
        "h": "Before departure is confirmed"
      },
      {
        "p": "Until we confirm departure in writing, you may withdraw your provisional reservation and receive a full refund as set out in section 4."
      },
      {
        "h": "After departure is confirmed"
      },
      {
        "p": "If you cancel because of a change of mind or personal circumstances, including illness, injury or changes to your travel plans, reasonable cancellation charges may apply."
      },
      {
        "p": "Your deposit may be partly or fully retained towards those charges. It is not automatically forfeited in every case."
      },
      {
        "p": "Cancellation charges will depend on when you cancel and the reasonable, non-recoverable costs already committed for your booking. These may include accommodation, lift passes, lessons, guides, other supplier charges and reasonable administration costs directly associated with your cancellation."
      },
      {
        "p": "Charges may be up to 100% of the trip price, but will not exceed the reasonable, legally recoverable loss attributable to your cancellation."
      },
      {
        "p": "We will take reasonable steps to reduce these costs, including seeking supplier refunds and attempting to fill your place. We will account for supplier refunds, costs saved and replacement bookings so that we do not recover the same loss twice."
      },
      {
        "p": "Any payment fees or administration costs deducted must be reasonable, directly related to your booking or cancellation and legally recoverable."
      },
      {
        "p": "We will explain deductions and refund any remaining amount. These charges do not apply where you have a legal right to cancel without them."
      },
      {
        "p": "Please email [email address] as soon as you need to cancel. We will acknowledge your cancellation in writing. Cancellation takes effect when we receive your notice, not when we send our acknowledgement."
      }
    ]
  },
  {
    "n": "8",
    "title": "Transferring your place",
    "blocks": [
      {
        "p": "You may ask to transfer your booking to another eligible traveller."
      },
      {
        "p": "Transfers and name changes depend on supplier approval, availability and whether the replacement traveller meets the trip’s requirements. We will not unreasonably refuse a suitable replacement."
      },
      {
        "p": "Any reasonable supplier or administration costs associated with the transfer will be explained before you agree to proceed."
      },
      {
        "p": "Where a replacement booking reduces the loss caused by your cancellation, we will account for that when calculating any cancellation charges or refund."
      }
    ]
  },
  {
    "n": "9",
    "title": "If we cancel or significantly change the trip",
    "blocks": [
      {
        "p": "If we cancel for a business reason within our control, including insufficient numbers before confirmation, we will refund all payments made to us for the cancelled trip within 14 days."
      },
      {
        "p": "You may choose an alternative trip or credit if offered, but you do not have to accept one instead of a refund."
      },
      {
        "p": "Reasonable minor changes to timings, activities or accommodation may sometimes be necessary. We will communicate these promptly and maintain the overall nature and standard of the trip."
      },
      {
        "p": "If a significant change is proposed, we will explain the change, available alternatives and any cancellation or refund rights you have under applicable law."
      },
      {
        "p": "Events outside our reasonable control are addressed in section 10."
      }
    ]
  },
  {
    "n": "10",
    "title": "Weather, mountain conditions and travel disruption",
    "blocks": [
      {
        "h": "Snow and riding conditions"
      },
      {
        "p": "Snow sports depend on weather and mountain conditions outside our control. We cannot guarantee snowfall, snow coverage, powder, visibility, lift operations, access to particular terrain or a particular number of riding days."
      },
      {
        "p": "Insufficient snow, strong winds, storms, avalanche risk or resort closures may affect or prevent skiing, snowboarding, lessons or guided activities."
      },
      {
        "p": "We may reasonably change the itinerary, resort or activities for safety or operational reasons. We will communicate changes promptly and try to arrange suitable alternatives where reasonably possible."
      },
      {
        "p": "Disappointing conditions do not, by themselves, entitle you to a refund where booked services remain available and are provided as agreed."
      },
      {
        "p": "If an included service cannot be delivered, or disruption significantly affects the nature of the trip, we will assess alternatives and any refund or other remedy under applicable law. The availability of accommodation or other services does not automatically remove your rights concerning affected services."
      },
      {
        "h": "Your flights and other travel arrangements"
      },
      {
        "p": "You are responsible for flights, transport and other travel arrangements booked independently of More Life Collective."
      },
      {
        "p": "Where weather or other disruption outside our control delays or cancels those arrangements, we do not ordinarily cover replacement flights, additional accommodation, meals, transport or other resulting expenses, except where required by law."
      },
      {
        "p": "If you cannot reach the trip, arrive late or miss included activities while our booked services remain available as agreed, a refund is not automatically payable. Any cancellation or unused services will be assessed under sections 7 and 13 and applicable law."
      },
      {
        "p": "Please contact us promptly if your travel is disrupted."
      },
      {
        "h": "Insurance and claims"
      },
      {
        "p": "You are responsible for checking that your travel insurance suits your activities and addresses relevant cancellation and disruption risks. Ask your insurer specifically about weather-related travel delays, missed departures, piste closures and insufficient snow."
      },
      {
        "p": "Cover depends on your policy’s terms, exclusions, limits and claim requirements. More Life Collective cannot guarantee that an insurer will accept a claim."
      },
      {
        "p": "We will provide reasonable supporting documentation for an insurance claim where available."
      },
      {
        "h": "Where the trip cannot proceed"
      },
      {
        "p": "If weather or another event outside our reasonable control prevents the trip from proceeding, we will explain your options and assess refunds and other remedies under applicable law."
      },
      {
        "p": "We will seek relevant supplier refunds and account for costs saved. Any deductions must be legally permitted and limited to reasonable, evidenced costs that cannot be recovered."
      },
      {
        "p": "Nothing in this section excludes our liability where it cannot lawfully be excluded, limits your statutory rights or requires you to claim on insurance instead of receiving a remedy we legally owe you."
      }
    ]
  },
  {
    "n": "11",
    "title": "Hosting and specialist services",
    "blocks": [
      {
        "p": "Your More Life host will welcome the group, coordinate included arrangements and provide social hosting."
      },
      {
        "p": "Unless expressly included in your booking, hosting does not include professional ski or snowboard instruction, mountain guiding, individual supervision or emergency rescue services."
      },
      {
        "p": "Included lessons, guiding and other specialist activities will be delivered by the providers identified in your trip arrangements. Guests must follow their safety instructions and participation requirements."
      },
      {
        "p": "Accompanying the host or other guests on the mountain does not, by itself, constitute a professionally guided or supervised activity."
      },
      {
        "p": "Using independent providers does not remove our responsibility for our own services or obligations imposed by law."
      }
    ]
  },
  {
    "n": "12",
    "title": "Travel insurance",
    "blocks": [
      {
        "p": "As a condition of participation, you must hold travel insurance appropriate for Japan and your planned activities for the duration of the trip."
      },
      {
        "p": "Check that your policy covers skiing or snowboarding, medical treatment, emergency evacuation and repatriation. Backcountry, off-piste and touring activities may require specific additional cover."
      },
      {
        "p": "We strongly recommend purchasing insurance when you book and ensuring it includes appropriate cancellation and disruption cover for illness, injury, weather and other unforeseen circumstances."
      },
      {
        "p": "You are responsible for checking your policy’s conditions, exclusions, activity restrictions and claim requirements. Not every reason for cancellation or disruption will be covered."
      },
      {
        "p": "Travel insurance does not replace your legal rights against More Life Collective."
      }
    ]
  },
  {
    "n": "13",
    "title": "Personal travel arrangements and unused services",
    "blocks": [
      {
        "p": "You are responsible for arranging valid travel documents and any flights or other services not included in your package."
      },
      {
        "p": "Refunds described in this policy cover payments made to More Life Collective. They do not automatically include separately booked travel expenses. This does not exclude compensation or other remedies required by law."
      },
      {
        "p": "If an included service is available as agreed but you choose not to use it, arrive late or leave early for personal reasons, a refund is not generally provided. We will account for recoverable supplier refunds and costs saved when assessing any refund."
      },
      {
        "p": "If illness or injury prevents you from continuing, cancellation charges or unused services will be assessed under this policy and applicable law."
      },
      {
        "p": "This does not affect your rights where we fail to provide a service as required by law."
      }
    ]
  },
  {
    "n": "14",
    "title": "Participation, safety and risk acknowledgement",
    "blocks": [
      {
        "p": "Skiing, snowboarding and mountain activities involve inherent risks. These include falls, collisions, ice, changing terrain, adverse weather, equipment failure and the actions of other mountain users. Backcountry and off-piste activities may involve additional risks, including avalanches, unmarked hazards, remote terrain and delayed rescue."
      },
      {
        "p": "These risks can result in serious injury, permanent disability or death, including when reasonable precautions are taken."
      },
      {
        "p": "By booking, you acknowledge these risks and agree to take reasonable responsibility for your own conduct and participation. This acknowledgement does not waive your legal rights or excuse a failure by us to meet our legal obligations."
      },
      {
        "p": "You must:"
      },
      {
        "ul": [
          "Meet the stated ability requirements and describe your experience honestly.",
          "Take part within your ability, fitness and experience.",
          "Follow reasonable safety instructions, resort rules, closures and local laws.",
          "Use appropriate, correctly fitted equipment and wear a helmet when skiing or snowboarding.",
          "Avoid participating while impaired by alcohol, drugs or any other condition that makes participation unsafe.",
          "Tell the host or activity provider promptly if you feel unwell, are injured or believe an activity is unsafe."
        ]
      },
      {
        "p": "You may choose not to participate in an activity. Refunds for unused services will be assessed under section 13."
      },
      {
        "p": "The host or activity provider may reasonably restrict or stop your participation where necessary for safety. Any cancellation charges or refund will be assessed according to the circumstances, reasonable costs and applicable law."
      }
    ]
  },
  {
    "n": "15",
    "title": "Health, injuries and emergency assistance",
    "blocks": [
      {
        "p": "Before participating, you are responsible for considering whether the activities are suitable for your health and seeking medical advice where appropriate."
      },
      {
        "p": "Please tell us before booking about any health condition, injury, accessibility need or other circumstance that may materially affect safe participation or require an adjustment. If something changes before departure, please let us know promptly so we can discuss suitable arrangements."
      },
      {
        "p": "Your host is not a substitute for a medical professional, ski patrol or emergency rescue service. Medical care, rescue and evacuation may be delayed or limited in mountain or remote areas."
      },
      {
        "p": "If you become ill or injured, we may contact emergency services, your insurer or your nominated emergency contact and provide reasonable assistance within our capabilities."
      },
      {
        "p": "You are responsible for medical, rescue, evacuation and associated expenses to the extent they are not covered by insurance or legally payable by us or another responsible party."
      }
    ]
  },
  {
    "n": "16",
    "title": "Liability",
    "blocks": [
      {
        "p": "More Life Collective will provide its services with the care and skill required by applicable law."
      },
      {
        "p": "An accident, injury, illness or loss occurring during the trip does not, by itself, establish that More Life Collective is legally responsible. Liability depends on the circumstances and applicable law."
      },
      {
        "p": "Subject to applicable law, we are not responsible for injury, illness, death, loss or damage to the extent caused by inherent activity risks, your own acts or omissions, or events outside our reasonable control, where we have met our legal obligations and have not caused or contributed to the harm."
      },
      {
        "p": "You are responsible for your personal belongings and hired equipment. This does not exclude our liability for loss or damage for which we are legally responsible."
      },
      {
        "p": "Optional activities you arrange independently are outside your package unless expressly included. Our responsibility for any recommendation, arrangement or other service we provide remains subject to applicable law."
      },
      {
        "p": "Any activity provider’s separate participation terms or waiver will be subject to applicable law. It does not automatically remove your rights against More Life Collective."
      },
      {
        "p": "Nothing in these terms excludes, restricts or modifies any consumer guarantee, duty, liability or remedy that cannot lawfully be excluded, restricted or modified. This includes liability for negligence where it cannot lawfully be excluded."
      }
    ]
  },
  {
    "n": "17",
    "title": "Problems and complaints",
    "blocks": [
      {
        "p": "Please tell your host promptly if something is wrong so we have a reasonable opportunity to help or resolve the issue."
      },
      {
        "p": "You may also contact [email address]."
      },
      {
        "p": "A delay in reporting a problem does not automatically remove your legal rights."
      }
    ]
  },
  {
    "n": "18",
    "title": "Your legal rights",
    "blocks": [
      {
        "p": "This policy does not take away your rights under Australian Consumer Law or other applicable legislation."
      },
      {
        "p": "If you are legally entitled to a refund, compensation or another remedy, we will honour that regardless of anything else in this policy."
      }
    ]
  }
];
