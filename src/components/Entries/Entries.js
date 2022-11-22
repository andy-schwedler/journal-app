import "./Entries.css";

export function Entries() {
  return (
    <>
      <article className="Entries--Container">
        <p className="Entries--Container__date">Nov 18, 2022</p>
        <div className="Entries--Container__header">
          <h2 className="entry--header">Motto</h2>
        </div>
        <p className="loggedjournalnotes">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </article>
    </>
  );
}
