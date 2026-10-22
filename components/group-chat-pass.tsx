import { JapanPass } from "@/components/japan-pass";
import { ShareToGroupChat } from "@/components/share-to-group-chat";
import { site } from "@/content/site";

// Closing section on both Japan experience pages: boarding pass, invitation,
// register + share buttons.
export function GroupChatPass({
  tripTitle,
  variant = "default",
}: {
  tripTitle: string;
  variant?: "default" | "intro" | "chase";
}) {
  const formUrl = site.registerInterestUrl || site.mailingListUrl;
  const buttons = (
    <div className="gc-buttons">
      <a className="gc-button" href={formUrl} target="_blank" rel="noreferrer">
        Register interest <span className="clean-arrow">→</span>
      </a>
      <ShareToGroupChat title={tripTitle} />
    </div>
  );
  if (variant === "chase") {
    return (
      <JapanPass title="This one's making it out of the group chat." seat="Something new" sand dest="JAPOW">
        <p className="pass-body-line">Snow trips are better with a crew.</p>
        <p className="pass-body-line">
          Unreal powder days. Chaotic chairlift conversations. Getting stuck in waist deep powder
          and lost in tree runs. Laughing at each other&rsquo;s stacks. Ramen and drinks after a
          day on the mountain.
        </p>
        <p className="pass-body-line">
          The hardest part? Finding people who want the same adventure{" "}
          <strong>and are actually ready to book the flight.</strong>
        </p>
        <p className="pass-body-line">So, consider this your invitation.</p>
        {buttons}
      </JapanPass>
    );
  }
  if (variant === "intro") {
    return (
      <JapanPass title="This one's making it out of the group chat." seat="Something new" sand dest="JAPOW">
        <p className="pass-body-line">Snow trips are better with a crew.</p>
        <p className="pass-body-line">
          Sharing the first turns, the falls you&rsquo;ll laugh about later, and debriefing over
          delicious ramen with people who are just as excited to be there.
        </p>
        <p className="pass-body-line">
          The hardest part? Finding people who want the same adventure{" "}
          <strong>and are actually ready to book the flight.</strong>
        </p>
        <p className="pass-body-line">
          Come solo or bring a mate. There&rsquo;s a crew here to share it with.
        </p>
        {buttons}
      </JapanPass>
    );
  }
  return (
    <JapanPass title="This one's making it out of the group chat.">
      <p className="pass-body-line">Snow trips are better with a crew.</p>
      <p className="pass-body-line">
        Chaotic chairlift conversations. Unreal powder days. Laughing at each other&rsquo;s stacks.
        Ramen and drinks after a day on the mountain.
      </p>
      <p className="pass-body-line">
        The hardest part? Finding people who want the same adventure{" "}
        <strong>and are actually ready to book the flight.</strong>
      </p>
      <p className="pass-body-line">So, consider this your invitation.</p>
      {buttons}
    </JapanPass>
  );
}
