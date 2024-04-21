import baiterek from "./assets/baiterek.png";
import styles from "./css/Info.module.css";

function Info() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ListContainer}>
          <p>
            <span>
              {" "}
              <strong>Here's what you can do with our bot:</strong>
            </span>
          </p>
          <ul>
            <li>
              <span>
                Explore Attractions: Discover detailed descriptions, stunning
                photos, and essential information about Astana's landmarks and
                attractions.
              </span>
            </li>
            <li>
              <span>
                Get Recommendations: Receive personalized recommendations based
                on your current location.
              </span>
            </li>
            <li>
              <span>
                Plan Your Itinerary: Create and organize your itinerary with
                ease, including maps, opening hours, and directions to each
                destination.
              </span>
            </li>
            <li>
              <span>
                Stay Updated: Stay informed about upcoming events, festivals,
                exhibitions, and other happenings in Astana.
              </span>
            </li>
            <li>
              <span>
                Ask Questions: Have a question about a specific place or need
                assistance with your travel plans? Just ask, and our bot will
                provide prompt and helpful answers.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.baiterekContainer}>
          <p>
            <span>
              With our bot, you can easily access information about the must-see
              landmarks, hidden gems, upcoming events, and practical tips for
              making the most of your time in Astana. From iconic monuments like
              the Baiterek Tower and Khan-Shatyr Entertainment Center to
              lesser-known spots beloved by locals, our bot has you covered.
            </span>
          </p>
          <img src={baiterek} className={styles.baiterek} />
        </div>
      </div>
    </>
  );
}
export default Info;
